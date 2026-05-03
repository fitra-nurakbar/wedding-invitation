import { test, expect } from '@playwright/test';

test.describe('Wedding Invitation Automation', () => {
  test('Aplikasi termuat dan tulisan cover terlihat', async ({ page }) => {
    // Navigasi ke halaman utama
    await page.goto('/');

    // Cek keberadaan teks utama (case-insensitive) misal tulisan 'The Wedding Of'
    const weddingText = page.getByText(/The Wedding Of/i).first();
    const coupleText = page.getByText(/Ifha & Jefri/i).first();

    await expect(weddingText).toBeVisible();
    await expect(coupleText).toBeVisible();
  });

  test('Simulasi interaksi Form Kehadiran', async ({ page }) => {
    await page.goto('/');

    // Pastikan teks bagian hadir muncul
    const heading = page.locator('text=Konfirmasi Kehadiran').first();
    await expect(heading).toBeVisible();

    // Pastikan Input Nama bisa diketik
    const nameInput = page.getByPlaceholder('Nama');
    await expect(nameInput).toBeVisible();
    await nameInput.fill('Penguji Otomatis');

    // Interaksi Select Status
    const statusSelect = page.locator('select').first();
    await statusSelect.selectOption('hadir');

    // Interaksi Input Number untuk jumlah yang hadir (harus aktif)
    const countInput = page.locator('input[type="number"]');
    await expect(countInput).not.toBeDisabled();
    await countInput.fill('2');

    // Cek Tombol 'Kirim Konfirmasi' valid dan muncul (tanpa klik karena redirect WA)
    const btnSubmit = page.locator('button:has-text("Kirim Konfirmasi")');
    await expect(btnSubmit).toBeVisible();
    await expect(btnSubmit).not.toBeDisabled();
  });
});
