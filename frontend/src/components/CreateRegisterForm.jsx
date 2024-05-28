
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateRegisterForm.css"
import Header from '../components/Header';
const Form = ()=>{
  const navigate = useNavigate();
  const {rid}  = useParams();
  const [initial,final] = useState({
    EventName:"",
    Place:"",
    EDate:"",
    EventBanner:"",
    Discreption:"",
    Fee:"",
  })
  const [fields,setfields] = useState(
    {
      Name:"",
      Email:"",
      Numbar:"",
      Address:"",
      WhyWeJoin:""
    }
  )
  const handleInputChange = (e) => {
      const {name,value} = e.target;
      setfields((info)=>{
        return{
          ...info,
          [name]:value
        }
      })
  };

const saveRegister = async(event)=>{
    try {
      event.preventDefault();
     const {Name,Email,Number,Address,WhyWeJoin} = fields;
   const result = await axios.post(`http://localhost:7000/save_register`,
   {Name,Email,Number,Address,WhyWeJoin,Eid:rid});
   console.log(result)
   alert("success")
   navigate(`/`)
  } catch (error) {
    alert(error);
    console.log(error);
  }
}

const getdata = async()=>{
  try{
const response = await axios.get(`http://localhost:7000/get_registerdata_byid/${rid}`);
const result = response.data.result;
final({
 EventName:result.EventName,
  Place:result.Place,
  EDate:result.EDate,
  EventBanner:result.EventBanner,
  Discreption:result.Discreption,
  Fee:result.Fee,
})
  }catch(error){
    console.log(error);
    alert(error);
  }
}

useEffect(()=>{
  getdata();
},[])
  return(
    <>
  {/* <section class="text-gray-900 z-0 body-font ">
  <div class="px-5 max-h-screen scroll- mx-auto">
    <div class="flex flex-col text-center w-full my-6">
      <h1 class="sm:text-3xl text-2xl font-medium title-font  text-gray-900">{fields.EventName} Register </h1>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <form method="POST" class="flex flex-wrap -m-2" onSubmit={(e)=>{
          e.preventDefault()
          saveRegister()}}
          >

        <div class="p-2 w-1/2">
          <div class="relative">
            <label  class="leading-7 text-sm font-semibold text-gray-900">Name</label>
            <input required type="text" id="name" name="Name"  onChange={handleInputChange}  class="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label  class="leading-7 text-sm font-semibold text-gray-900">Email</label>
            <input required type="email" id="name" name="Email"  onChange={handleInputChange}  class="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label  class="leading-7 text-sm font-semibold text-gray-900">Number</label>
            <input required type="number" id="name" name="Number"  onChange={handleInputChange}  class="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label  class="leading-7 text-sm font-semibold text-gray-900">Address</label>
            <input required type="text" id="name" name="Address"  onChange={handleInputChange}  class="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label  class="leading-7 text-sm font-semibold text-gray-900">Why We Join?</label>
            <input required type="text" id="name" name="WhyWeJoin"  onChange={handleInputChange}  class="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
    
        <div class="p-2    w-full">
          <input type="submit"  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"></input>
        </div>
        </form>
      </div>
    </div>
  </div>
  </section> */}
{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<section className=" min-h-screen">
 <Header/>
  <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2  ">
        <img className="border  w-full mb-10" src={initial.EventBanner} alt="Event Banner"></img>
        <p className="max-w-xl text-lg">
          {initial.Discreption}
        </p>
        <div className="mt-8">
          <p  className="text-2xl font-bold text-pink-600"> {initial.EventName} </p>

          <p className="mt-2 not-italic">Event Date {initial.EDate}</p>
          <address className="mt-2 not-italic">{initial.Place}</address>
        </div>
      </div>

      <div className="rounded-lg bg-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form method="POST" onSubmit={saveRegister} className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-2 border-gray-300 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
              name="Name"  onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-2 border-gray-300 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                name="Email"  onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                name="Number"  onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">Address</label>

            <textarea
              className="w-full rounded-lg h-28 border-2 border-gray-300 p-3 text-sm"
              placeholder="Address"
              rows="8"
              id="Address"
              name="Address"
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <label className="sr-only" htmlFor="message">Why We Join?</label>

            <textarea
              className="w-full rounded-lg h-24 border-gray-100 p-3 text-sm"
              placeholder="Why We Join?"
              rows="8"
              id="message"
              name="WhyWeJoin"
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Form;