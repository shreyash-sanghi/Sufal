import React, { useState,useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DashboardNav from "../DashboardNav.jsx";
const AddEvent = ()=>{
    const { id } = useParams();
    const form = useRef();
    const [initialAddEvent, finalAddEvent] = useState({
     
      EventName: "",
      Discreption: "",
      Place: "",
      EDate: "",
      Time: "",
    })
   const [initialAddEventfile,finalAddEventfile] = useState();
   const [limiterror, setlimitError] = useState("");
  
    const EventData = (e) => {
      const { name, value } = e.target;
        finalAddEvent((Edata) => {
          return {
            ...Edata,
            [name]: value
          }
        })

             // Count words in description
             const wordCount = value.trim().split(/\s+/).length;
             if (value.length > 100) {
              setlimitError("Description should be within 100 characters.");
          } else {
              setlimitError("");
          }
    }
    const EventSave = async (event) => {
        event.preventDefault();

        const data = new FormData();
        const cloudname = "djyu9nhjf";
        data.append("file",initialAddEventfile);
        data.append("upload_preset",'mysufal');
        data.append("cloud_name",cloudname)

        //Date
        let  EDate = initialAddEvent.EDate;
        let todaydate = new Date();
        let curday = todaydate.getDay();
        let curdate =todaydate.getDate();
        let curyear =todaydate.getFullYear();
        if(curday<10){
        curday = `0${curday}`;
        }
        if(curdate<10){
        curdate = `0${curdate}`;
        }
        todaydate = `${curdate}/${curday}/${curyear}`;
           let date = EDate.split("-");
           date = `${date[2]}/${date[1]}/${date[0]}`;
           console.log(date)
           console.log(todaydate)
          let CurrentConform = false;
          let PastConform = false;
           if(date == todaydate){
           CurrentConform = true;
           }
           if(date>todaydate){
            PastConform = true;
           }
          
        try {
        const { EventName, Discreption, Place,Time} = initialAddEvent;
        console.log
        if(initialAddEventfile === null || initialAddEventfile === undefined){
          alert("Please Uplode image...")
          return;
        }
        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,{
          method:"POST",
          body:data
        });
        const cloudData = await res.json();
       const EventBannerurl = cloudData.url;
          const response = await axios.post("http://localhost:7000/uplodeEventData"
          ,{EventName, Discreption, Place, EDate:date,Time,EventBanner:EventBannerurl,CurrentConform,PastConform})
          alert("Success...")
        } catch (error) {
          alert(error);
          console.log(error)
        }
      }

    return(
        <>
     <div className="flex">
          <DashboardNav/>
          <div className=" flex flex-col  mx-auto  w-[84%] bg-gray-800">
          <h1 className="text-3xl mt-5 justify-center flex text-gray-400 font-medium">
              Add An Event
            </h1> 
       <div className="flex items-center ">
        <form
          className="px-8 py-16 event-form text-lg w-[65%]  text-white"
          onSubmit={EventSave}
          ref={form}
          id="form"
        >
          <div className="relative  z-0 w-full mb-8 group">
            <input 
              type="text" // Change the input type to "date"
              name="EventName"
              value={initialAddEvent.EventName}
              onChange={EventData}
              id="floating_date"
              className="event-input block py-1.5  px-0 w-full  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              autoComplete="off"
            />
            <label
              for="floating_date"
              className="peer-focus:font-medium absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name of the event
            </label>
          </div>

        

          <div className="relative z-0 my-5  w-full mb-8 group">
            <input
              type="text"
              name="Place"
              value={initialAddEvent.Place}
              onChange={EventData}
              autoComplete="off"
              id="floating_repeat_password"
              className="event-input block py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_repeat_password"
              className="peer-focus:font-medium absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Venue
            </label>
          </div>
          <div className="grid md:grid-cols-2 mb-8 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="EDate"
                value={initialAddEvent.EDate}
                onChange={EventData}
                autoComplete="off"
                id="floating_first_name"
                className="event-input block py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_first_name"
                className="peer-focus:font-medium absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="time"
                name="Time"
                value={initialAddEvent.Time}
                onChange={EventData}
                autoComplete="off"
                id="floating_last_name"
                className="event-input block py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_last_name"
                className="peer-focus:font-medium absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Time
              </label>
            </div>
          </div>
          <div className=" flex items-center justify-between">
       

            <div className="relative z-0 w-1/2 mb-6 group"> 
            <textarea
              type="text"
              name="Discreption"
              value={initialAddEvent.Discreption}
              onChange={EventData}
              autoComplete="off"
              id="floating_password"
              maxLength={101}
              className=" event-input block min-h-24  py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <div >

            <label
              for="floating_password"
              className="peer-focus:font-medium absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
              Event Description (max 100 characters)
            </label>
            {limiterror && (
                                <div className="text-red-500">{limiterror}</div>
                            )}
              </div>
          </div>
        
   
            <div className="relative z-0 w-[45%] mb-6 group">
              <input
                type="file"
                onChange={(ev)=>{finalAddEventfile(ev.target.files[0])}}
                className="event-input block py-2.5 px-0   w-full  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label
                for="floating_company"
                className="peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Event Banner (Landscape)
              </label>
            </div>
    
          </div>
         
          <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          </input>

        </form>

        <div class=" w-[30%] h-fit ml-5  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      {(initialAddEventfile=== undefined)?(<>
        <img class="rounded-t-lg object-cover w-full h-[35vh]"  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="" />
      </>):(<>
        <img class="rounded-t-lg object-cover w-full h-[35vh]"  src={URL.createObjectURL(initialAddEventfile)} alt="" />
      </>)}
    </a>
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{initialAddEvent.EventName}</h5>
   <div className="flex font-semibold items-center gap-5 text-white my-3">
    <h6>On - {initialAddEvent.EDate}</h6>
    <h6>Time -{initialAddEvent.Time}  </h6>
   </div>
   <h3 className="flex font-semibold text-white my-3">Vanue - {initialAddEvent.Place} </h3>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{initialAddEvent.Discreption}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Register Now
     
        </a>
    </div>
     </div>

        </div>
    


        </div>
        </div>
       
        </>
    )
}

export default AddEvent;