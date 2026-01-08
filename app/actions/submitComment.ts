'use server'

import { headers } from 'next/headers'
import { supabase } from '@/utils/supabase/server' 
import { containsBadWords } from '@/utils/badWords'

export async function submitComment(
  name: string,
  message: string
) {
  if (!name || !message) {
    return { error: 'Data tidak lengkap' }
  }

  // Ambil IP user
  const headersList = headers()
  const ip =
    (await headersList).get('x-forwarded-for')?.split(',')[0] ??
    'unknown'

  // Filter kata kasar
  if (containsBadWords(name)) {
    return { error: 'Nama mengandung kata tidak pantas' }
  }

if (containsBadWords(message)) {
    return { error: 'Komentar mengandung kata tidak pantas' }
  }
  // Cek apakah IP sudah pernah komentar
  const { data: existingIP } = await supabase
    .from('comment_ips')
    .select('ip')
    .eq('ip', ip)
    .single()

  if (existingIP) {
    return {
      error: 'Anda hanya diperbolehkan mengirim 1 komentar'
    }
  }

  // Simpan komentar
  const { error: insertError } = await supabase
    .from('messages')
    .insert([{ name, message }])

  if (insertError) {
    return { error: 'Gagal menyimpan komentar' }
  }

  // Catat IP (permanen)
  await supabase
    .from('comment_ips')
    .insert({ ip })

  return { success: true }
}
