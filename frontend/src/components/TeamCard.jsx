import React from 'react';
import { Link } from 'react-router-dom';

const TeamCard = ({
	teamMemberName,
	profession,
	profileImage,
	socialLinks,
}) => {
	return (
		<div className="w-full  rounded-2xl   border border-[#16191e29] flex flex-col items-center justify-center shadow-md select-none">
			<div className="w-full h-auto flex items-center justify-center mt-4">
				<img
					src={profileImage}
					alt={teamMemberName}
					className="w-32 h-32 rounded-full object-cover"
					draggable="false"
				/>
			</div>
			<div className="px-4 py-3 w-full flex flex-col items-center justify-center text-center space-y-1.5">
				<h1 className="text-xl font-semibold">{teamMemberName}</h1>
				<h6 className="font-medium text-[#6d6d6d]">{profession}</h6>
				<div className="flex flex-wrap justify-center">
					<div className="w-fit p-2 flex gap-3">
						{socialLinks?.map((link) => (
							<Link
								to={link.href}
								key={link.name}
								className="rounded-full bg-[#d0d0d0] p-2 hover:bg-[#c0c0c0]"
							>
								{link.icon}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;
