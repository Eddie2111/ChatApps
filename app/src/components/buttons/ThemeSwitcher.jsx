// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {MdOutlineDarkMode} from "react-icons/md";
import {MdLightMode} from "react-icons/md";
import {Button} from "@nextui-org/react";
export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <Button
        aria-label="Toggle Dark Mode"
        type="button"
        className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
        {theme === 'dark' ? (
            <MdOutlineDarkMode size={24} />
        ) : (
            <MdLightMode size={24} />
        )}
    </Button>
  )
};