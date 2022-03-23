import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import tepPast from "../eats/img/topDownLeft.png";
import { IoHome } from 'react-icons/io5';
import {IoIosStats} from "react-icons/io";
import {BsFillCreditCardFill} from "react-icons/bs"
import {IoBuild} from "react-icons/io5";
import {HiUser} from "react-icons/hi"; 
import {CgFile} from "react-icons/cg";
import {IoRocketSharp} from "react-icons/io5";
import {BiHelpCircle} from "react-icons/bi";
import Dashboard from "../page/dashboard/Dashboard";
import Table from "../page/tables/Table";
import Billing from "../page/billing/Billing";
import Profile from "../page/profile/Profile";
import SignIn from "../page/signIn/SignIn";
function Main() {
    return(
        <div className="main">
            <Router>
                <div className="navlink">
                    <Link to="/"><img src={tepPast}/> PURITY UI DASHBOARD </Link>
                    <ul>
                        <li>
                            <NavLink to="/" activeclassname="selected"> <IoHome id="icon" activeclassname="selected"/> Dashboard </NavLink>
                        </li>
                        <li>
                            <NavLink to="/table"> <IoIosStats id="icon" /> Table </NavLink>
                        </li>
                        <li>
                            <NavLink to="/billing"> <BsFillCreditCardFill id="icon"/>  Billing </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rtl"> <IoBuild id="icon"/> RTL </NavLink>
                        </li>
                        <p>ACCOUNT PAGES</p>
                        <li>
                            <NavLink to="/profile"> <HiUser id="icon"/>  Profile </NavLink>
                        </li>
                        <li>
                            <NavLink to="/signIn"> <CgFile id="icon"/> Sign In </NavLink>
                        </li>
                        <li>
                            <NavLink to="/signUp"> <IoRocketSharp id="icon" />  SignUp </NavLink>
                        </li>
                    </ul>
                    <div className="card">
                        <BiHelpCircle id="icon_sorov" />
                        <h2>Need help?</h2>
                        <p>Please check our docs</p>
                        <button>DOCUMENTATION</button>
                    </div>
                </div>
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Dashboard />}/>
                        <Route path="/table" element={<Table />}/>
                        <Route path="/billing" element={<Billing />} />
                        <Route path="profile" element={<Profile />} /> 
                        <Route path="signIn" element={<SignIn />} /> 
                    </Routes>
                </div>
            </Router>
        </div>
    )
}
export default Main;