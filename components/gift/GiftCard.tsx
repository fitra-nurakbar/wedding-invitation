'use client'

import { CopyIcon } from '@/utils/Icons'
import { BankAccount } from '@/utils/types/bankAccount'
import { useState } from 'react'
import { AnimatePresence, easeOut, motion } from 'framer-motion'

type BankCardProps = {
    data: BankAccount
}

export default function GiftCard({ data }: BankCardProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(data.noBank)
            setCopied(true)

            setTimeout(() => {
                setCopied(false)
            }, 2000)
        } catch (err) {
            alert('Gagal menyalin alamat')
        }
    }

    const zoomInItem = {
        hidden: {
            opacity: 0,
            scale: 0.85,
            y: 30,
        },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeOut,
            },
        },
    }

    return (
        <motion.div
            variants={zoomInItem}
            className="flex flex-col items-center gap-2 rounded-xs border-2 border-[#E5E5E5] p-4 shadow-sm bg-[radial-gradient(at_center_left,white,#D3D3D3)]"
        >
            {/* BANK */}
            <h3 className="w-full text-[20px] font-semibold tracking-wide text-right">
                {data.bankName}
            </h3>

            {/* NAMA */}
            <h3 className="w-full text-left  text-[13px] font-semibold">
                {data.name}
            </h3>

            {/* NOMOR */}
            <p className="w-full text-left text-sm tracking-widest text-[#4E4E4E]">
                {data.noBank}
            </p>

            {/* BUTTON COPY */}
            <button
                onClick={handleCopy}
                className="mt-2 text-xs flex gap-1 items-center mx-auto px-3 py-1.5 rounded-xs bg-[#8598aa] text-white"
            >
                <CopyIcon className="size-4" />
                {copied ? 'Berhasil disalin' : 'Salin Rekening'}
            </button>
        </motion.div>
    )
}
