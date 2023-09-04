import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import {AcmeLogo} from './AcmeLogo.jsx';
import {motion} from 'framer-motion';
import {useAuth} from '../../context/AuthContext';

 /**
  * @name AppBar
  * @description The AppBar component is a navigation header that can be used for branding a screen title, or to display a title for a list of contents. It can be used to navigate between screens of major and equal importance.
  * @return {jsx}
  */
export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user,logout } = useAuth();
  console.log(user)
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
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/chat" aria-current="page">
              Chat
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/profile" color="foreground" aria-current="page">
              Profile
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/settings">
              Settings
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          { user ? (
            <Button
              auto
              size="small"
              color="error"
              onClick={() => {
                localStorage.removeItem('token');
                logout();
                
              }}
            >
              Log Out
            </Button>
          ) : (
            <>
            <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="warning" href="/signup" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
          </>
          )}
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </motion.div>
  );
}
