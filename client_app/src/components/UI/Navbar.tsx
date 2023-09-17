'use client';
import React from 'react';
import { usePathname } from 'next/navigation'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuItem, NavbarMenu, NavbarMenuToggle, Link as NextLink, Button} from "@nextui-org/react";
import {ThemeSwitcher} from './ThemeSwitcher';
import {useAuth} from '@/context/TestContext'
export const NextNavbar = ():JSX.Element => {
  const {getUser} = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [user, setUser] = React.useState({});
  const pathname = usePathname();
  React.useEffect(()=>{
    const response = async()=>{
        setUser({
          name: localStorage.getItem('name'),
          email: localStorage.getItem('email'),
          id: localStorage.getItem('id'),
          image: localStorage.getItem('image'),
        })
    }
    response();
  },[getUser])
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
                             
          <p className="font-bold text-inherit">ERiS</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
                            
          <p className="font-bold text-inherit">ERiS</p>
        </NavbarBrand>
        <NavbarItem>
          <NextLink color={pathname === ' ' ? 'forground' : 'active'} href="/">
            Home
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="/chat" color={pathname === '/chat' ? 'forground' : 'active'}>
            Chat
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink color={pathname === '/settings' ? 'forground' : 'active'} href="/settings">
            Settings
          </NextLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {
            user?.name ? <NextLink href="/logout">Logout</NextLink> : <NextLink href="/login">Login</NextLink>
          }
        </NavbarItem>
        <NavbarItem>

          {
            user?.id ? <NextLink href="/profile">Profile</NextLink> : <NextLink href="/signup">Sign up</NextLink>
          }
          
            <ThemeSwitcher/>
          
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextLink
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
