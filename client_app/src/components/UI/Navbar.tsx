'use client';
import React from 'react';
import { usePathname } from 'next/navigation'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuItem, NavbarMenu, NavbarMenuToggle, Link as NextLink, Button} from "@nextui-org/react";
import {ThemeSwitcher} from './ThemeSwitcher';
export const NextNavbar = ():JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
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
          <NextLink href="/login">Login</NextLink>
        </NavbarItem>
        <NavbarItem>
          <Button as={NextLink} color="warning" href="/signup" variant="flat">
            Sign Up
          </Button>
          
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
