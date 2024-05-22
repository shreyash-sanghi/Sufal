import React from 'react';
import { twMerge } from 'tailwind-merge';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Button = ({
	message,
	className,
	px,
	icon,
	bg,
	border,
	text,
	href,
	containerWidth,
}) => {
	const classes = twMerge(
		'flex items-center justify-center gap-2	 text-[#fbfcfc] text-center font-semibold py-1.5	',
		className
	);

	const backgroundColor = 'bg-[#0a7558] hover:bg-[#1f6351] text-zinc-50';
	const allowBorder =
		'border-[#0a7558] border text-[#0a7558] flex items-center justify-center gap-2 border border-[#0a7558] text-[#0a7558] text-center font-semibold px-3 sm:px-6 py-3 rounded-xl';
	const onlyText =
		'w-fit    items-center justify-center text-[#0a7558] hover:border-[#0a7558] ';

	const borderTrue =
		'flex items-center justify-center gap-2 border border-[#0a7558] text-[#0a7558] text-center font-semibold px-3 sm:px-6 py-3 rounded-xl';

	return (
		<div
			className={`${
				containerWidth ? 'w-full' : 'w-fit'
			} flex items-center justify-center `}
		>
			<Link
				to={href}
				className={`${
					containerWidth ? 'w-full flex-row' : 'w-fit flex-row'
				}`}
			>
				<button
					className={`${containerWidth ? 'w-full' : 'w-fit'}  ${
						bg && backgroundColor
					} ${border && allowBorder} ${
						containerWidth && border && borderTrue
					} ${text && onlyText} ${classes} flex-wrap flex-row`}
				>
					{message}
					<span>{icon}</span>
				</button>
			</Link>
		</div>
	);
};

export default Button;
