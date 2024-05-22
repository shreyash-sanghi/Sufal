import React from 'react';
import Button from '../components/Button';
import TeamCard from '../components/TeamCard';
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const AboutUs = () => {
	return (
		<div className="w-full h-full flex flex-col items-center justify-center transition-all selection:bg-[#0a755862] py-5 space-y-8	">
			<div className="max-w-7xl w-full h-full grid grid-cols-1  lg:grid-cols-2">
				<div className="px-1 md:px-4">
					<div className="py-6 md:py-24">
						<div className="items-center justify-items-center gap-x-4 gap-y-5 ">
							<div className="flex items-center justify-center">
								<div className="px-2 space-y-4">
									<p className="text-xl  -mb-2 text-[#16191E] md:text-4xl">
										About Us
									</p>
									<p className="mt-1 text-4xl lg:text-5xl font-bold text-[#6b6b6b] ">
										Helping businesses succeed through the
										power of video.
									</p>
									<p className="mt-4 text-base font-medium text-[#868686] leading-normal lg:leading-loose py-1  md:py-0">
										Helping businesses succeed through the
										power of video and content marketing
										that sets us apart from the competition
										and helps us stay ahead of the curve and
										achieve our goals for the future were we
										are here today to help you achieve your
										goals.
									</p>
									<div className="w-full flex items-start justify-start py-1 md:py-0">
										<Button
											message="Sign Up"
											href={'/auth?mode=signup'}
											className="px-8 sm:px-12 py-4  text-base rounded-md bg-[#0a7558] hover:bg-[#2d6254] outline-none"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex h-full w-full p-3 mx-auto">
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
			<div className="max-w-7xl w-full h-full grid grid-cols-1  lg:grid-cols-2">
				<div className="flex h-full w-full p-3 mx-auto">
					<img
						className="mx-auto h-full w-full rounded-md object-cover"
						src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						height={500}
						draggable="false"
						loading="lazy"
					/>
				</div>
				<div className="px-1 md:px-4">
					<div className="py-6 md:py-24">
						<div className="items-center justify-items-center gap-x-4 gap-y-5 ">
							<div className="flex items-center justify-center">
								<div className="px-2 space-y-4">
									<p className="text-xl  -mb-2 text-[#16191E] md:text-4xl">
										Our Mission
									</p>
									<p className="mt-1 text-4xl lg:text-5xl font-bold text-[#6b6b6b] ">
										Helping businesses succeed through the
										power of video.
									</p>
									<p className="mt-4 text-base font-medium text-[#868686] leading-normal lg:leading-loose py-1  md:py-0">
										Helping businesses succeed through the
										power of video and content marketing
										that sets us apart from the competition
										and helps us stay ahead of the curve and
										achieve our goals for the future were we
										are here today to help you achieve your
										goals.
									</p>
									<div className="w-full flex items-start justify-start py-1 md:py-0">
										<Button
											message="Mission"
											href={'/auth?mode=signup'}
											className="px-8 sm:px-12 py-4  text-base rounded-md bg-[#0a7558] hover:bg-[#2d6254] outline-none"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-7xl w-full h-full grid grid-cols-1  lg:grid-cols-2">
				<div className="px-1 md:px-4">
					<div className="py-6 md:py-24">
						<div className="items-center justify-items-center gap-x-4 gap-y-5 ">
							<div className="flex items-center justify-center">
								<div className="px-2 space-y-4">
									<p className="text-xl  -mb-2 text-[#16191E] md:text-4xl">
										Our Vision
									</p>
									<p className="mt-1 text-4xl lg:text-5xl font-bold text-[#6b6b6b] ">
										Helping businesses succeed through the
										power of video.
									</p>
									<p className="mt-4 text-base font-medium text-[#868686] leading-normal lg:leading-loose py-1  md:py-0">
										Helping businesses succeed through the
										power of video and content marketing
										that sets us apart from the competition
										and helps us stay ahead of the curve and
										achieve our goals for the future were we
										are here today to help you achieve your
										goals.
									</p>
									<div className="w-full flex items-start justify-start py-1 md:py-0">
										<Button
											message="Vision"
											href={'/auth?mode=signup'}
											className="px-8 sm:px-12 py-4  text-base rounded-md bg-[#0a7558] hover:bg-[#2d6254] outline-none"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex h-full w-full p-3 mx-auto">
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
		</div>
	);
};

export default AboutUs;
