import React from "react";
import {IoSearchSharp} from "react-icons/io5";
import {HiUser} from "react-icons/hi"; 
import {MdSettings} from "react-icons/md";
import {IoNotifications} from "react-icons/io5";
import person1 from "../../eats/img/table/person1.png";
import person2 from "../../eats/img/table/person2.png";
import person3 from "../../eats/img/table/person3.png";
import person4 from "../../eats/img/table/person4.png";
import person5 from "../../eats/img/table/person5.png";
import person6 from "../../eats/img/table/person6.png";
import icon from "../../eats/img/Icon.png";
import icon1 from "../../eats/img/Icon1.png";
import icon2 from "../../eats/img/Icon2.png";
import icon4 from "../../eats/img/Icon4.png";
import icon5 from "../../eats/img/Icon5.png";
import {BsFillCheckCircleFill} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const malumot = [
    {
        id: 1,
        rasm: person2,
        ism: "Esthera Jackson",
        email:"esthera@simmmple.com",
        job:"Manager",
        where: "Organization",
        date:"14/06/21",
    },
    {
        id: 2,
        rasm: person6,
        ism: "Alexa Liras",
        email:"alexa@simmmple.com",
        job:"Programmer",
        where: "Developer",
        date:"14/06/21",
    },
    {
        id: 3,
        rasm: person1,
        ism: "Laurent Michael",
        email:"laurent@simmmple.com",
        job:"Executive",
        where: "Projects",
        date:"14/06/21",
    },
    {
        id: 4,
        rasm: person4,
        ism: "Freduardo Hill",
        email:"freduardo@simmmple.com",
        job:"Manager",
        where: "Organization",
        date:"14/06/21",
    },
    {
        id: 5,
        rasm: person5,
        ism: "Daniel Thomas",
        email:"daniel@simmmple.com",
        job:"Programmer",
        where: "Developer",
        date:"14/06/21",
    },
    {
        id: 6,
        rasm: person3,
        ism: "Mark Wilson",
        email:"mark@simmmple.com",
        job:"Designer",
        where: "UI/UX Design",
        date:"14/06/21",
    },
]

const malumot2 = [
    {
        id: 1,
        rasm:icon5,
        name:"Chakra Soft UI Version",
        maosh: 14000,
        ishi:"working",
        price:60,
    },
    {
        id: 2,
        rasm:icon,
        name:"Add Progress Track",
        maosh: 3000,
        ishi:"Canceled",
        price:10,
    },
    {
        id: 3,
        rasm:icon4,
        name:"Fix Platform Errors",
        maosh: "No set",
        ishi:"Done",
        price:100,
    },
    {
        id: 4,
        rasm:icon1,
        name:"Launch our Mobile App",
        maosh: 32000,
        ishi:"Done",
        price:100,
    },
    {
        id: 1,
        rasm:icon2,
        name:"Add the New Pricing Page",
        maosh: 400,
        ishi:"working",
        price:25,
    },
]
function Table(){
    const back = useNavigate();
    return (
        <div className="table">
            <div className="header">
                <div className="headerName">
                    <p><span>Pages / </span>Tables</p>
                    <h2>Tables</h2>
                </div>
                <div className="signUp">
                    <div className="search">
                        <IoSearchSharp />
                        <input type="search" placeholder="Type here..."/>
                    </div>
                    <HiUser  className="nav_icons" onClick={(e) => back("/profile")}/>
                    <p className="signIn"  onClick={(e)=> back('/signIn')}>Sign In</p>
                    <MdSettings className="nav_icons" />
                    <IoNotifications className="nav_icons" />
                </div>
            </div>
            <div className="table">
                <table className="table_child">
                    <thead>
                        <h1>Authors Table</h1>
                    </thead>
                    <thead className="thead">
                        <tr>
                            <td>AUTHOR</td>
                            <td>FUNCTION</td>
                            <td>STATUS</td>
                            <td>EMPLOYED</td>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {
                            malumot.map(item => (
                                <> 
                                    <div className="chiziqq"></div>
                                    <tr>
                                        <td>
                                            <img src={item.rasm} alt="" />
                                            <div>
                                                <h2>{item.ism}</h2>
                                                <p>{item.email}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <h2>{item.job}</h2>
                                            <p>{item.where}</p>
                                        </td>
                                        <td>
                                            <div className="status">Online</div>
                                        </td>
                                        <td><b>{item.date}</b></td>
                                        <td><b>item</b></td>
                                    </tr>
                                    <div className="chiziqq"></div>
                                </>
                            ))
                        }
                    </tbody>
                </table>
                <table className="table_child">
                    <thead>
                        <tr>
                            <h1 className="h1">Projects</h1>
                            <p>
                                <BsFillCheckCircleFill className="check" />
                                <b>30 done</b> this month
                            </p>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        <tr>
                            <td>COMPANIES</td>
                            <td>BUDGET</td>
                            <td>STATUS</td>
                            <td>COMPLETION</td>
                            <td></td>
                        </tr>
                        {
                            malumot2.map(item => (
                                <>
                                    <div className="chiziqq"></div>
                                    <tr>
                                        <td>
                                            <img src={item.rasm}/>
                                            <p>{item.name}</p>
                                        </td>
                                        <td>
                                            ${item.maosh}
                                        </td>
                                        <td>
                                            {item.ishi}
                                        </td>
                                        <td>
                                            <p>{item.price}%</p>
                                            <div className="stat_span">
                                                <span></span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="tugma">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </td>
                                    </tr>
                                    <div className="chiziqq"></div>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;