'use client'
import { Switch } from "./custom-switch";
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

export function NavbarDemo() {
    const [theme, setTheme] = useLocalStorage('theme', 'light')
    const [enabled, setEnabled] = useState(false)

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
        <div className="bg-white shadow dark:shadow-purple-400 dark:bg-gray-700 absolute">
            <div className="container flex items-center justify-center p-4 pt-6 mx-auto text-neutral-700 capitalize dark:text-neutral-400">
                <a href="#" className="text-neutral-700 dark:text-neutral-400 border-b-2 border-purple-500 mx-1.5 sm:mx-6">home 🏡</a>
                <Switch checked={enabled} setChecked={handleThemeChange} />
            </div>
        </div>
    );
}
