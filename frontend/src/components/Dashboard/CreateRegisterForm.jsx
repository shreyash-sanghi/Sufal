
import React, { useEffect, useState } from "react";
import axios from "axios";


import {
Dialog,
} from "@material-tailwind/react";
const Form = ()=>{
  const [fields,setfields] = useState([
    {
      eid:"",
      EventName:"",
      EventBanner:"",
      EDate:"",
      Discreption:"",
      Time:"",
      Place:"",
      Formfields:[],

    }]
  )

        //Pop UP
        const [size, setSize] = React.useState(null);
        const [indexs, setindex] = React.useState(0);
 
        const handleOpen = (value,index) => {setSize(value),setindex(index)};
         // Initialize state dynamically using keysArray
     
  const obj = Object.fromEntries(fields[indexs].Formfields.map(key => [key.dataName, '']));
  // Create state object using useState
  const [state, setState] = useState(obj);

  const [items, setItems] = useState([]);
  const handleInputChange = (value, index) => {
    const updatedItems = [...items];
    updatedItems[index] = value;
    setItems(updatedItems);
  };

  const saveRegister = async(eid)=>{
    try {
      const gernate_otp = ()=>{
        const length =10;
        let otp=""
        for(let i=0;i<length;i++ ){
          otp += Math.floor(Math.random()*10);
        }
        return otp;
    }
    const uid = gernate_otp();
    items.push(uid);
    const keys = Object.keys(obj);  //it convert object into array
    keys.push("uid");
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (i < items.length) {
        obj[key] = items[i];
      } else {
        obj[key] = ''; 
      }
    }
    console.log(obj)
   const result = await axios.post(`http://localhost:7000/save_register/${eid}`,{obj});
   alert("success")
   handleOpen(null,0)
  } catch (error) {
    alert(error);
    console.log(error);
  }
}

  console.log(state)
  const getdata = async()=>{
  try{
   const result = await axios.get("http://localhost:7000/get_cad_data");
   const info = result.data.result;
   info.map((data)=>{
    console.log(data)
    setfields((about)=>[
      ...about,{
        eid : data._id,
        EventName : data.EventName,
        EventBanner : data.EventBanner,
        EDate: data.EDate,
        Discreption : data.Discreption,
        Time: data.Time,
        Place: data.Place,
        Formfields:data.Formfields,
      }
    ])
   })
 
  }catch(error){
    alert(error);
    console.log(error);
  }
}
console.log(fields)
useEffect(()=>{
getdata();
},[])
  return(
    <>
   <section class="text-gray-600  body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      {fields.map((info,index)=>{
       if(!info.eid) return null;
        return(
          <>
            <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
          <div class="p-6">
            {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{info.EventName}</h1>
            <div className="flex items-center justify-between">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{info.EDate}</h1>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{info.Time}</h1>
            </div>
            <p class="leading-relaxed mb-3">{info.Discreption}</p>
            <div class="flex items-center flex-wrap ">
              <button onClick={()=>{handleOpen("xxl",index)}} class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Register
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
          </>
        )
      })}
    

    
    </div>
  </div>
</section>

<Dialog
        open={
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
        className="bg-gray-900  justify-center min-h-screen w-full  opacity-90 "
      >
         
        <button onClick={() => {handleOpen(null,0)}} className="flex absolute text-gray-500 top-3 right-10 text-5xl">X</button>
        <section class="text-gray-100 body-font ">
  <div class="px-5 overflow-y-scroll max-h-screen scroll- mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Register </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <form method="POST" class="flex flex-wrap -m-2" onSubmit={(e)=>{
          e.preventDefault()
          saveRegister(fields[indexs].eid)}}
          >
      {fields[indexs].Formfields.map((info,index)=>{
        return(
          <>
          {(info.type === "textarea")?(<>          
            <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 font-semibold text-sm text-gray-100">{info.name}</label>
            <textarea required  name={info.name}  onChange={(e) => handleInputChange(e.target.value, index)} class="w-full bg-gray-900 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        </>):(<>
              <div class="p-2 w-1/2">
          <div class="relative">
            <label  class="leading-7 text-sm font-semibold text-gray-100">{info.name}</label>
            <input required type={info.type} id="name" name={info.dataName}  onChange={(e) => handleInputChange(e.target.value, index)}  class="w-full bg-gray-900 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        </>)}

          </>
        )
      })}
        <div class="p-2    w-full">
          <input type="submit"  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"></input>
        </div>
        </form>
      </div>
    </div>
  </div>
</section>
      </Dialog>
    </>
  )
}

export default Form;