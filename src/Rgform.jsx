import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import Home from "./Home/home";
import "./rgcss.css";
import { useNavigate } from "react-router-dom";
import { register } from "./actions/studentAdmitCardDetailsAction";

const Rgfrom =()=>{
 const dispatch= useDispatch();
 const history = useNavigate();


const {saved,loading}=useSelector(state=>state.admitCardDetails);

  const [student,setStudent]=useState({
    addmission_id : "" ,
    full_Name : "" ,
    university_RollNo : "" ,
    section_RollNo : "" ,
    father_Name : "" ,
    semester : "" ,
    gender : "" ,
    email : "" ,
    Address1:"",
    Address2:"",
    city : "" ,
    state : "" ,
    branch : "" ,
    pinCode : "" ,
  });

  const {
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
  pinCode }
  =student;

  const dont=(e)=>{
    console.log(e.target.value);
    setStudent({...student,[e.target.name]:e.target.value})
}

  const examFromSubmit=(e)=>{
    e.preventDefault();

    // const myFrom = new FormData();
    // myFrom.set("addmission_id",addmission_id);
    // myFrom.set("full_Name",full_Name);
    // myFrom.set("university_RollNo",university_RollNo);
    // myFrom.set("section_RollNo",section_RollNo);
    // myFrom.set("fathers_Name",fathers_Name);
    // myFrom.set("semester",semester);
    // myFrom.set("gender",gender);
    // myFrom.set("email",email);
    // myFrom.set("Address1",Address1);
    // myFrom.set("Address2",Address2);
    // myFrom.set("city",city);
    // myFrom.set("state",state);
    // myFrom.set("branch",branch);
    // myFrom.set("pinCode",pinCode);
    dispatch(register( 
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
    pinCode));


  }

 
  useEffect((error) => {
    if(saved){
      alert("Please Take Your Fees Reciept to the Class Incharge to download AdmitCard")
      history("/")
    }
  
  }, [dispatch,saved]);
  

  return(
    
<div>
<Home/>
<div className="form_container">
  <form className="examForm"
  onSubmit={examFromSubmit}
  >

 <div className="addmission_id">
   <input
    required
    type="text"
    placeholder="Admission ID"
    name="addmission_id"
    value={student.addmission_id}
    onChange={dont}
   />
 </div>
 
 <div className="fullName">
   <input
    required
    type="text"
    placeholder="Full Name"
    name="full_Name"
    value={student.full_Name}
    onChange={dont}
   />
 </div>

 <div className="universityRollNumber">
   <input
    required
    type="text"
    placeholder="University Roll No"
    name="university_RollNo"
    value={student.university_RollNo}
    onChange={dont}
   />
 </div>

 <div className="sectionRollNumber">
   <input
    required
    type="number"
    placeholder="Section RollNo"
    name="section_RollNo"
    value={student.section_RollNo}
    onChange={dont}
   />

 </div>

 <div className="fathersName">
   <input
    required
    type="text"
    placeholder="Father Name"
    name="fathers_Name"
    value={student.fathers_Name}
    onChange={dont}
   />
 </div>

 <div className="semester">
  <label>Semester: </label>
  <select name="semester" value={student.semester} id="" onChange={dont}>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
  </select>
 </div>


 <div className="gender">
  <label>Gender : </label>
  <select name="gender" value={student.gender} id="" onChange={dont}>
    <option>Male</option>
    <option>Female</option>
  </select>
 </div>
 
 <div className="email">
   <input
    required
    type="email"
    placeholder="Email"
    name="email"
    value={student.email}
    onChange={dont}
   />
 </div>

 <div className="address1">
   <input
    required
    type="text"
    placeholder="Address"
    name="Address1"
    value={student.Address1}
    onChange={dont}
   />
 </div>

 <div className="address2">
   <input
    required
    type="text"
    placeholder="Address"
    name="Address2"
    value={student.Address2}
    onChange={dont}
   />
 </div>

 <div className="city">
   <input
    required
    type="text"
    placeholder="City"
    name="city"
    value={student.city}
    onChange={dont}
   />
 </div>

 <div className="state">
 <label>State : </label>
  <select  name="state" value={student.state} id="" onChange={dont}>
  <option selected >Choose...</option>
  <option>Andhra Pradesh</option>
  <option>Arunachal Pradesh</option>
  <option>Assam</option>
  <option>Bihar</option>
  <option>Chattisgarh</option>
  <option>Goa</option>
  <option>Gujarat</option>
  <option>Haryana</option>
  <option>Himachal Pradesh</option>
  <option>Jammu and Kashmir</option>
  <option>Jharkhand</option>
  <option>Karnataka</option>
  <option>Kerala</option>
  <option>Madhya Pradesh</option>
  <option>Maharashtra</option>
  <option>Manipur</option>
  <option>Meghalaya</option>
  <option>Mizoram</option>
  <option>Nagaland</option>
  <option>Odisha</option>
  <option>Punjab</option>
  <option>Rajasthan</option>
  <option>Sikkim</option>
  <option>Tamil Nadu</option>
  <option>Telangana</option>
  <option>Tripura</option>
  <option>Uttar Pradesh</option>
  <option>Uttarakhand</option>
  <option>West Bengal</option>
  </select>
 </div>

 <div className="CourseType">
  <label>Course Type : </label>
  <select  name="branch" value={student.branch} id="" onChange={dont}>
  <option selected>Choose...</option>
  <option>Architecture</option>
  <option>B.Pharma Pradesh</option>
  <option>IT</option>
  <option>Mechanical</option>
  <option>CSE</option>
  </select>
 </div>

 <div className="pinCode">
   <input
    required
    type="number"
    placeholder="PinCode"
    name="pinCode"
    value={student.pinCode}
    onChange={dont}
   />
 </div>

<input type="submit" value="Register" className="subBtn"></input>
  </form>
</div>
</div>
  )
}

export default Rgfrom;