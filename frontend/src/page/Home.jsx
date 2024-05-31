import React, { useEffect, useState } from 'react';
import { colorTheme } from '../constants/colorTheme';
import herogif from '../assets/herogif4.mp4';
import Button from '../components/Button';
import { GrUserExpert } from "react-icons/gr";
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Glimpses from '../components/Glimpses';
import {
	IoLogoInstagram,
	IoLogoLinkedin,
	IoPlayOutline,
} from 'react-icons/io5';
import { PiBowlFood, PiHandHeartFill } from 'react-icons/pi';
import { MdOutlineSupportAgent } from "react-icons/md";

import { LuHeartHandshake } from 'react-icons/lu';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { GiMedicines } from 'react-icons/gi';
import { BsFacebook, BsPeopleFill } from 'react-icons/bs';
import { FaBookOpenReader } from 'react-icons/fa6';
import PatientDonationCard from '../components/PatientDonationCard';
import Card from '../components/ProgramCard';
import NewsCard from '../components/NewsCard';
import randomDate from '../lib/getRandomDate';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../components/ui/carousel';
import TeamCard from '../components/TeamCard';
import EventCard from '../components/EventCard';
import aboutimg from '../assets/about-img2.png';
import { ImWoman } from "react-icons/im";

import Header from '../components/Header';
import axios from 'axios';

const Info = ({ title, description }) => {
	return (
		<div className="flex flex-col items-start justify-start space-y-1">
			<div className="text-4xl font-bold">{title}</div>
			<div className="text-base font-medium text-[#868686] w-full md:w-[50%] selection:text-[#16191E]">
				{description}
			</div>
		</div>
	);
};

const InfoCard = ({ title, description, icon, color }) => {
	return (
		<div className="w-full flex items-start justify-start gap-3">
			<div
				className="w-fit flex items-center justify-center rounded-full p-2"
				style={{ backgroundColor: color }}
			>
				<span>{icon}</span>
			</div>
			<div className="w-full flex flex-col items-start justify-start space-y-2">
				<div className="text-2xl font-semibold">{title}</div>
				<div className="w-full text-base font-medium text-[#868686] lg:w-[80%] selection:text-[#16191E]	">
					{description}
				</div>
			</div>
		</div>
	);
};

const Home = () => {
	const [api, setApi] = useState();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}
		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);
  //Show Event data
  const [initial, final] = useState([{
    eid: "",
    EventName: "",
    Place: "",
    Time: "",
    EDate: "",
    EventBanner: "",
    PastConform: "",
    CurrentConform: "",
    Discreption: "",
    image_key: "",
    Duration: "",
    Fee: "",
    Organization: "",
    Title: "",
  }])


  const monthToNumber = (month) => {
    const monthDict = {
      "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6,
      "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12
    };
    return monthDict[month];
  }
  const compareDates = (date1, date2) => {
    const [day1, month1, year1] = date1.split('/');
    const [day2, month2, year2] = date2.split('/');
    if (year1 !== year2) {
      if (parseInt(year1) > parseInt(year2)) {
        return true;
      }
    } else if (monthToNumber(month1) !== monthToNumber(month2)) {
      if (monthToNumber(month1) > monthToNumber(month2)) {
        return true;
      }
    } else if (parseInt(day1) !== parseInt(day2)) {
      if (parseInt(day1) > parseInt(day2)) {
        return true;
      }
    }
    return false;
  }
  const getdata = async () => {

    let todaydate = new Date();
    const months = ["January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October", "November", "December"];
    let month = months[todaydate.getMonth()];
    let curdate = todaydate.getDate();
    let curyear = todaydate.getFullYear();
    if (curdate < 10) {
      curdate = `0${curdate}`;
    }
    todaydate = `${curdate}/${month}/${curyear}`;
    try {
      const data = await axios.get("http://localhost:7000/get_current_event_data");
      const result = data.data.result;
      // console.log(result);
      result.map(async (info) => {
        console.log(info)
        let EventDate = info.EDate;
        const isDate1AfterDate = compareDates(todaydate, EventDate);
        if (isDate1AfterDate && info.PastConform == false) {
        //   await axios.post(`https://sufalbackend-shreyash-sanghis-projects.vercel.app/send_to_past_event/${info._id}`);
          await axios.post(`http://localhost:7000/send_to_past_event/${info._id}`);
          final((about) => [
            ...about, {
              eid: info._id,
              EventName: info.EventName,
              Place: info.Place,
              Time: info.Time,
              EDate: info.EDate,
              EventBanner: info.EventBanner,
              PastConform: true,
              CurrentConform: false,
              Discreption: info.Discreption,
              image_key: info.public_id,
              Duration: info.Duration,
              Fee: info.Fee,
              Organization: info.Organization,
              Title: info.Title,
            }
          ])
        } else {
          final((about) => [
            ...about, {
              eid: info._id,
              EventName: info.EventName,
              Place: info.Place,
              Time: info.Time,
              EDate: info.EDate,
              EventBanner: info.EventBanner,
              PastConform: info.PastConform,
              CurrentConform: info.CurrentConform,
              Discreption: info.Discreption,
              image_key: info.public_id,
			  Duration: info.Duration,
              Fee: info.Fee,
              Organization: info.Organization,
              Title: info.Title,
            }
          ])
        }
      })
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  //Use Effect
  useEffect(() => {
    getdata();
  }, [])

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  const verifytoken = async()=>{
   try{
	  axios.defaults.headers.common["Authorization"] = token;
	  const result = await axios.get("http://localhost:7000/user_auth");
	  navigate("/dashboard")
   }catch(error){
	  alert(error);
	  console.log(error);
   }
  }
  console.log(token);
	  useEffect(()=>{
		  if(token != null || token != undefined){
			  verifytoken();
		  }
	  },[])
	return (
	       <>
		   <Header/>
		<div className="w-full bg-[#fefaf6] ">
			<div
				id="home"
				className="max-w-7xl lg:mt-10 mx-auto px-3 py-6 flex flex-col lg:flex-row items-center justify-between"
			>
				<div className="w-full lg:w-1/2 mt-6 md:mt-0 space-y-5 flex flex-col items-center justify-start mx-auto	selection:bg-[#0a755862]">
					<div className="w-full flex flex-col items-start justify-start space-y-3">
						<span className="text-4xl md:text-5xl lg:text-6xl font-bold ">
							Embrace <br /> Motherhood <br /> Joyfully With Sufal
						</span>
						<span className="w-full md:w-[90%] lg:w-[80%] flex items-center justify-start pt-4 text-base font-semibold text-[#868686] selection:text-[#16191E]">
						Join Our Pregnancy Support Group: Share, Learn, and Nurture Your Unborn Child Together!
						</span>
					</div>
					<div className="w-full flex items-center justify-start md:space-x-4 pt-5 gap-3">
						<Button
							message="Join Now"
							className="px-3 sm:px-6 py-3 rounded-xl bg-[#0a7558]"
						/>
						<button className="flex items-center justify-center gap-2 border border-[#0a7558] text-[#0a7558] text-center font-semibold px-3 sm:px-6 py-3 rounded-xl">
							<span>
								<IoPlayOutline size={16} />
							</span>
							Watch Video
						</button>
					</div>
					<div className="w-fit sm:w-full px-2 md:px-0 flex items-start gap-x-2 md:gap-x-0 justify-start pt-5 ">
						<Info
							title={'150+'}
							description={'Incredible Volunteers'}
						/>
						<Info
							title={'120+'}
							description={'Successful Events'}
						/>
						<Info
							title={'3000+'}
							description={'Total Attendes'}
						/>
					</div>
					
				</div>
				<div className="w-full lg:w-1/2 mt-8 lg:mt-0 px-4 md:px-0 flex items-center justify-center">
					<video
						src={herogif}
						alt="Pattern"
						className="w-full h-auto  rounded-lg"
						playsInline={true}
						autoPlay={true}
						loop={true}
						draggable={false}
					/>
				</div>
			</div>
			<div
				id="about-us"
				className="max-w-7xl mx-auto px-5 pt-12 flex flex-col-reverse lg:flex-row rounded-xl items-start justify-between bg-white"
			>
				<div className="w-full lg:w-3/7 mt-8 lg:mt-0 flex items-center justify-center  pb-10">
					<img
						src={aboutimg}
						alt="Pattern"
						className="w-full h-auto object-cover rounded-lg"
						draggable={false}
					/>
				</div>
				<div className="w-full lg:w-4/7 flex flex-col items-start justify-start pb-10 lg:pl-10 space-y-6">
					<span className="text-2xl font-medium text-[#f7c957]">
						ABOUT US
					</span>
					<div className="w-full flex flex-col items-start justify-start space-y-3 pb-5">
						<span className="text-4xl md:text-5xl font-semibold leading-tight">
						Nurturing Healthy Pregnancies: Your Journey, Our Support.
						</span>
						<span className="w-full text-base font-semibold text-[#868686] selection:text-[#16191E]">
						We provide essential support to expectant mothers worldwide.
						</span>
					</div>
					<div className="w-full flex flex-col items-start justify-start gap-5">
						<InfoCard
							title={'Healthy Pregnancies'}
							description={
								'Ensuring a healthy pregnancy through comprehensive support, resources, and care for expectant mothers.'
							}
							icon={
								<PiHandHeartFill
									size={24}
									color={'#f9699b'}
								/>
							}
							color={'#fee0ea'}
						/>
						<InfoCard
							title={'Pre Pregnancy Care'}
							description={
								'Offering guidance, education, and support for women preparing for a healthy pregnancy journey.'
							}
							icon={
								<LuHeartHandshake
									size={24}
									color={'#fbd066'}
								/>
							}
							color={'#fef3d7'}
						/>
						<InfoCard
							title={'Support Assistance'}
							description={
								'Providing emotional and practical support to ensure the well-being of pregnant women and new mothers.'
							}
							icon={
								<MdOutlineSupportAgent size={24} color={"#7CB9E8"} />
							}
							color={'#F0F8FF'}
						/>
					</div>
				</div>
			</div>
			<div
				id="categories"
				className="max-w-7xl mx-auto px-5 md:px-0 py-10 md:py-24 flex flex-col items-start justify-start selection:bg-[#0a755862]"
			>
				<div className="w-full flex flex-col items-center justify-center space-y-4">
					<span className="text-3xl font-medium text-[#fbd066]">
						SERVICES
					</span>
					<span className="text-3xl md:text-4xl text-center md:text-start lg:text-5xl font-semibold text-[#16191E] ">
						Empowering Beloved Mothers !
					</span>
				</div>
				<div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 items-center justify-center gap-2 md:gap-4 mt-8">
					<Card
						title={'Yoga Experts'}
						description={
							'Guidance on prenatal yoga for a healthy and balanced pregnancy.'
						}
						icon={
							<ImWoman
								size={44}
								color={'#fbd066'}
							/>
						}
						color={'#fef3d7'}
					/>
					<Card
						title={'Dietician'}
						description={
							'Personalized nutrition plans to support a healthy journey.'
						}
						icon={
							<PiBowlFood
								size={44}
								color={'#009F6B'}
							/>
						}
						color={'#D0F0C0'}
					/>
					<Card
						title={'Physcologists'}
						description={
							'Mental health support and counseling for expectant mothers.'
						}
						icon={
							<GiMedicines
								size={44}
								color={'#478ef9'}
							/>
						}
						color={'#e0ecfe'}
					/>
					<Card
						title={'Feeding Experts'}
						description={
							'Expert advice on breastfeeding and infant nutrition.'
						}
						icon={
							<GrUserExpert
								size={44}
								color={'#593ff9'}
								className='p-1'
							/>
						}
						color={'#e4e0fe'}
					/>
					<Card
						title={'Sound Therapy'}
						description={
							'Relaxation and stress relief through prenatal sound therapy.'
						}
						icon={
							<FaBookOpenReader
								size={44}
								color={'#f93f80'}
								className='p-1'
							/>
						}
						color={'#fee0ea'}
					/>
				</div>
			</div>
			{/* <div className="max-w-7xl mx-auto px-5 pt-6 flex flex-col items-start justify-start selection:bg-[#7fe0c662] gap-5">
				

				<div className="w-full flex flex-col items-center justify-center py-4">
					<div className="relative w-full h-[21rem] sm:h-[22rem] md:h-72 flex items-center justify-start md:rounded-r-full bg-[#0a7558] rounded-lg py-10		 lg:py-0">
						<div className="absolute top-[1rem] right-[1rem] w-[16rem] h-[16rem] hidden md:flex border-2 border-zinc-50 bg-image rounded-full lg:hidden">
							<div className="absolute top-[4rem] -right- sm:-right-[1rem] w-[8rem] h-[8rem] flex items-center justify-center bg-[#55b8ff] rounded-full">
								<span className="text-5xl font-bold">35%</span>
							</div>
						</div>

						<div className="w-full sm:w-[60%] lg:w-[50%] flex flex-col items-center lg:items-start justify-start mx-auto sm:mx-0 pl-5  py-10 md:pl-5 lg:pl-44">
							<div className="items-center justify-items-center gap-x-4 gap-y-5">
								<p className="mt-1 text-xl lg:text-2xl font-bold text-white lg:text-[#16191E]">
									Helping businesses succeed through the power
									of video.
								</p>
								<p className="mt-4 text-base font-medium text-white lg:text-[#16191ebd] leading-normal lg:leading-loose py-1 md:py-0">
									Helping businesses succeed through the power
									of video and content marketing that sets us
									apart from the competition and helps us stay
									ahead of the curve and achieve our goals for
									the future were we are here today to help
									you achieve your goals.
								</p>
								<div className="w-full flex items-start justify-start py-2 md:pt-2">
									<Button
										message="Sign Up"
										href="/auth?mode=signup"
										className="px-8 sm:px-12 py-2 text-base rounded-md border border-white text-white hover:bg-white hover:text-[#16191E] outline-none"
									/>
								</div>
							</div>
						</div>
						<div className="absolute top-[1rem] right-[1rem] hidden lg:flex w-[16rem] h-[16rem] flex-1 border-2 border-zinc-50 bg-image rounded-full">
							<div className="absolute top-[4rem] -right-[4rem] w-[8rem] h-[8rem] flex items-center justify-center bg-[#55b8ff] rounded-full">
								<span className="text-5xl font-bold">35%</span>
							</div>
						</div>
					</div>
				</div>

				
			</div> */}
			{/*  */}

			<section class="text-gray-600 bg-white">
  <div class="container mx-auto flex px-5 lg:px-24 py-10 md:py-20 md:flex-row flex-col items-center">
  <div class="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://palavigarbhasanskar.com/wp-content/uploads/2024/02/vector-952x1024.png"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mt-10 md:mt-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Understanding <span className='text-yellow-700'> Garbhasanskar</span>
    
      </h1>
	  <div className='flex mb-4'>
		<img src="https://cdn-icons-png.freepik.com/256/1414/1414254.png?semt=ais_hybrid" className='size-10 rounded-full' alt="" />
		<img src="https://img.freepik.com/premium-photo/cute-woman-meditation-yoga-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated-flat_839035-1015803.jpg" className='size-10 -ml-4 rounded-full' alt="" />
		<img src="https://cdn-icons-png.freepik.com/512/2906/2906476.png" className='size-10 rounded-full -ml-4' alt="" />
		<img src="https://cdn-icons-png.freepik.com/512/5001/5001175.png" className='size-10 rounded-full -ml-4' alt="" />
		<img src="https://images.onlymyhealth.com/imported/images/2020/April/25_Apr_2020/big_14-Color-Tharepy.jpg" className='size-10 rounded-full -ml-4' alt="" />
		<img src="https://thumbs.dreamstime.com/b/girl-listens-to-music-headphones-therapy-podcast-audiobook-radio-meditation-concept-profile-young-african-woman-vector-288627719.jpg" className='size-10 rounded-full -ml-4' alt="" />
	  </div>
      <p class="mb-8 leading-tight">Garbhasanskar is an ancient Indian practice that focuses on nurturing and educating the unborn child. The term "Garbhasanskar" is derived from two Sanskrit words: "Garbha" meaning "womb" and "Sanskar" meaning "ethics" or "values." It refers to a set of practices and rituals aimed at ensuring the physical, mental, and spiritual well-being of both the mother and the baby during pregnancy.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Explore</button>
      </div>
    </div>
    
  </div>
</section>

			<Glimpses></Glimpses>
			
			
			<div
				id="upcoming-events"
				className="w-full max-w-7xl mx-auto px-3 pt-14 pb-16"
			>
				<div className="w-full flex flex-col mb-2 items-center justify-center">
					<span className="text-4xl font-medium text-[#f9c950]">
						Upcoming Events 
					</span>
					
				</div>
				<Carousel
					orientation="horizontal"
					opts={{
						align: 'start',
						loop: true,
					}}
					setApi={setApi}
					className="w-full"
				>
					<CarouselContent className="w-full  mx-auto py-5">
						{/* <CarouselItem className="px-5 mx-auto basic-0  md:basis-1/2 lg:basis-1/3">
							<EventCard
								eventTitle="Sound Therapy Masterclass "
								eventDescription="Sound Therapy Masterclass"
								eventImg="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								eventDate="May 25, 2024"
								eventTags={['For Mothers']}
								eventLocation="4th Floor Taj Hotel, Bhopal"
								// totalLiveParticipants={'10K'}
								eventLink="/book/blood-donation"
								eventTime="10:00 AM"
								eventPrice="Free"
								eventOrganizer="Sufal Support Group"
								eventPurchaseLink="/book/blood-donation"
								isLiked={true}
							/>
						</CarouselItem> */}
						{initial.map((info)=>{
							console.log(info)
							if(!info.eid) return null;
							if(!info.CurrentConform) return null
							return(<>
						<CarouselItem className="px-5 basic-0 mx-auto  md:basis-1/2 lg:basis-1/3">

							<EventCard
								eventTitle={info.EventName}
								eventDescription={info.Discreption}
								eventImg={info.EventBanner}
								eventDate={info.EDate}
								eventTags={['For Mothers']}
								eventLocation={info.Place}
								// totalLiveParticipants={'10K'}
								eventLink="/book/blood-donation"
								Duration={info.Duration}
								eventTime={info.Time}
								eventPrice={info.Fee}
								eventOrganizer={info.Organization}
								eventPurchaseLink={`/book/register_booking/${info.eid}`}
								registrationAndrsvp = "Register Now!"
								isLiked={true}
							/>
						</CarouselItem>
						</>)
						})}
					</CarouselContent>
					<CarouselPrevious className="ml-4	 sm:ml-28 md:ml-16		 md:-bottom-8" />
					<CarouselNext className="mr-6 sm:mr-0 md:mr-1 md:-bottom-8" />
				</Carousel>
			</div>
			{/*  */}
			{/* <div
				id="campaign"
				className="max-w-7xl mx-auto px-5 pt-6 flex flex-col items-start justify-start selection:bg-[#0a755862]"
			>
				<div className="w-full flex flex-col items-center justify-center mt-8">
					<div className="w-full flex flex-col items-center justify-start">
						<div className="w-full flex items-center justify-start gap-5 ">
							<span className="text-3xl md:text-5xl font-semibold text-[#16191E]">
								Introduce Our Campaign
							</span>
						</div>
						<div className="w-full flex flex-col gap-3 md:gap-2 md:flex-row items-center justify-between">
							<span className="w-full text-sm md:text-base font-semibold text-[#868686] selection:text-[#16191E]">
								How do something great to help others
							</span>

							<span className="flex flex-row justify-center">
								<Button
									message="View All"
									icon={<FiArrowUpRight />}
									className="px-6 py-3 rounded-xl text-[#0a7558] "
									text={true}
									href={'/view-all'}
								/>
							</span>
						</div>
					</div>
					<div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-start">
						<PatientDonationCard
							title={'Help Donate For Cianjur Earthquake Victims'}
							tags={['Social Service']}
							description={
								'Help Donate for Cianjur Earthquake Victims by providing food, clothes, medicines for their daily needs.'
							}
							img={
								'https://c.ndtvimg.com/2023-02/3dp24qug_building_640x480_08_February_23.jpg'
							}
							amountRaised={'1250'}
							goal={'5000'}
							progress={'50'}
							href={'/donate'}
							buttonTitle={'Donate'}
							tagColor={'#dfdcfa'}
							tagTextColor={'#8c7cf9'}
						/>
						<PatientDonationCard
							title={'Campaign To Provide Books For Children'}
							tags={['Education']}
							description={
								'Campaign to provide quality books for children who are in need of proper education for their development.'
							}
							img={
								'https://pragya.org/assets/images/icons/1560508933_India_Issues_Inner_Edu1.jpg'
							}
							amountRaised={'2450'}
							goal={'3500'}
							progress={'70'}
							href={'/donate'}
							buttonTitle={'Donate'}
							tagColor={'#f9dce6'}
							tagTextColor={'#f96499'}
						/>
						<PatientDonationCard
							title={'Help Children Cancer Fighters'}
							tags={['Medical Help']}
							description={
								'Help the Children of Cancer Warriors to meet their needs for care and treatment as well as possible to achieve recovery.'
							}
							img={
								'https://st4.depositphotos.com/2249091/22137/i/450/depositphotos_221371480-stock-photo-weak-girl-cancer-wearing-pink.jpg'
							}
							amountRaised={'4050'}
							goal={'4500'}
							progress={'90'}
							href={'/donate'}
							buttonTitle={'Donate'}
							tagColor={'#cee3de'}
							tagTextColor={'#228268'}
						/>
					</div>
				</div>
			</div> */}
			<div
				id="news"
				className="w-full max-w-7xl mx-auto px-5 py-14 flex flex-col items-start justify-start selection:bg-[#0a755862]	"
			>
				<div className="w-full flex  flex-col md:flex-row items-center justify-start md:justify-between">
					<div className="w-full flex items-center justify-start">
						<span className="text-3xl  md:text-5xl font-semibold text-[#16191E]">
							News and Updates
						</span>
					</div>
					<div className="w-full flex-col items-center justify-start space-y-3">
						<span className="w-full text-sm md:text-base font-semibold text-[#868686] selection:text-[#0e1013]">
							Stay informed with the latest developments on
							charity campaigns to keep you engaged.
						</span>
						<Button
							message="See All News"
							icon={<FiArrowUpRight />}
							className="px-6	 py-2 rounded-lg text-[#0a7558] "
							border={true}
							href={'/news'}
						/>
					</div>
				</div>
				
			</div>
			<div
				id="team"
				className="w-full max-w-7xl mx-auto px-3 pt-14 pb-16 selection:bg-[#0a755862]"
			>
				<div className="w-full flex items-center justify-start sm:justify-center gap-5 px-3 pb-5">
					<span className="text-3xl md:text-5xl font-semibold text-[#16191E]">
						Our Team
					</span>
				</div>
				<div className="w-full flex items-center justify-center">
					<Carousel
						orientation="horizontal"
						opts={{
							align: 'start',
							loop: true,
						}}
					>
						<CarouselContent className=" w-[23rem] md:w-[44rem] lg:w-full	 ml-1 md:ml-0 py-5">
							<CarouselItem className="px-5 basic-0  md:basis-1/2 lg:basis-1/3">
								<TeamCard
									teamMemberName="Shailja Mam"
									profession="Executive"
									profileImage={team1}
									socialLinks={[
										{
											name: 'Linkedin',
											href: '#',
											icon: <IoLogoLinkedin size={24} />,
										},
										{
											name: 'Instagram',
											href: '#',
											icon: <IoLogoInstagram size={24} />,
										},
										{
											name: 'Facebook',
											href: '#',
											icon: <BsFacebook size={24} />,
										},
									]}
								/>
							</CarouselItem>
							<CarouselItem className="px-5 basic-0  md:basis-1/2 lg:basis-1/3">
								<TeamCard
									teamMemberName="Shailja Mam"
									profession="Director"
									profileImage={team2}
									socialLinks={[
										{
											name: 'Linkedin',
											href: '#',
											icon: <IoLogoLinkedin size={24} />,
										},
										{
											name: 'Instagram',
											href: '#',
											icon: <IoLogoInstagram size={24} />,
										},
										{
											name: 'Facebook',
											href: '#',
											icon: <BsFacebook size={24} />,
										},
									]}
								/>
							</CarouselItem>
							
						</CarouselContent>
						<CarouselPrevious className="ml-[3.2rem] sm:ml-12 md:ml-[4rem]		 	md:-bottom-[2rem]" />
						<CarouselNext className="mr-10 sm:mr-12 md:-mr-[3rem] md:right-16	 md:-bottom-[2rem]" />
					</Carousel>
				</div>
				<div className="w-full h-auto  hidden  items-center justify-center ">
					<Carousel
						orientation="horizontal"
						opts={{
							align: 'start',
							loop: true,
						}}
					>
						<CarouselContent className=" w-[23rem] ml-1 md:ml-0 py-5">
							<CarouselItem className="px-5 basic-0  md:basis-1/2 lg:basis-1/3">
								<TeamCard
									teamMemberName="Vinay Kumar"
									profession="CEO 1"
									profileImage="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									socialLinks={[
										{
											name: 'Linkedin',
											href: '#',
											icon: <IoLogoLinkedin size={24} />,
										},
										{
											name: 'Instagram',
											href: '#',
											icon: <IoLogoInstagram size={24} />,
										},
										{
											name: 'Facebook',
											href: '#',
											icon: <BsFacebook size={24} />,
										},
									]}
								/>
							</CarouselItem>
							<CarouselItem className="px-5 basic-0  md:basis-1/2 lg:basis-1/3">
								<TeamCard
									teamMemberName="Sunil Kumar"
									profession="CEO 2"
									profileImage="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
									socialLinks={[
										{
											name: 'Linkedin',
											href: '#',
											icon: <IoLogoLinkedin size={24} />,
										},
										{
											name: 'Instagram',
											href: '#',
											icon: <IoLogoInstagram size={24} />,
										},
										{
											name: 'Facebook',
											href: '#',
											icon: <BsFacebook size={24} />,
										},
									]}
								/>
							</CarouselItem>
							
						</CarouselContent>
						<CarouselPrevious className="ml-[3.2rem] sm:ml-12 md:ml-32 	md:-bottom-44" />
						<CarouselNext className="mr-10 sm:mr-12 md:-mr-[3rem] md:-right-1 md:bottom-[9rem]" />
					</Carousel>
				</div>
			</div>
		</div>
		<Footer/>
		</>
	);
};

export default Home;
