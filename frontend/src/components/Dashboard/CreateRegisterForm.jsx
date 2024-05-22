// import {React,useState} from "react";
// import DashboardNav from "./DashboardNav";

// const CreateRegisterForm = ()=>{
//     const [fields, setFields] = useState([{ id: 1, name: '', value: '', type: 'text' }]);

//     const handleChange = (index, fieldName, e) => {
//       const newFields = [...fields];
//       newFields[index][fieldName] = e.target.value;
//       setFields(newFields);
//     };
  
//     const handleAddField = () => {
//       const newFields = [...fields];
//       newFields.push({ id: newFields.length + 1, name: '', value: '', type: 'text' });
//       setFields(newFields);
//     };
  
//     const handleRemoveField = (index) => {
//       const newFields = [...fields];
//       newFields.splice(index, 1);
//       setFields(newFields);
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // Do something with the form data
//       console.log(fields);
//     };
      
  
//     return(
//         <>
//     <div className="flex bg-gray-800 ">
//  <DashboardNav/>
//     <div className="w-[40%]">
//     <h1 className="text-3xl font-bold text-gray-100 flex justify-center my-5">Create Registration Form</h1>

//       <form  onSubmit={handleSubmit}>
//         <div className="flex flex-col items-center mx-auto flex-wrap ">
//         {fields.map((field, index) => (
//           <div  className="flex  justify-around my-3 w-full items-center mx-auto flex-wrap " key={field.id}>
//             <input
//               type="text"
//               placeholder="Name"
//               value={field.name}
//               onChange={(e) => handleChange(index, 'name', e)}
//               class="shadow-sm  bg-gray-50 border w-[40%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//             />
//             <select
//               value={field.type}
//               onChange={(e) => handleChange(index, 'type', e)}
//               className="flex text-lg font-bold bg-gray-800 text-white px-3"
//             >
//               <option value="text">Text</option>
//               <option value="number">Number</option>
//               <option value="email">Email</option>
//               <option value="textarea">Textarea</option>
//               {/* Add more options for other input types as needed */}
//             </select>
//             <button type="button" onClick={() => handleRemoveField(index)}>
//             <svg class="w-6 h-6 text-gray-800 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
// </svg>

//             </button>
//           </div>
//         ))}
//         </div>
//         <div className="flex  gap-5 mt-5 justify-between">
//         <button type="button" className="flex ml-3 gap-3 font-bold text-lg items-center text-white" onClick={handleAddField}>
//         <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
// </svg>

//           Add Field
//         </button>
//         <button className="flex font-bold text-lg mr-5 w-fit border-2 px-5 py-2 rounded-lg bg-green-400 text-white" type="submit">Create Form</button>
//         </div>
//       </form>
//     </div>
//         <div className="w-1 h-screen bg-black"></div>
//         <div className="w-1/2 flex flex-col">
//           <h1 className="text-3xl font-bold text-gray-100 flex justify-center my-5">Registration Form</h1>
//         <div className="w-full flex flex-wrap ">
//         {fields.map((field, index) => (
//           <div key={field.id}>
//             {field.type === 'textarea' ? (
//               <>
//               {(field.name === "")?(<>
//                 <div class="my-5 w-[23vw] px-3 ">
//                   <label  class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">Field Name</label>
//                   <textarea type={field.type} id={field.id} class="shadow-sm  bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
//                 </div>
//               </>):(<>
//            <div className="my-5 w-[23vw] px-3">
//                <label  class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">{field.name}</label>
//            <textarea type={field.type} id={field.id} class="shadow-sm w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
//            </div>
//            </>)}
//            </>
//             ) : (
//                 <>
// {(field.name === "")?(<>
//   <div class="my-5 w-[23vw] px-3 ">
//     <label  class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">Field Name</label>
//     <input type={field.type} id={field.id} class="shadow-sm  bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
//   </div>
// </>):(<>
// {/* <div class="max-w-sm  mx-auto"> */}
//   <div class="my-5 w-[23vw] px-3 ">
//     <label  class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">{field.name}</label>
//     <input type={field.type} id={field.id} class="shadow-sm  bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
//   </div>
//   </>)}
// {/* </div> */}

//                 </>
//             )}
//           </div>
//         ))}
//         </div>
//         <button type="submit" class="text-white items-center mx-auto mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
//         </div>
//     </div>
//         </>
//     )
// }

// export default CreateRegisterForm;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,NavLink } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
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
    const keys = Object.keys(obj);  //it convert object into array
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
        <form class="flex flex-wrap -m-2" onSubmit={()=>saveRegister(fields[indexs].eid)}>
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