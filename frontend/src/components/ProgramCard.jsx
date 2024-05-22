import { FiArrowUpRight } from 'react-icons/fi';
import Button from './Button';
import { Link } from 'react-router-dom';

const Card = ({ title, description, icon, color, href }) => {
	return (
		<div className="flex flex-col items-center justify-center space-y-4 px-6 py-4  rounded-2xl cursor-pointer hover:shadow-xl  transition-shadow duration-200 ">
			<div
				className="w-fit flex items-center justify-center rounded-full p-4"
				style={{ backgroundColor: color }}
			>
				<span>{icon}</span>
			</div>
			<div className="text-3xl font-bold text-center">{title}</div>
			<div className="text-base font-medium text-center text-[#868686] w-full md:w-[60%] selection:text-[#16191E]">
				{description}
			</div>
			<Link
				to={href}
				className="w-full flex justify-center"
			>
				<Button
					message="Read More"
					icon={<FiArrowUpRight />}
					className="px-6 py-3 rounded-xl text-[#0a7558] "
					text={true}
					href={href}
				/>
			</Link>
		</div>
	);
};

export default Card;
