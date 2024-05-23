import {React,useState} from "react";
import imageuplode from "./imageuplode.js";
const UplodeMultipleImage  = ()=>{

    const [images, setImages] = useState([]);
    const [message, setMessage] = useState('');
   const [link,setlink] = useState([]);
    const handleUpload = async (e) => {
      e.preventDefault();
      let arr = [];
   images.map(async(info)=>{
    try{
      for(let i=0;i<info.length;i++){
        const data = await imageuplode(info[i]);
        arr.push(data);
      }
    }catch(error){
    console.log(error)
    }
   })
   setlink(arr);
alert("success")
    };

  console.log(link)

    const handleDelete = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
      };

      function arrayToFileList(array) {
        const dataTransfer = new DataTransfer();
        array.forEach(file => {
          dataTransfer.items.add(file);
        });
        return dataTransfer.files;
      }

    const handleDelete2 = (objectIndex, fileIndex) => {
        const updatedFilesArray = [...images];
        let updatedObject =  updatedFilesArray[objectIndex]
        const filesArray = Array.from(updatedObject);
        filesArray.splice(fileIndex, 1);
         // Convert the array back to a FileList
         const fileList = arrayToFileList(filesArray);
    updatedFilesArray.splice(objectIndex, 1);
    updatedFilesArray.push(fileList)
    setImages(updatedFilesArray)
      };

    return(
        <>
         <div>
      <form onSubmit={handleUpload}>
        <input type="file" multiple onChange={(e) => setImages((info)=>[
            ...info,e.target.files
        ])} />
        <button type="submit">Upload</button>
      </form>
      <p>{message}</p>
      {console.log(images)}
      <div>
        {images.map((image, index) => (
          <div key={index}>
            {(images[index].length >1)?(<>
            {Object.values(images[index]).map((info,fileIndex)=>{
                return(
                    <>
                    <img src={URL.createObjectURL(info)} alt={`Image ${index}`} width="150" />
                <button onClick={() => handleDelete2(index,fileIndex)}>Delete</button>    
                    </>
                )

            })}
            </>):(<>
            <img src={URL.createObjectURL(image[0])} alt={`Image ${index}`} width="150" />
            {/* {console.log(images[index].length)} */}
            <button onClick={() => handleDelete(index)}>Delete</button>
            </>)}
          </div>
        ))}
      </div>
    </div>
        </>
    )
}

export default UplodeMultipleImage;