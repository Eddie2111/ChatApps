// app/components/ThemeSwitcher.tsx
'use client';
import dynamic from 'next/dynamic';
import {useTheme} from 'next-themes';

const Button = dynamic(() => import('@nextui-org/react').then((mod) => mod.Button), { ssr: false });
const FiMoon = dynamic(() => import('react-icons/fi').then((mod) => mod.FiMoon), { ssr: false });
const LuSunMoon = dynamic(() => import('react-icons/lu').then((mod) => mod.LuSunMoon), { ssr: false });

/**
 * ThemeSwitcher component
 * @return {JSX.Element}
 */
export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  return (
    <>
      { theme === 'dark' ? (
        <Button color="primary" variant="flat" className="mt-[4px] w-2 mx-2" onClick={() => setTheme('light')}> <LuSunMoon/> </Button>
      ) : (
        <Button color="primary" variant="flat" className="mt-[4px] w-2 mx-2" onClick={() => setTheme('dark')}> <FiMoon /> </Button>
      )}
    </>
  )
};
