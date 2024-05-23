import React, { useEffect, useState } from 'react';
import Button from './Button';
import { colorTheme } from './../constants/colorTheme';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { CgMenuGridO } from 'react-icons/cg';
import { FcCloseUpMode } from 'react-icons/fc';
import { IoClose } from 'react-icons/io5';
import { BiChevronRight } from 'react-icons/bi';

const Header = () => {
	const pathname = useLocation();
	const menuOptions = [
		{
			title: 'Home',
			path: '/',
		},
		{
			title: 'About',
			path: '/about-us',
		},
		// {
		// 	title: 'Categories',
		// 	path: '/categories',
		// },
		{
			title: 'Events',
			path: '/events',
		},
		{
			title: 'Blogs',
			path: '/blogs',
		},
		{
			title: 'Volunteer',
			path: '/volunteer',
		},
		{
			title: 'Our Team', // support us page
			path: '/our-team',
		},{
			title: 'Contact Us',
			path: '/contact-us',
		},
	];


	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	return (
		<div className="relative w-full z-20">
			<div
				className={` w-full flex items-center justify-center py-4 px-4 z-20 bg-gradient-to-r from-[#fbe7d0] via-[#ffeedbf5] to-pink-200`}
			>
				<div className="max-w-7xl w-full flex  items-center justify-between">
					<div className="text-xl font-semibold tracking-wide select-none">
						<Link to={'/'}>
							<span className={`text-[${colorTheme.zinc}]`}>
								Sufal.in
								<span className={`text-[${colorTheme.green}]`}>
									
								</span>
							</span>
						</Link>
					</div>
					<div className="hidden lg:flex items-center justify-center gap-12">
						<div className="flex items-center justify-center gap-6">
							{menuOptions.map((option) => (
								<Link
									to={option.path}
									key={option.path}
								>
									<span
										className={`text-base font-semibold ${
											option.path === pathname.pathname
												? `text-[#0a7558] underline underline-offset-8 font-bold`
												: `text-[${colorTheme.lightZinc}]`
										}`}
									>
										{option.title}
									</span>
								</Link>
							))}
						</div>
						<Button
							message="Sign Up"
							className="px-6 py-1.5 rounded-2xl bg-[#24856b] "
							href={'/auth'}
						/>
					</div>

					<div className="flex	 lg:hidden items-center justify-center gap-12">
						<span onClick={handleMenu}>
							<CgMenuGridO size={32} />
						</span>
					</div>
				</div>
			</div>
			{isMenuOpen && (
				<div className="absolute inset-x-0 md:w-1/2 md:left-1/2 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
					<div className="divide-y-2 divide-gray-50 rounded-lg bg-gradient-to-r from-[#fbe7d0] via-[#ffeedbf5] to-pink-200 backdrop-blur-xl shadow-lg ring-1 ring-black ring-opacity-5">
						<div className="px-5 pb-6 pt-5">
							<div className="flex items-center justify-between">
								<div className="inline-flex items-center space-x-2">
									<span>
										<FcCloseUpMode size={32} />
									</span>
									<Link to={'/'}>
										<span
											className={`font-semibold text-[${colorTheme.zinc}]`}
										>
											Sufal : {" "}
											<span
												className={`font-semibold text-[${colorTheme.green}]`}
											>
												Pregnancy Support
											</span>
										</span>
									</Link>
								</div>
								<div className="-mr-2">
									<button
										type="button"
										onClick={handleMenu}
										className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-[#0a75585d] hover:rounded-xl hover:text-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a7558] "
									>
										<span className="sr-only">
											Close menu
										</span>
										<IoClose size={28} />
									</button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-4">
									{menuOptions.map((option) => (
										<Link
											to={option.path}
											key={option.path}
											className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold  ${
												option.path ===
												pathname.pathname
													? `text-[#0a7558] underline underline-offset-8 font-bold`
													: `text-[${colorTheme.lightZinc}]`
											}`}
										>
											<span className="ml-3 text-base font-medium text-gray-900">
												{option.title}
											</span>
											
										</Link>
									))}
								</nav>
							</div>
							<div className="mt-3 space-y-2">
								<div className="space-y-1 w-full">
									<Link to={'/auth?mode=signup'}>
										<button
											type="button"
											className="w-full rounded-md border border-[#0a7558] px-3 py-[0.5rem] text-sm font-semibold text-[#0a7558] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a7558]"
										>
											Sign Up
										</button>
									</Link>
								</div>
								<div className="space-y-1 w-full">
									<Link to={'/auth?mode=login'}>
										<button
											type="button"
											className="w-full rounded-md bg-[#0a7558] px-3 py-[0.5rem] text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a7558]"
										>
											Log In
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
