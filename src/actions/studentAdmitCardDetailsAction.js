// saving student admit card details
import axios from "axios";
const {ADMITCARD_REQUEST,ADMITCARD_SUCCESS,ADMITCARD_FAIL}= require("../constants/studentAdmitCardConstants");
export const register = (
    addmission_id ,
    full_Name ,
    university_RollNo ,
    section_RollNo ,
    fathers_Name ,
  semester ,
  gender ,
  email ,
  Address1,
  Address2,
  city ,
  state ,
  branch ,
  pinCode
) => async(dispatch)=>{
    try{
        dispatch({type:ADMITCARD_REQUEST});
        const config={headers:{"Content-Type" : "application/json"}}
        const {data} = await axios.post(`/api/v1/examform`,{
            addmission_id ,
            full_Name ,
            university_RollNo ,
            section_RollNo ,
            fathers_Name ,
          semester ,
          gender ,
          email ,
          Address1,
          Address2,
          city ,
          state ,
          branch ,
          pinCode
        },config);
        dispatch({type:ADMITCARD_SUCCESS,payload:data});
        console.log(data);
    }catch(error){
        dispatch({
            type:ADMITCARD_FAIL,
            payload:error.response.data.message
        })
    }
  }