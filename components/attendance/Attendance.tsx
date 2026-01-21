'use client'

import { useState } from 'react'

export default function AttendanceForm() {
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [count, setCount] = useState(1)

    const phoneNumber = '6288218144707'

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!name || !status) return

        let message = `Assalamu’alaikum warahmatullahi wabarakatuh.\n\nDengan hormat,\nSaya bermaksud menyampaikan konfirmasi kehadiran atas undangan yang telah diberikan.\n\n`
        message += `Nama: *${name}*\n`

        if (status === 'hadir') {
            message += `Konfirmasi: *BERSEDIA HADIR*\n`
            message += `Jumlah Hadir: *${count} Orang*`
        } else {
            message += `Konfirmasi: *BELUM BISA HADIR*`
        }

        message += `\n\nAtas perhatian Bapak/Ibu, saya ucapkan terima kasih.\nWassalamu’alaikum warahmatullahi wabarakatuh.`

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`

        window.open(url, '_blank')
    }

    return (
        <section className="bg-[#CACACA] text-sm flex flex-col gap-5 pt-5 pb-15 px-7.5">
            <h3 className="text-[#595959] text-center font-extralight text-[27px] font-ivy-mode">
                Konfirmasi Kehadiran
            </h3>

            <p className="text-xs text-[#595959] text-center">
                Mohon kesediaannya untuk melakukan konfirmasi kehadiran, supaya kami bisa
                mempersiapkan kehadiran anda dengan baik.
            </p>

            <form
                onSubmit={handleSubmit}
                className="text-[#7A7A7A] flex flex-col gap-5"
            >
                {/* NAMA */}
                <input
                    type="text"
                    placeholder="Nama"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white w-full p-2.5 rounded-xs border focus:outline-none capitalize"
                    required
                />

                {/* STATUS + JUMLAH */}
                <div className="flex gap-2 items-end">
                    <div className="flex-1">
                        <label className="text-[10px]">Konfirmasi</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="bg-white w-full p-2.5 rounded-xs border focus:outline-none"
                            required
                        >
                            <option value="">Pilih</option>
                            <option value="hadir">Bersedia Hadir</option>
                            <option value="tidak_hadir">Belum Bisa Hadir</option>
                        </select>
                    </div>

                    <div className="w-22.5">
                        <label className="text-[10px]">Jumlah Hadir</label>
                        <input
                            type="number"
                            min={1}
                            max={10}
                            disabled={status !== 'hadir'}
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                            className="
                bg-white w-full p-2.5 rounded-xs border focus:outline-none
                disabled:bg-gray-100 disabled:text-gray-400
              "
                        />
                    </div>
                </div>

                {/* SUBMIT */}
                <button
                    type="submit"
                    disabled={!name || !status}
                    className="
            w-full py-2 bg-[#333333] text-white
            disabled:opacity-50 transition
          "
                >
                    Kirim Konfirmasi
                </button>
            </form>
        </section>
    )
}
