import React, { useState } from 'react';
import Button from './Button';
import { CiCalendarDate, CiLocationOn } from 'react-icons/ci';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { TbMoneybag } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { getFormattedDate } from '../lib/getDate';
import { BsStars } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import { MdMoreTime } from "react-icons/md";


const EventCard = ({
	eventTitle,
	eventDescription,
	eventImg,
	eventDate,
	eventTags,
	eventLocation,
	eventLink,
	eventTime,
	eventPrice,
	eventDuration,
	eventOrganizer,
	eventPurchaseLink,
	Duration,
	totalLiveParticipants,
	isLiked,
	registrationAndrsvp
}) => {
	const dateTag = getFormattedDate(eventDate);
	const [isLikedState, setIsLikedState] = useState(isLiked);

	const handleLike = () => {
		setIsLikedState(!isLikedState);
	};

	return (
		<div className="w-full rounded-md flex-1 border border-[#16191e30]   bg-[#fbfcfc] shadow-md selection:bg-[#0a755862] selection:text-[#16191E] transition-all">
			<div className="relative w-full flex items-center justify-center p-3">
				<div className="w-fit h-fit p-4  absolute top-2 left-1 flex flex-col -space-y-1 text-[#fbfcfc]">
					<span className="bg-[#fbfcfc] text-[#16191E] px-2 text-2xl font-bold rounded-t-md">
						{dateTag.day}
					</span>
					<span className="bg-[#fbfcfc] px-2 text-base text-[#0a7558] font-semibold rounded-b-md">
						{dateTag.month}
					</span>
				</div>
				<div
					className="w-fit h-fit p-4  absolute top-2 right-1 flex flex-col -space-y-1 text-[#fbfcfc]"
					onClick={handleLike}
				>
					<span className="bg-[#fbfcfc] rounded-full p-1.5 flex items-center justify-center text-2xl font-bold cursor-pointer transition-colors">
						{isLikedState ? (
							<RiHeartFill
								size={20}
								color="#dc2727"
							/>
						) : (
							<RiHeartLine
								size={20}
								color="#16191E"
							/>
						)}
					</span>
				</div>
				<div
					className="w-fit h-fit p-4  absolute bottom-2 left-1 flex flex-col -space-y-1 text-[#fbfcfc]"
					onClick={handleLike}
				>
					
				</div>
				<img
					src={eventImg}
					alt={eventTitle}
					className="h-[200px] mx-auto w-full rounded-md object-cover"
					draggable="false"
				/>
			</div>
			<div className="w-full px-3 pb-3 space-y-1">
				<div className="w-full flex flex-wrap">
					{eventTags?.map((tag) => (
						<span
							className="mb-2 mr-2 inline-block rounded-[0.15rem] px-3 py-1 text-sm font-medium bg-[#0a7558b2] text-[#ebf3ee]"
							key={tag}
						>
							{tag}
						</span>
					))}
				</div>
				<span className="inline-flex items-center text-xl font-[650]">
					{eventTitle}
				</span>

				<div className="w-full flex flex-col items-center justify-center space-y-2">
					<div className="w-full flex flex-row items-center justify-between text-sm text-[#868686]">
						<span className="w-full flex flex-row items-center justify-start gap-1.5 selection:text-[#16191E]">
							<HiOutlineLocationMarker
								size={24}
								color="#16191E"
							/>
							<span className="text-[#16191E] selection:text-[#16191E] ">
								{eventLocation}
							</span>
						</span>
					</div>
					<div className="w-full flex flex-row items-center justify-between text-sm text-[#868686]">
						<span className="w-full flex flex-row items-center justify-start gap-1.5 selection:text-[#16191E]">
							<HiOutlineCalendarDays
								size={24}
								color="#16191E"
							/>
							<span className="text-[#16191E] selection:text-[#16191E] ">
								<span className="text-[#16191E] selection:text-[#16191E] ">
									{dateTag.day} {dateTag.month} :  {" "}
								</span>
								 Time : {eventTime}
							</span>
						</span>
					</div>
					<div className="w-full flex flex-row items-center justify-between text-sm text-[#868686]">
						<span className="w-full flex flex-row items-center justify-start gap-1.5 selection:text-[#16191E]">
							<MdMoreTime
								size={24}
								color="#16191E"
							/>
							<span className="text-[#16191E] selection:text-[#16191E] ">
								<span className="text-[#16191E] selection:text-[#16191E] ">
									Duration :  {" "}
								</span>
								 {Duration} Hour
							</span>
						</span>
					</div>
					<div className="w-full flex flex-row items-center justify-between text-sm text-[#868686]">
						<span className="w-full flex flex-row items-center justify-start gap-1.5 selection:text-[#16191E]">
							<TbMoneybag
								size={24}
								color="#16191E"
							/>
							<span className="text-[#16191E] selection:text-[#16191E] ">
								Entry : {' '}
								{eventPrice === 'Free'
									? 'Free'
									: `$${eventPrice}`}
							</span>
						</span>
					</div>
					<div className="w-full flex flex-row items-center justify-between text-sm text-[#868686]">
						<span className="w-full flex flex-row items-center justify-start gap-1.5 selection:text-[#16191E]">
							<BsStars
								size={24}
								color="#16191E"
							/>
							<span className="text-[#16191E] selection:text-[#16191E] ">
								By{' '}
								<span className="text-[#16191E] font-semibold">
									{eventOrganizer}
								</span>
							</span>
						</span>
					</div>
				</div>
				<div className="w-full flex items-center justify-center gap-3">
					<Link
						to={eventPurchaseLink}
						className="w-full"
					>
						<button className="w-full px-4 sm:px-5 md:px-6 py-2 mt-2 rounded-md text-white bg-[#0a7558] hover:bg-[#1f6351]">
							{registrationAndrsvp}
						</button>
					</Link>
					<Link
						to={eventLink}
						className="w-full"
					>
						<button className="w-full px-4 sm:px-5 md:px-6 py-2 mt-2 rounded-md bg-[#dbdada] hover:bg-[#acacac] text-[#16191E]">
							View Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
