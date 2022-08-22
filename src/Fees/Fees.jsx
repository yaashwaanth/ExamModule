import React,{ useEffect, useState } from 'react'
import "./Fees.css"
import { Link } from "react-router-dom";
import ImageUploadPreviewComponent from "../ImagePrev/ImageUploadPreviewComponent"
export var op,op2



export default function Fees() {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [fi, setFi] = useState([]);
    //var op,op2
    var img=[]
    var i=0;
    function addphoto( temp){
i++
setFi(temp)
setFile(temp)

    }
    function addphoto1( temp){
      i++
      
      setFile(temp)
      
          }
    useEffect(() => {
      let fileReader, isCancel = false;
      if (file) {
        fileReader = new FileReader();
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result && !isCancel) {
            setFileDataURL(result)
            
          }
        }
        fileReader.readAsDataURL(file);
      }
      return () => {
        isCancel = true;
        if (fileReader && fileReader.readyState === 1) {
          fileReader.abort();
        }
      }
      
    }, [file]);
    
op=fi
op2=file
  console.log(fi)
  console.log("hi")
  console.log(file)
  return (
    <div>
      <div className="cardo">
<div className="imin">
<ImageUploadPreviewComponent data={addphoto}/>  
  </div>  
  
  <div className="imin2">
<ImageUploadPreviewComponent data={addphoto1}/>  
  </div> 

 

 <Link to="/Admit">
              <button class="btn btn-outline-dark but"   type="submit">
                Next
              </button>
              </Link>
      </div>
     
    </div>
  )
}
