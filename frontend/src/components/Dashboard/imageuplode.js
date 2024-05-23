import axios from "axios";

const imageuplode = async(file)=>{
    const cloudname = "djyu9nhjf";
    const formData = new FormData();
  formData.append("file",file);
  formData.append("upload_preset", 'mysufal');
  const res = await  axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,formData);
  return {publicId:res.data.public_id,url:res.data.url}
//   const public_id =  res.data.public_id;
//   const EventBannerurl = res.data.url;
}

export default imageuplode;