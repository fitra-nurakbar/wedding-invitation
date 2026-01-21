'use client'

import { CopyIcon, GiftIcon, HomeIcon } from '@/utils/Icons'
import { bankAccount } from '@/utils/bankAccount'
import { AnimatePresence, easeOut, motion } from 'framer-motion'
import { useState } from 'react'
import Divider from '../Divider'
import FadeUp from '../animations/FadeUp'
import GiftCard from './GiftCard'

const address = "(Jefri Abdullah Iswandi) JL.Pasir Impun Komplek Taman Melati Blok C2 No.13 KAB. BANDUNG, CIMEUNYAN, JAWA BARAT, ID. 40195"

const giftContainer = {
    hidden: {
        opacity: 0,
        height: 0,
    },
    show: {
        opacity: 1,
        height: 'auto',
        transition: {
            duration: 0.6,
            ease: easeOut,
            staggerChildren: 0.15, // penting: efek elementor
        },
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.4 },
    },
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


export default function Gift() {
    const [open, setOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(address)
            setCopied(true)

            setTimeout(() => {
                setCopied(false)
            }, 2000)
        } catch (err) {
            alert('Gagal menyalin alamat')
        }
    }

    return (
        <section className="bg-gray-100 p-5 text-center  text-[#595959] flex flex-col gap-4">
            <FadeUp requireMusic>
                <h3 className="text-[27px] font-ivy-mode">Wedding Gift</h3>
            </FadeUp>

            <FadeUp requireMusic>
                <p className="text-xs tracking-widest">
                    Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
                    Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado melalui:
                </p>
            </FadeUp>


            <FadeUp requireMusic>
                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            variants={giftContainer}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="overflow-hidden px-2.5"
                        >
                            <Divider />
                            <div className="py-5 px-2.5 flex flex-col gap-8">

                                {/* PAPER / CARD */}
                                {bankAccount.map((data, index) => (
                                    <GiftCard key={index} data={data} />
                                ))}

                                <motion.div
                                    variants={zoomInItem}
                                    className=" bg-white rounded-xs p-4 border border-[#E5E5E5] flex flex-col gap-4 shadow-sm"
                                >
                                    <HomeIcon className="size-8 text-[#312C68] mx-auto" />

                                    <p className="text-xs font-medium">{address}</p>

                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        className="text-xs flex gap-1 items-center mx-auto px-3 py-1.5 rounded-xs bg-[#8598aa] text-white"
                                        onClick={handleCopy}
                                    >
                                        {copied ? (
                                            <span>Berhasil disalin</span>
                                        ) : (
                                            <>
                                                <CopyIcon className="size-4" />
                                                <span>Salin Alamat</span>
                                            </>
                                        )}
                                    </motion.button>
                                </motion.div>
                            </div>
                            <Divider />
                        </motion.div>
                    )}
                </AnimatePresence>
            </FadeUp>


            {/* Toggle Button */}
            <FadeUp requireMusic>
                <motion.button
                    whileTap={{ scale: 0.92 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    onClick={() => setOpen(prev => !prev)}
                    className="bg-[#B18C46] text-white font-semibold flex items-center gap-2 py-2.5 px-5 text-[13px] mx-auto rounded-xs"
                >
                    <GiftIcon className="size-4" />
                    {open ? 'Tutup Hadiah' : 'Kirim Hadiah'}
                </motion.button>
            </FadeUp>
        </section>
    )
}


