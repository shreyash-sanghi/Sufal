import { Star } from 'lucide-react';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { IoShareOutline } from 'react-icons/io5';

const SupportUs = () => {
	return (
		<div className="w-full min-h-screen bg-[#fefaf6] px-3 sm:px-5 flex flex-col items-center justify-center selection:bg-[#0a755862]">
			<div className="max-w-4xl w-full mx-auto  pt-10 flex flex-col items-center justify-center">
				<div className="w-full flex flex-col items-center justify-center">
					<h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 sm:text-center">
						Using Social Networking to Combat Disease
					</h1>
					<p className="text-lg md:text-xl sm:text-center text-gray-600">
						If the world can collaborate to develop a vaccine in
						record time, we can leverage the power of social
						networks to eradicate diseases altogether.
					</p>
				</div>
				<div className="w-full mt-10 md:w-[70%]">
					<div className="w-full flex flex-col md:flex-row items-center justify-center gap-5">
						<div class="relative w-full flex items-center rounded-lg shadow-sm">
							<input
								type="text"
								id="hs-leading-button-add-on-with-icon-and-button"
								name="hs-leading-button-add-on-with-icon-and-button"
								class="py-3 px-4 pe-11 block w-full bg-[#f3f4f6] border border-zinc-300 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-[#1f6351] focus:ring-[#1f6351] disabled:opacity-50 outline-none disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
								placeholder="Enter your email"
							/>
							<button
								type="button"
								class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-r-md border border-transparent bg-[#0a7558] hover:bg-[#1f6351] text-white  disabled:opacity-50 disabled:pointer-events-none outline-none"
							>
								Donate
							</button>
							<div class="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4"></div>
						</div>

						<button
							type="button"
							class="py-3 px-4 inline-flex min-w-fit flex-wrap justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-[#0a7558] hover:bg-[#1f6351] text-white  disabled:opacity-50 disabled:pointer-events-none outline-none"
						>
							Invite Friends <IoShareOutline />
						</button>
					</div>
					{/* </form> */}
					<p className="mt-4 sm:text-center  text-sm text-gray-600">
						By signing up, you agree to our terms of service and
						privacy policy.
					</p>
				</div>
			</div>
		</div>
	);
};

export default SupportUs;
