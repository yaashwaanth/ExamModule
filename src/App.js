import Header from './fronPage/Head';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from "./User/Login"
import Home from './Home/home';
import Rgform from './Rgform';
import Admit from './Admit/Admit'
import {useState} from "react"
import Fees from "./Fees/Fees"
// import createHistory from 'history/createBrowserHistory'
import { createHashHistory } from 'history'
export const history = createHashHistory();

function App() {
  const [duser,dsetuser]=useState({
    dadid:"",dfullname:"",dUniversityroll:"",dSectionroll:"",dSemester:"",dGender:"",dEmail:"",dAddress1:"",dAddress2:"",dCity:""
,dStates:"",dBranch:"",dZip_Code:"" ,dfather:"" })
  function form(  adid,fullname,Universityroll,Sectionroll,Semester,Gender,Email,Address1,Address2,City,States,Branch,Zip_Code,father)
  {
   dsetuser({...duser,dadid:adid,dfullname:fullname,dUniversityroll:Universityroll,dSectionroll:Sectionroll,dSemester:Semester,dGender:Gender,dAddress1:Address1,dAddress2:Address2,
    dCity:City,dStates:States,dBranch:Branch,dZip_Code:Zip_Code,dfather:father})
  }
  return (
    <>
    <Router>
      <Routes>

    <Route exact path="/" element={ <Header/>}/>
    <Route exact path="/login" element={<Login/>} /> 
    <Route exact path="/start" element={<Home />}/> 
    <Route exact path="/examform" element={<Rgform fdata={form}/>} /> 
    <Route path="/Fees" element={<Fees/> } />

    <Route exact path="/admit" element={<Admit ddata={duser}/>} /> 
    </Routes>
    </Router>
    </>
  );
}

export default App;
