'use client';
import axios from 'axios';
import React from 'react';
// import dynamic from 'next/dynamic';
import Session from '@/app/session/api';
import {useRouter, usePathname} from 'next/navigation';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuItem,
	NavbarMenu,
	NavbarMenuToggle,
	Link as NextLink,
} from '@nextui-org/react';
// const Navbar = dynamic(() => import('@nextui-org/react').then((mod) => mod.Navbar) /**as any*/, {ssr: false});
// const NavbarBrand = dynamic(() => import('@nextui-org/react').then((mod) => mod.NavbarBrand) /**as any*/, {ssr: false});
// const NavbarContent = dynamic(() => import('@nextui-org/react').then((mod) => mod.NavbarContent) /**as any*/, {ssr: false});
// const NavbarItem = dynamic(() => import('@nextui-org/react').then((mod) => mod.NavbarItem) /**as any*/, {ssr: false});
// const NavbarMenuItem = dynamic(() => import('@nextui-org/react').then((mod) => mod.NavbarMenuItem) /**as any*/, {ssr: false});
// const NavbarMenu = dynamic(() => import('@nextui-org/react').then((mod) => mod.NavbarMenu) /**as any*/, {ssr: false});
// const NavbarMenuToggle = dynamic(() => import('@nextui-org/react').then((mod) => mod.NavbarMenuToggle) /**as any*/, {ssr: false});
// const NextLink = dynamic(() => import('@nextui-org/react').then((mod) => mod.Link) /**as any*/, {ssr: false});
import {ThemeSwitcher} from './ThemeSwitcher';
//import {useAuth} from '@/context/TestContext';
import {UserButton} from '@clerk/nextjs';
export const runtimeConfig = 'edge';

export const NextNavbar = (): JSX.Element => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const router = useRouter();
	// const {getUser} = useAuth();
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [user, setUser] = React.useState({});
	const [id, setID] = React.useState<string>('');
	const pathname = usePathname();
	React.useEffect(() => {
		async function GetUserData(): void {
			try {
				const response = await axios.post('http://localhost:3100/authcheck', {id: id}, {withCredentials: true});
				setUser(response.data);
			} catch (err) {
				console.log('auth error, no token perhaps?');
			}
		}
		async function SessionHandle(): string {
			const response = await Session();
			setID(response.id);
			return response;
		}
		SessionHandle();
		GetUserData();
	}, [id]);
	const menuItems = ['Profile', 'Home', 'Activity', 'My Settings', 'Help & Feedback', 'Log Out'];
	async function handleLogout(): Promise<void> {
		const response = await axios.get('http://localhost:3100/signout', {withCredentials: true});
		//console.log(response.data);
		localStorage.removeItem('name');
		localStorage.removeItem('email');
		localStorage.removeItem('id');
		localStorage.removeItem('image');
		router.push('/');
	}

	return (
		<Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent className='sm:hidden' justify='start'>
				<NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
			</NavbarContent>

			<NavbarContent className='sm:hidden pr-3' justify='center'>
				<NavbarBrand>
					<p className='font-bold text-inherit'>ERiS</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				<NavbarBrand>
					<p className='font-bold text-inherit'>ERiS</p>
				</NavbarBrand>
				<NavbarItem>
					<NextLink color={pathname === ' ' ? 'forground' : 'active'} href='/'>
            Home
					</NextLink>
				</NavbarItem>
				<NavbarItem>
					<NextLink href='/chat' color={pathname === '/chat' ? 'forground' : 'active'}>
            Chat
					</NextLink>
				</NavbarItem>
				<NavbarItem>
					<NextLink color={pathname === '/settings' ? 'forground' : 'active'} href='/settings'>
            Settings
					</NextLink>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify='end'>
				<NavbarItem className='hidden lg:flex'>
					{user?.name ? <NextLink onClick={handleLogout}>Logout</NextLink> : <NextLink href='/login'>Login</NextLink>}
				</NavbarItem>
				<NavbarItem>
					{user?.id ? <NextLink href={'/profile?id='+id}>Profile</NextLink> : <NextLink href='/signup'>Sign up</NextLink>}
				</NavbarItem>
				<NavbarItem>
					<div className='flex flex-row'>
						<ThemeSwitcher />
						<UserButton />
					</div>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<NextLink
							className='w-full'
							color={index === 2 ? 'warning' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
							href='#'
							size='lg'
						>
							{item}
						</NextLink>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};
