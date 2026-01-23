import { LogoIcon } from '@/utils/Icons'
import Image from 'next/image'
import Link from 'next/link'

// const LogoIcon = "/images/HFI.svg"

export default function Footer() {
    return (
        <footer className="bg-background min-h-64 mb-0 text-xs text-white flex flex-col gap-2 text-center items-center justify-center">
            <LogoIcon className='size-15' />
            <Link href={"https://instagram.com/fit.tra_"} target='_blank'>
            <p>© 2026 Build with</p>
            <p>@fit.tra_</p>
        </Link>
        </footer >
    )
}
