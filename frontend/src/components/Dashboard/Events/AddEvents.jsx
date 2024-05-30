import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DashboardNav from "../DashboardNav";


const AddEvent = () => {
  const navigate = useNavigate();
  const [initialAddEvent, finalAddEvent] = useState({
    EventName: "",
    Discreption: "",
    Place: "",
    EDate: "",
    Time: "",
    Title: "",
    Organization: "",
    Duration: "",
    Fee: "",
  })

  const [initialAddEventfile, finalAddEventfile] = useState();
  const [limiterror, setlimitError] = useState("");
  //-------------------------------------
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
    data.append("file", initialAddEventfile);
    data.append("upload_preset", 'mysufal');
    data.append("cloud_name", cloudname)

    //Date
    let EDate = initialAddEvent.EDate;
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
    let date = EDate.split("-");
    date = `${date[2]}/${months[date[1] - 1]}/${date[0]}`;

    let CurrentConform = false;
    let PastConform = false;
    if (date >= todaydate) {
      CurrentConform = true;
    }
    if (date < todaydate) {
      PastConform = true;
    }

    try {
      const { EventName, Discreption, Place, Time ,Title,Organization,Duration,Fee} = initialAddEvent;
      if (initialAddEventfile === null || initialAddEventfile === undefined) {
        alert("Please Uplode image...")
        return;
      }
      const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, data);
      const public_id = res.data.public_id;
      const EventBannerurl = res.data.url;
      const response = await axios.post("http://localhost:7000/uplodeEventData"
        , { Title,Organization,Duration,Fee,EventName, Discreption, public_id, Place, EDate: date, Time, EventBanner: EventBannerurl, CurrentConform, PastConform })
      alert("Success...")
      finalAddEvent({
        EventName: "",
        Discreption: "",
        Place: "",
        EDate: "",
        Time: "",
      })
      finalAddEventfile();
    } catch (error) {
      alert(error);
      console.log(error)
    }
  }
  // ---------------------------------------------------

  // //Create Registration Form

  return (
    <>
      <div className="flex flex-col md:flex-row z-0 bg-gray-800">
        <DashboardNav />
        <div className=" flex flex-col  mx-auto  w-full bg-gray-800">
          <h1 className="text-3xl mt-5 justify-center flex text-gray-400 font-medium">
            Add An Event
          </h1>
          <div className="flex items-center ">
            <form
              className="px-8 py-16 event-form text-lg w-full lg:w-[65%]  text-white"
              onSubmit={EventSave}
              id="form"
            >
              <div className="md:relative  z-0 w-full mb-8 group">
              <label
                  for="floating_date"
                  className="peer-focus:font-medium block md:hidden     "
                >
                  Name of the event
                </label>
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
                  className="peer-focus:font-medium hidden md:block absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name of the event
                </label>

              </div>



              <div className="md:relative z-0 my-5  w-full mb-8 group">
              <label
                  for="floating_date"
                  className="peer-focus:font-medium block md:hidden     "
                >
                Venue
                </label>
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
                  className="peer-focus:font-medium hidden md:block    absolute   duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Venue
                </label>
              </div>
              <div className="md:grid md:grid-cols-2 mb-8 md:gap-6">
                <div className="md:relative z-0 w-full mb-6 group">
                <label
                  for="floating_date"
                  className="peer-focus:font-medium block md:hidden     "
                >
              Event Title
                </label>
                  <input
                    type="text"
                    name="Title"
                    value={initialAddEvent.Title}
                    onChange={EventData}
                    autoComplete="off"
                    id="floating_first_name"
                    className="event-input block py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_first_name"
                    className="peer-focus:font-medium hidden md:block absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Event Title
                  </label>
                </div>
                <div className="md:relative z-0 w-full md:mb-6 group">
                <label
                  for="floating_date"
                  className="peer-focus:font-medium block md:hidden     "
                >
            Organization Name
                </label>
                  <input
                    type="text"
                    name="Organization"
                    value={initialAddEvent.Organization}
                    onChange={EventData}
                    autoComplete="off"
                    id="floating_last_name"
                    className="event-input block py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_last_name"
                    className="peer-focus:font-medium hidden md:absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Organization Name
                  </label>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 mb-8 md:gap-6">
                <div className="md:relative z-0 w-full mb-6 group">
                <label
                  for="floating_date"
                  className="peer-focus:font-medium block md:hidden     "
                >
              Event Date
                </label>
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
                    className="peer-focus:font-medium hidden md:block absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Event Date
                  </label>
                </div>
                <div className="md:relative z-0 w-full md:mb-6 group">
                <label
                  for="floating_date"
                  className="peer-focus:font-medium block md:hidden     "
                >
              Event Time
                </label>
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
                    className="peer-focus:font-medium hidden md:absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Time
                  </label>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 mb-8 md:gap-6">

                <div className="md:relative z-0 w-full mb-6 group">
                <label
                  for="floating_date"
                  className="peer-focus:font-medium block md:hidden     "
                >
               Duration
                </label>
                  <input
                    type="time"
                    name="Duration"
                    value={initialAddEvent.Duration}
                    onChange={EventData}
                    autoComplete="off"
                    id="floating_last_name"
                    className="event-input block py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_last_name"
                    className="peer-focus:font-medium hidden md:block absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Duration
                  </label>
                </div>
                <div className="md:relative z-0 w-full mb-6 group">
                <label
                  for="floating_date"
                  className="peer-focus:font-medium text-sm block md:hidden     "
                >
               Entry Fee (if free then enter Free)
                </label>
                  <input
                    type="text"
                    name="Fee"
                    value={initialAddEvent.Fee}
                    onChange={EventData}
                    autoComplete="off"
                    id="floating_last_name"
                    className="event-input block py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                  />
                  <label
                    for="floating_last_name"
                    className="peer-focus:font-medium hidden md:block absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Entry Fee (if free then enter Free)
                  </label>
                </div>

              </div>
              <div className=" md:grid md:grid-cols-2 mb-8 md:gap-6">

              <label
                  for="floating_date"
                  className="peer-focus:font-medium block md:hidden     "
                >
               Discreption
                </label>
                <div className="md:relative z-0 w-full mb-6 group">
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
                      className="peer-focus:font-medium   hidden md:block absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Event Description (max 100 characters)
                    </label>
                    {/* {console.log(URL.createObjectURL(initialAddEventfile))} */}
                    {limiterror && (
                      <div className="text-red-500">{limiterror}</div>
                    )}
                  </div>
                </div>


                <div className="md:relative z-0 w-full  mt-5 md:mt-0 mb-6 group">
                  <input
                    type="file"
                    onChange={(ev) => { finalAddEventfile(ev.target.files[0]) }}
                    className="event-input block py-2.5 px-0   w-full  bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                  <label
                    for="floating_company"
                    className="peer-focus:font-medium hidden md:block absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Event Banner (Landscape)
                  </label>
                </div>

              </div>
              <div className='flex justify-between'>
                <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                </input>
              </div>
            </form>

            <div class="hidden lg:block w-[30%] h-fit ml-5  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
+
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">{initialAddEvent.EventName}</h5>
                <div className="flex font-semibold items-center gap-5 text-white my-3">
                  <h6>On - {initialAddEvent.EDate}</h6>
                  <h6>Time -{initialAddEvent.Time}  </h6>
                </div>
                <h3 className="flex font-semibold text-white my-3">Vanue - {initialAddEvent.Place} </h3>
                <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">{initialAddEvent.Discreption}</p>
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