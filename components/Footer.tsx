import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-background min-h-64 mb-0 flex text-xs text-white text-center pt-5 items-center justify-center">
            <Link href={"https://instagram.com/fit.tra_"} target='_blank'>
                <p>© 2026 Made with Love by</p>
                <p>Fitra Nurakbar</p>
            </Link>
        </footer>
    )
}
