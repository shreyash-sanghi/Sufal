import React, { useState,useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DashboardNav from "../DashboardNav";


const AddEvent = (props)=>{
  const navigate = useNavigate();
    const { id,about_type } = useParams();
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

    //Create Registration Form
    const [fields, setFields] = useState([{ id: 1, name: '', type: 'text', dataName: "" }]);


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
      const { EventName, Discreption, Place, Time } = initialAddEvent;
      if (initialAddEventfile === null || initialAddEventfile === undefined) {
        alert("Please Uplode image...")
        return;
      }
            const res = await  axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,data);
          const public_id =  res.data.public_id;
         const EventBannerurl = res.data.url;
      const Formfields = fields;
      const response = await axios.post("http://localhost:7000/uplodeEventData"
        , { EventName, Formfields, Discreption, public_id, Place, EDate: date, Time, EventBanner: EventBannerurl, CurrentConform, PastConform })
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

  //Create Registration Form
  const handleChange = (index, fieldName, e) => {
    const newFields = [...fields];
    newFields[index][fieldName] = e.target.value;
    newFields[index]["dataName"] = `${newFields[index]["name"]}_${newFields.length + 1}`;
    setFields(newFields);
  };

  const handleAddField = () => {
    const newFields = [...fields];
    newFields.push({ id: newFields.length + 1, name: '', type: 'text' });
    setFields(newFields);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields)
    // Do something with the form data
    navigate(`/add_event/add_event`)
  };

    return(
        <>
        <div className="flex bg-gray-800">
        <DashboardNav/>
         {(about_type==="add_event")?(<>
          <div className=" flex flex-col  mx-auto  w-full bg-gray-800">
                          <h1 className="text-3xl mt-5 justify-center flex text-gray-400 font-medium">
                            Add An Event
                          </h1>
                          <div className="flex items-center ">
                            <form
                              className="px-8 py-16 event-form text-lg w-[65%]  text-white"
                              onSubmit={EventSave}
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
                                    onChange={(ev) => { finalAddEventfile(ev.target.files[0]) }}
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
                              <div className='flex justify-between'>
                                <button onClick={() => navigate(`/add_event/add_event_form`)} required className=" font-bold bg-grey-200 text-black bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                  Add Form
                                </button>
                                {console.log(fields.length)}
                                {(fields.length < 2) ? (<>
                                  <p onClick={() => alert("Please Create a Registration Form first...")} className="text-white  bg-blue-300  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
                                    Submit
                                  </p>
                                </>) : (<>
                                  <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                  </input>
                                </>)}
                              </div>
                            </form>

                            <div class=" w-[30%] h-fit ml-5  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                              <a href="#">
                                {(initialAddEventfile === undefined) ? (<>
                                  <img class="rounded-t-lg object-cover w-full h-[35vh]" src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="" />
                                </>) : (<>
                                  <img class="rounded-t-lg object-cover w-full h-[35vh]" src={URL.createObjectURL(initialAddEventfile)} alt="" />
                                </>)}
                              </a>
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
        </>):(<>
          <div className="flex w-full bg-gray-800 ">

<div className="w-[40%]">
  <h1 className="text-3xl font-bold text-gray-100 flex justify-center my-5">Create Registration Form</h1>

  <form onSubmit={handleSubmit}>
    <div className="flex flex-col items-center mx-auto flex-wrap ">
      {fields.map((field, index) => (
        <div className="flex  justify-around my-3 w-full items-center mx-auto flex-wrap " key={field.id}>
          <input
            type="text"
            placeholder="Name"
            value={field.name}
            onChange={(e) => handleChange(index, 'name', e)}
            required
            class="shadow-sm  bg-gray-50 border w-[40%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <select
            value={field.type}
            onChange={(e) => handleChange(index, 'type', e)}
            className="flex text-lg font-bold bg-gray-800 text-white px-3"
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="textarea">Textarea</option>
            {/* Add more options for other input types as needed */}
          </select>
          <button type="button" onClick={() => handleRemoveField(index)}>
            <svg class="w-6 h-6 text-gray-800 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
            </svg>

          </button>
        </div>
      ))}
    </div>
    <div className="flex  gap-5 mt-5 justify-between">
      <button type="button" className="flex ml-3 gap-3 font-bold text-lg items-center text-white" onClick={handleAddField}>
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

        Add Field
      </button>
      <button className="flex font-bold text-lg mr-5 w-fit border-2 px-5 py-2 rounded-lg bg-green-400 text-white" type="submit">Save</button>
    </div>
  </form>
</div>
<div className="w-1 h-screen bg-black"></div>
<div className="w-1/2 flex flex-col">
  <h1 className="text-3xl font-bold text-gray-100 flex justify-center my-5">Registration Form</h1>
  <div className="w-full ml-5 flex flex-wrap ">
    {fields.map((field, index) => (
      <div key={field.id}>
        {field.type === 'textarea' ? (
          <>
            {(field.name === "") ? (<>
              <div class="my-5 w-[21vw] px-3 ">
                <label class="block mb-2  text-sm font-medium text-gray-100 dark:text-white">Field Name</label>
                <textarea type={field.type} id={field.id} class="shadow-sm  bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
              </div>
            </>) : (<>
              <div className="my-5 w-[21vw] px-3">
                <label class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">{field.name}</label>
                <textarea type={field.type} id={field.id} class="shadow-sm w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
              </div>
            </>)}
          </>
        ) : (
          <>
            {(field.name === "") ? (<>
              <div class="my-5 w-[21vw] px-3 ">
                <label class="block mb-2  text-sm font-medium text-gray-100 dark:text-white">Field Name</label>
                <input type={field.type} id={field.id} class="shadow-sm  bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
              </div>
            </>) : (<>
              {/* <div class="max-w-sm  mx-auto"> */}
              <div class="my-5 w-[21vw] px-3 ">
                <label class="block mb-2  text-sm font-medium text-gray-100 dark:text-white">{field.name}</label>
                <input type={field.type} id={field.id} class="shadow-sm  bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
              </div>
            </>)}
            {/* </div> */}

          </>
        )}
      </div>
    ))}
  </div>
  <button type="submit" class="text-white items-center mx-auto mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</div>
           </div>
        </>)}
        </div>          
       
        </>
    )
}

export default AddEvent;