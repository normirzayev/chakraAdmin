import React from "react";
import logo  from "../../eats/img/topDownLeft.png";
import {FiCodesandbox}  from "react-icons/fi";
import {HiUser} from "react-icons/hi";
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoKey} from "react-icons/io5";
import {GiElectric} from "react-icons/gi";
import {useNavigate} from "react-router-dom";
function SignIn(){
    const link = useNavigate();
    return(
        <div className="sign">
            <nav>
                <div>
                    <p onClick={(e)=> link("/")}><img src={logo} alt="" /> PURITY UI DASHBOARD</p>
                </div>
                <div> 
                    <p onClick={(e)=> link("/")}><FiCodesandbox/>DASHBOARD</p>
                    <p onClick={(e)=> link("/profile")}><HiUser/>PROFILE</p>
                    <p onClick={(e)=> link("/signUp")}><HiOutlineUserCircle/>SIGN UP</p>
                    <p><IoKey/>SIGN IN</p>
                </div>
                <a href="#" download="#">Free Download</a>
            </nav>
            <form action="#">
                <h1>Welcome Back</h1>    
                <p>Enter your email and password to sign in</p>
                <label htmlFor="#">Email</label>
                <input type="email" placeholder="Your email address"/>
                <label htmlFor="#">Password</label>
                <input type="password" placeholder="Your password"/>
                <div className="chek">
                    <div className="chekked">
                        <span></span>
                    </div>
                    <label htmlFor="#">Remember me </label>
                </div>
                <input type="button"  value="SIGN IN" />
                <h2>Don't have an account? <a href="#">Sign up</a></h2>
            </form>
            <div className="chakra2">
                <GiElectric />
                <h2>chakra</h2>
            </div>
        </div>
    )
}

export default SignIn;