
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const Form = ()=>{
  const navigate = useNavigate();
  const {rid}  = useParams();
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

const saveRegister = async()=>{
    try {
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

  return(
    <>
  <section class="text-gray-900 z-0 body-font ">
  <div class="px-5 max-h-screen scroll- mx-auto">
    <div class="flex flex-col text-center w-full my-6">
      <h1 class="sm:text-3xl text-2xl font-medium title-font  text-gray-900">{fields.EventName} Register </h1>
      {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
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
  </section>
    </>
  )
}

export default Form;