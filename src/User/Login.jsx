
import React ,{useState,useEffect}from 'react'
import "./loginSignUp.css";
import {useDispatch,useSelector} from 'react-redux'
import {userLogin,clearErrors} from "../actions/userActions"
import { useNavigate} from "react-router-dom"
// import {withRouter} from "react-router-dom"     
// import {useAlert} from 'react-alert'
const Login=()=>{


   const history = useNavigate();
    const dispatch = useDispatch();
    const {error ,isAuthenticated} =useSelector(state=>state.user)
    const loginSub=(e)=>{
        e.preventDefault();
        dispatch(userLogin(loginEmail,loginPassword))
        console.log("form submitted");

    }
const [loginEmail,setLoginEmail]=useState("");
const [loginPassword,setLoginPassword]=useState("");


useEffect(() => {
      if(error){
          dispatch(clearErrors());
      }

      if(isAuthenticated){
       history("/start")
      }
  
}, [dispatch,error,isAuthenticated,history]);


    return(
        <>
        <div className='LoginSignUpContainer'>
            
            <div className='LoginSignUpBox'>
               
                <div className='loginContainer'>
                    
                <h2 className='logg'>LOGIN</h2>
                </div>
                <form className='loginform' onSubmit={loginSub}>
                <div className='loginEmail'>
                    <input type="email" placeholder="Email" value={loginEmail} required onChange={(e)=>setLoginEmail(e.target.value)} />
                </div>
                <br/>
                <div className='loginPassword'>
                <input type="password" placeholder="Password" value={loginPassword} required onChange={(e)=>setLoginPassword(e.target.value)}/>
                </div>
                
                <input type='submit' value="login" className="loginbtn" />
                </form>
                
            </div>
        </div>
        </>
    )
}
export default Login;
