import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="min-h-64 flex text-xs text-white text-center pt-5 justify-center">
            <Link href={"https://instagram.com/fit.tra_"} target='_blank'>
                <p>© 2026 Made with Love by</p>
                <p>Fitra Nurakbar</p>
            </Link>
        </footer>
    )
}
