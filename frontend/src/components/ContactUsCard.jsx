import React from 'react';
import Button from './Button';
import { FiArrowRight } from 'react-icons/fi';

const ContactUsCard = ({ title, description, icon, href }) => {
	return (
		<div className="relative w-full h-fit rounded-md flex-1 py-3 border border-[#16191e16] bg-[#fbfcfc] shadow-xl selection:bg-[#0a755862] selection:text-[#16191E] transition-all">
			<div className="w-full flex items-center justify-center">
				<span className="absolute  flex items-center justify-center p-3 bg-[#fbfcfc]  rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
					{icon}
				</span>
			</div>
			<div className="w-full flex items-center justify-center px-6 py-1  pt-10">
				<span className="text-lg font-semibold">{title}</span>
			</div>
			<div className="w-full flex items-center justify-center px-6 py-1">
				<span className="flex flex-col gap-y-1">
					{description?.map((item) => (
						<span className="text-base font-medium text-[#868686] selection:text-[#16191E]">
							{item}
						</span>
					))}
				</span>
			</div>
			{href && (
				<div className="w-full flex items-center justify-center px-6 py-2">
					<Button
						message="Address"
						icon={
							<FiArrowRight
								size={20}
								color="#0a7558"
							/>
						}
						className="px-6 py-2 rounded-lg text-[#0a7558]"
						href={href}
					/>
				</div>
			)}
		</div>
	);
};

export default ContactUsCard;
