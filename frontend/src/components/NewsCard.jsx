import { FiArrowUpRight } from 'react-icons/fi';
import Button from './Button';

const NewsCard = ({ img, date, title, description, href }) => {
	return (
		<div className="w-full rounded-md flex flex-col justify-between">
			<img
				src={img}
				alt={title}
				className="h-[200px] mx-auto  w-full rounded-lg object-cover"
			/>
			<div className="w-full flex flex-col justify-between">
				<div>
					<span className="my-3 mr-2 inline-block rounded-full bg-[#d0d0d0] px-3 py-1 text-sm font-semibold text-[#4a4a4a] selection:text-[#16191E]">
						{date}
					</span>
				</div>
				<span className="inline-flex items-center text-xl font-semibold">
					{title}
				</span>
				<p className="w-full mt-3 text-sm text-[#868686] selection:text-[#16191E]">
					{description}
				</p>

				<Button
					message="Read More"
					icon={<FiArrowUpRight />}
					className="px-3 py-4 rounded-xl text-[#0a7558] "
					text={true}
					href={href}
				/>
			</div>
		</div>
	);
};

export default NewsCard;
