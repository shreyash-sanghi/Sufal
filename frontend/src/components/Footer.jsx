import { ChevronRight } from 'lucide-react';
import React from 'react';
import { colorTheme } from '../constants/colorTheme';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
	const menuOptions = [
		{
			title: 'Home',
			path: '/',
		},
		{
			title: 'About Us',
			path: '/about-us',
		},
		{
			title: 'Categories',
			path: '/categories',
		},
		{
			title: 'Campaign',
			path: '/campaign',
		},
		{
			title: 'News',
			path: '/news',
		},
		{
			title: 'Volunteer',
			path: '/volunteer',
		},
		{
			title: 'Contact Us',
			path: '/contact-us',
		},
		{
			title: 'Support Us',
			path: '/support-us',
		},
	];

	return (
		<footer className="w-full bg-[#fefaf6] py-4 selection:bg-[#0a755862] bg-gradient-to-r from-[#fbe7d0] via-[#ffeedbf5] to-emerald-100">
			<div className="mx-auto flex flex-col md:flex-row max-w-6xl  items-start ">
				<div className="w-full px-4 md:w-1/2 lg:px-0">
					<h1 className="max-w-sm text-3xl font-bold">
						Don’t miss out on our upcoming events.
					</h1>
					<form
						action=""
						className="mt-4 inline-flex w-full items-center lg:w-3/4"
					>
						<input
							className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
							type="email"
							placeholder="Email"
						></input>
						<button
							type="button"
							className="ml-4 rounded-full bg-[#0a7558] px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#245447] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
						>
							<ChevronRight className="h-4 w-4" />
						</button>
					</form>
				</div>
				<div className="w-full mt-8 -mb-5 grid grid-cols-3  gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
					<div className="min-w-fit flex-wrap w-full p-6 md:w-1/2 lg:w-2/12">
						<div className=" h-full">
							<h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
								Company
							</h3>
							<ul>
								<li className="mb-4">
									<HashLink
										to="/#campaign"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Campaign
									</HashLink>
								</li>
								<li className="mb-4">
									<HashLink
										to="/#upcoming-events"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Upcoming Events
									</HashLink>
								</li>
								<li className="mb-4">
									<HashLink
										to="/#about-us"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										About Us
									</HashLink>
								</li>
								<li>
									<HashLink
										to="/#team"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Our Team
									</HashLink>
								</li>
							</ul>
						</div>
					</div>
					<div className=" min-w-fit flex-wrap w-full p-6 md:w-1/2 lg:w-2/12">
						<div className="h-full">
							<h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
								Support
							</h3>
							<ul>
								<li className="mb-4">
									<HashLink
										to="/#home"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Account
									</HashLink>
								</li>
								<li className="mb-4">
									<HashLink
										to="/support-us"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Support Us
									</HashLink>
								</li>
								<li className="mb-4">
									<HashLink
										to="/contact-us"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Contact Us
									</HashLink>
								</li>
								<li>
									<HashLink
										to="/contact-us"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Customer Support
									</HashLink>
								</li>
							</ul>
						</div>
					</div>
					<div className=" min-w-fit flex-wrap w-full pt-6 pl-6 pb-6 md:p-6 md:w-1/2 lg:w-3/12">
						<div className="h-full">
							<h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
								Legals
							</h3>
							<ul>
								<li className="mb-4">
									<HashLink
										to="/contact-us"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Terms &amp; Conditions
									</HashLink>
								</li>
								<li className="mb-4">
									<HashLink
										to="/contact-us"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Privacy Policy
									</HashLink>
								</li>
								<li>
									<HashLink
										to="/contact-us"
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										Licensing
									</HashLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<hr className="my-4" />
			<div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
				<div className="inline-flex items-center">
					<div className="text-xl font-semibold tracking-wide select-none">
						<HashLink to="/">
							<span className={`text-[${colorTheme.zinc}]`}>
								Sombo
								<span className={`text-[${colorTheme.green}]`}>
									Help
								</span>
							</span>
						</HashLink>
					</div>
				</div>
				<div className="mt-4 md:mt-0 selection:text-[#16191E]">
					<p className="text-sm font-medium text-gray-500">
						© 2024 SomboHelp. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
