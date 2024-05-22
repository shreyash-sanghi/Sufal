import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Button from '../components/Button';
import ContactUsCard from '../components/ContactUsCard';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoCall, IoMail } from 'react-icons/io5';

const ContactUs = () => {
	return (
		<div
			id="contact-us"
			className="w-full h-full flex flex-col items-center justify-center transition-all selection:bg-[#0a755862]   py-8"
		>
			<div className="max-w-7xl w-full h-full grid grid-cols-1  lg:grid-cols-2">
				<div className="mx-auto  px-3 md:px-0">
					<div className="w-full  py-12 md:py-24">
						<div className="items-center justify-items-center gap-x-4 gap-y-10 ">
							<div className="flex items-center justify-center">
								<div className="px-2">
									<p className="text-4xl sm:text-5xl  font-bold text-[#16191E] md:text-4xl">
										Get in touch
									</p>
									<p className="mt-4 text-lg text-[#16191E] leading-tight">
										Our friendly team would love to hear
										from you.
									</p>
									<form
										action=""
										className="mt-8 space-y-6"
									>
										<div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
											<div className="grid w-full  items-center gap-1.5">
												<label
													className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
													htmlFor="first_name"
												>
													First Name
												</label>
												<input
													className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
													type="text"
													id="first_name"
													placeholder="First Name"
												/>
											</div>
											<div className="grid w-full  items-center gap-1.5">
												<label
													className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
													htmlFor="last_name"
												>
													Last Name
												</label>
												<input
													className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
													type="text"
													id="last_name"
													placeholder="Last Name"
												/>
											</div>
										</div>
										<div className="grid w-full  items-center gap-1.5">
											<label
												className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												htmlFor="email"
											>
												Email
											</label>
											<input
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
												type="text"
												id="email"
												placeholder="Email"
											/>
										</div>
										<div className="grid w-full  items-center gap-1.5">
											<label
												className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												htmlFor="phone_number"
											>
												Phone number
											</label>
											<input
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
												type="tel"
												id="phone_number"
												placeholder="Phone number"
											/>
										</div>
										<div className="grid w-full  items-center gap-1.5">
											<label
												className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												htmlFor="message"
											>
												Message
											</label>
											<textarea
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
												id="message"
												placeholder="Leave us a message"
												rows={8}
												cols={8}
											/>
										</div>

										<div className="w-full flex items-center justify-start gap-1.5">
											<input
												id="link-checkbox"
												type="checkbox"
												value=""
												class="w-4 h-4 text-[#0a7558] focus:ring-[#0a7558] mr-2 bg-gray-100 border-gray-300 rounded   "
											/>
											<label
												for="link-checkbox"
												class="text-sm font-medium text-[#14191E] dark:text-[#16191E]"
											>
												You agree to our friendly{' '}
												<span class="text-[#0a7558] dark:text-[#0a7558] hover:underline">
													privacy policy
												</span>
												.
											</label>
										</div>

										<Button
											message={'Send Message'}
											className="px-3 md:px-6 py-2.5 rounded-md bg-[#0a7558] "
											text={true}
											containerWidth={true}
										/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden lg:flex h-full w-full p-2 mx-auto">
					<img
						className="mx-auto h-full w-full rounded-md object-cover"
						src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						height={500}
						draggable="false"
						loading="lazy"
					/>
				</div>
			</div>
			<div className="max-w-7xl mx-auto w-full h-fit flex flex-col items-center justify-center px-3 md:px-4 py-20">
				<div className="mx-auto w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   items-center justify-center  gap-14">
					<ContactUsCard
						title={'Address'}
						description={['Mumbai']}
						icon={
							<HiOutlineLocationMarker
								size={44}
								color="#0a7558"
							/>
						}
						href={'https://dribbble.com/shots/19374301-Contact-Us'}
					/>
					<ContactUsCard
						title={'Contact'}
						description={['+91 9876543210', '+91 9876543210']}
						icon={
							<IoCall
								size={44}
								color="#0a7558"
							/>
						}
					/>
					<ContactUsCard
						title={'Email'}
						description={['random@email.com', 'unknown@email.com']}
						icon={
							<IoMail
								size={44}
								color="#0a7558"
							/>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
