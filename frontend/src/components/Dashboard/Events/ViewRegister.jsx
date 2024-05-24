import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DashboardNav from "../DashboardNav";


const ViewRegister = () => {
    const navigate = useNavigate();
    const {Eid} = useParams();
    const [initial, final] = useState([{
        eid: "",
        Name: "",
        Number: "",
        Email: "",
        WhyWeJoin: "",
        Address: ""
    }])

    const getdata =async()=>{
        try{
      const result = await axios.get(`http://localhost:7000/get_view_register/${Eid}`);
      console.log(result)
      const data = result.data.result;
      data.map((info)=>{
        console.log(info)
        final((about)=>[
            ...about,{
                eid:info._id,
                Name : info.Name,
                Email : info.Email,
                Number : info.Number,
                WhyWeJoin : info.WhyWeJoin,
                Address : info.Address,
            }
        ])
        })
        }catch(error){
            alert(error);
            console.log(error);
        }
    }
useEffect(()=>{
  getdata();
},[])

    return (
        <>
      <div className="flex bg-gray-800">
        <DashboardNav />
        <div class="font-sans bg-grey-lighter flex flex-col w-full">
          <div class=" dark:text-white text-gray-600  flex overflow-hidden text-sm">
            <div class="flex-grow overflow-hidden  flex flex-col">

              <div class="flex-grow flex overflow-x-hidden">
                <div class="flex-grow   overflow-y-auto">
                  <div class="py-4">
                  <table class="w-full text-left">
<thead>
<tr class="text-white border-b">
          <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Name</th>
          <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Number</th>
          <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Email</th>
          <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Address</th>
          <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Why We Join</th>
  </tr>
</thead>

{initial.map((data) => {
    if(!data.eid) return null;
    // if(data.eid != Eid) return null;
  return (<>
            <tbody class="text-gray-600 dark:text-gray-100">
      <tr>
        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Name}</td>
        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Number}</td>
        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Email}</td>
        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Address}</td>
        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.WhyWeJoin}</td>
        <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
          <div class="flex items-center">
            <button onClick={async()=>{
              const confirm_delete = confirm("You have Confirm to delete...")
        
              if(confirm_delete){
                 const result = await axios.delete(`http://localhost:7000/delete_register/${data.eid}` )
                 final((info) =>
                  info.filter((about) => about.eid != data.eid)
                );
              }
            }} class="w-24 h-8 inline-flex items-center justify-center text-lg text-red-400 ml-auto">
              Remove
            </button>
          </div>
        </td>
      </tr>
      </tbody>
  </>
  )
})}

 </table>

            </div>
</div></div></div></div></div></div>
        </>
    )
}

export default ViewRegister;