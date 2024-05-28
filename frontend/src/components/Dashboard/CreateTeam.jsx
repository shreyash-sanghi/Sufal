import React, { useState } from 'react';
import DashboardNav from './DashboardNav';
import axios from 'axios';
import User_profile from "../../assets/user_profile.jpg"
const MyTeam =()=>{

    const [initial,final] = useState({
        Name:"",
        Position:"",
        Gender:"",
        DOB:"",
        About:"",
        FBId:"",
        InstaId:"",
        Vision:"",
        Mission:""
    })
    const [profile,setProfile] = useState();

    
    const savedata = async(e)=>{
        e.preventDefault();
        const data = new FormData();
        const cloudname = "djyu9nhjf";
        data.append("file", profile);
        data.append("upload_preset", 'mysufal');
        data.append("cloud_name", cloudname)
        try {
            const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, data);
            const public_id = res.data.public_id;
            const ProfilImage = res.data.url;
            const {Name,Position,Gender,DOB,About,FBId,InstaId,Vision,Mission} = initial;
            console.log(Name,Position,Gender,DOB,About,FBId,InstaId,Vision,Mission)
           const result = await axios.post("http://localhost:7000/save_team_data",
            {Name,Position,Gender,DOB,About,FBId,InstaId,Vision,Mission,ProfilImage,public_id}
           );
           console.log(result);
           alert("Success");
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }
    const setdata =(e)=>{
     const {name,value} = e.target;
     final((info)=>{
        return{
            ...info,
            [name]:value
        }
     })
    }
    // console.log(URL.createObjectURL(profile))
    // URL.createObjectURL(e.data.urlOrBold)
    return(
        <>
        <section class="flex md:flex-row flex-col my-auto bg-gray-800 dark:bg-gray-900">
            <DashboardNav/>
    <div class="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
        <div
            class="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl rounded-xl h-fit mt-8 dark:bg-gray-100"
            >
            {/* <!--  --> */}
            <div class=" flex flex-col justify-between w-full ">
                <form onSubmit={savedata} method='POST'>
                    {/* <!-- Cover Image --> */}
                    <div
                        class="w-full rounded-sm bg-cover bg-center bg-no-repeat items-center">
                        {/* <!-- Profile Image -->{console.log(URL.createObjectURL(profile))} */}
                        {(profile === undefined) ? (<>
                            <div
                            class={`mx-auto flex justify-center w-[130px] h-[130px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat`}
                            style={{ backgroundImage: `url(${User_profile})` }}                       
                            >
                          <a href="#">       
              </a>
                            <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">

                                <input onChange={(e)=>setProfile(e.target.files[0])} type="file" name="profile" id="upload_profile" hidden required/>

                                <label for="upload_profile">
                                        <svg data-slot="icon" class="w-6 h-5 text-blue-700" fill="none"
                                            stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                            </path>
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                            </path>
                                        </svg>
                                    </label>
                            </div>
                        </div>                </>) : (<>
                            <div
                            // class={`mx-auto flex justify-center w-[130px] h-[130px] bg-blue-300/20 rounded-full bg-[url(${URL.createObjectURL(profile)})] bg-cover bg-center bg-no-repeat`}
                            // class={`mx-auto flex justify-center w-[130px] h-[130px] bg-blue-300/20 rounded-full bg-[url()] bg-cover bg-center bg-no-repeat`}
                            class={`mx-auto flex justify-center w-[130px] h-[130px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat`}
                            style={{ backgroundImage: `url(${URL.createObjectURL(profile)})` }}                       
                            >
                          <a href="#">
        
              </a>
                            <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">

                                <input onChange={(e)=>setProfile(e.target.files[0])} type="file" name="profile" id="upload_profile" hidden required/>

                                <label for="upload_profile">
                                        <svg data-slot="icon" class="w-6 h-5 text-blue-700" fill="none"
                                            stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                            </path>
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                            </path>
                                        </svg>
                                    </label>
                            </div>
                        </div>                </>)}
                   
                        <div class="flex justify-end">
                            {/* <!--  --> */}
                            {/* <input type="file" name="profile" id="upload_cover" hidden required/> */}

                        </div>
                    </div>
                    <h2 class="text-center mt-1 font-semibold text-gray-300">Upload Profile and Cover Image
                    </h2>
                    <div class="flex lg:flex-row md:flex-col items-center sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        <div class="w-full  mb-4 mt-6">
                            <label for="" class="mb-2  font-semibold text-gray-300">Full Name</label>
                            <input type="text"
                            name='Name'
                            onChange={setdata}
                                    class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="First Name"/>
                        </div>
                        <div class="w-full  mb-4 lg:mt-6">
                            <label for="" class=" mb-2  font-semibold text-gray-300">Position</label>
                            <input type="text"
                                  name='Position'
                                  onChange={setdata}
                                    class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Position"/>
                        </div>
                    </div>
                    <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        <div class="w-full">
                            <h3 class="font-semibold text-gray-300 mb-2">Sex</h3>
                            <select
                            onChange={setdata} name='Gender'
                                    class="w-full text-grey border-2 rounded-lg p-2 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800">
                                    <option disabled value="">Select Sex</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                        </div>
                        <div class="w-full">
                            <h3 class="text-gray-300 mb-2">Date Of Birth</h3>
                            <input type="date"
                            onChange={setdata} name='DOB'
                                    class="text-grey p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"/>
                        </div>
                    </div>

                    <div class="flex lg:flex-row md:flex-col items-center sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        <div class="w-full  mb-4 mt-6">
                            <label for="" class="mb-2  font-semibold text-gray-300">Vision</label>
                            <input type="text"
                            onChange={setdata}
                            name='Vision'
                                    class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Vision"/>
                        </div>
                        <div class="w-full  mb-4 lg:mt-6">
                            <label for="" class=" mb-2  font-semibold text-gray-300">Mission</label>
                            <input type="text"
                            name='Mission'
                            onChange={setdata}
                                    class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Last Name"/>
                        </div>
                    </div>
                    <div class="flex lg:flex-row md:flex-col items-center sm:flex-col xs:flex-col gap-2 justify-center w-full">
                    
                    <div class="flex flex-col items-center sm:flex-col xs:flex-col justify-center w-full">
                            <div class="w-full  mb-4 mt-3">
                            <label for="" class="mb-2  font-semibold text-gray-300">Insta Link</label>
                            <input type="text"
                            name='InstaId'
                            onChange={setdata}
                                    class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Insta Link"/>
                        </div>
                        <div class="w-full  ">
                            <label for="" class=" mb-2  font-semibold text-gray-300">Facebook Link</label>
                            <input type="text"
                                 onChange={setdata}
                                 name='FBId'
                                    class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Facebook Link"/>
                        </div>
                        </div>
                        <div class="flex flex-col mt-2 sm:flex-col xs:flex-col gap-2  w-full">
                        <label for="" class="  font-semibold text-gray-300">About </label>
                            <textarea type="text"
                            onChange={setdata}
                            name='About'
                                    class="mt-2 p-1 h-36 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Last Name"/>
                        </div>
                    </div>

                    <div class="w-fit px-10 rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                        <button type="submit" class="w-full p-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
        </>
    )
}

export default MyTeam;
