'use client'
import { Switch } from "./custom-switch";
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { usePathname } from 'next/navigation'
import { twMerge } from "tailwind-merge";

export function NavbarDemo() {
    const [theme, setTheme] = useLocalStorage('theme', 'light')
    const [enabled, setEnabled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        document.body.classList.remove('light', 'dark')
        document.body.classList.add(theme)
        setEnabled(theme == 'light')
    }, [theme])

    const handleThemeChange = (enabled: boolean) => {
        setTheme(enabled ? 'light' : 'dark')
        setEnabled(enabled)
    }

    return (
        <div className="bg-white shadow dark:shadow-purple-400 dark:bg-gray-700 absolute z-20">
            <div className="container flex items-center justify-center p-4 pt-6 mx-auto text-neutral-700 capitalize dark:text-neutral-400">
                <a href="/" style={{textUnderlineOffset: 5}} className={twMerge(
                    "text-neutral-700 dark:text-neutral-400 border-purple-500 mx-1.5 sm:mx-6 decoration-purple-500 decoration-2",
                    pathname === '/' ? ' border-b-2 ' : 'hover:underline'
                    )
                }>Home 🏡</a>
                <a href="/lego" style={{textUnderlineOffset: 5}} className={twMerge(
                    "text-neutral-700 dark:text-neutral-400 border-purple-500 mx-1.5 sm:mx-6 decoration-purple-500 decoration-2",
                    pathname === '/lego' ? ' border-b-2 ' : 'hover:underline'
                    )
                }>Lego 🧱</a>
                <a href="/gaming" style={{textUnderlineOffset: 5}} className={twMerge(
                    "text-neutral-700 dark:text-neutral-400 border-purple-500 mx-1.5 sm:mx-6 decoration-purple-500 decoration-2",
                    pathname === '/gaming' ? ' border-b-2 ' : 'hover:underline'
                    )
                }>Gaming 🎮</a>
                <Switch checked={enabled} setChecked={handleThemeChange} />
            </div>
        </div>
    );
}
