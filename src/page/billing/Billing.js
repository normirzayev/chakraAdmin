import React from "react";
import {HiUser} from "react-icons/hi"; 
import {MdSettings} from "react-icons/md";
import {IoSearchSharp} from "react-icons/io5";
import {IoNotifications} from "react-icons/io5";
import {IoWalletOutline} from "react-icons/io5";
import {FaPaypal} from "react-icons/fa";
import {MdEdit} from "react-icons/md";
import {SiVisa} from "react-icons/si";
import {AiFillFileText} from "react-icons/ai";
import {MdDelete} from "react-icons/md";
import {BsCalendarWeek} from "react-icons/bs";
import {HiArrowSmUp} from "react-icons/hi";
import {HiArrowSmDown} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const billi_data = [
    {
        id: 1,
        nomi: "Oliver Liam",
        compName:"Viking Burrito",
        emeil: "oliver@burrito.com",
        number:"FRB1235476"
    },
    {
        id:2,
        nomi: "Oliver Liam",
        compName:"Viking Burrito",
        emeil: "oliver@burrito.com",
        number:"FRB1235476"
    },
    {
        id:3,
        nomi: "Oliver Liam",
        compName:"Viking Burrito",
        emeil: "oliver@burrito.com",
        number:"FRB1235476"
    },
]
const invoic = [
    {
        id:1,
        sana:"March, 01, 2020",
        shtrix: "#MS-415646",
        price:180,
    },
    {
        id:2,
        sana:"February, 10, 2021",
        shtrix: "#RV-126749",
        price:250,
    },
    {
        id:3,
        sana:"April, 05, 2020",
        shtrix: "#FB-212562",
        price:560,
    },
    {
        id:4,
        sana:"June, 25, 2019",
        shtrix: "#QW-103578",
        price:120,
    },
    {
        id:5,
        sana:"March, 01, 2019",
        shtrix: "#AR-803481",
        price:300,
    },
    
]
const transactions1 = [
    {
        id:1,
        daraja: <HiArrowSmDown />,
        company: "Netflix",
        date:"27 March 2020, at 12:30 PM",
        foyda:2500,
    },
    {
        id:2,
        daraja: <HiArrowSmUp />,
        company: "Apple",
        date:"27 March 2020, at 12:30 PM",
        foyda:2500,
    },
];
const transactions2 = [
    {
        id:1,
        daraja: <HiArrowSmUp />,
        company: "Stripe",
        date:"26 March 2020, at 13:45 PM",
        foyda:800,
    },
    {
        id:2,
        daraja: <HiArrowSmUp />,
        company: "HubSpot",
        date:"27 March 2020, at 12:30 PM",
        foyda:1700,
    },
    {
        id:3,
        daraja: <HiArrowSmUp />,
        company: "Webflow",
        date:"26 March 2020, at 05:00 AM",
        foyda:2000,
    },
    {
        id:4,
        daraja: <HiArrowSmDown />,
        company: "Microsoft",
        date:"25 March 2020, at 16:30 PM",
        foyda:2500,
    },
]
function Billing(){
    const back = useNavigate();
    return(
        <div className="billing">
            <div className="header">
                <div className="headerName">
                    <p><span>Pages / </span>Billing</p>
                    <h2>Billing</h2>
                </div>
                <div className="signUp">
                    <div className="search">
                        <IoSearchSharp />
                        <input type="search" placeholder="Type here..."/>
                    </div>
                    <HiUser  className="nav_icons" onClick={(e) => back("/profile")}/>
                    <p className="signIn" onClick={(e)=> back('/signIn')}>Sign In</p>
                    <MdSettings  className="nav_icons" />
                    <IoNotifications className="nav_icons" />
                </div>
            </div>
            <div className="my_card">
                <div className="my_card_left">
                    <div className="my_card_view">
                        <div className="my_card_img">
                            <div className="nav">
                                <p>Purity UI</p>
                                <div className="shafov_doira"><span></span><span></span></div>
                            </div>
                            <h1>7812 2139 0823 XXXX</h1>
                            <div className="sana">
                                <pre>VALID THRU     CVV</pre>
                                <pre>05/24                 09X</pre>
                            </div>
                        </div>
                        <div className="salary">
                            <IoWalletOutline className="card_logo" />
                            <h2>Salary</h2>
                            <p>Belong Interactive</p>
                            <div className="border"></div>
                            <h2>+$2000</h2>
                        </div>
                        <div className="salary">
                            <FaPaypal className="card_logo" />
                            <h2>Paypal</h2>
                            <p>Freelance Payment</p>
                            <div className="border"></div>
                            <h2>$455.00</h2>
                        </div>
                    </div>
                    <div className="addNew_card">
                        <div className="nav">
                            <b>Payment Method</b>
                            <button type="button">ADD A NEW CARD</button>
                        </div>
                        <div className="cards_numbers">
                            <div className="cards_boxer">
                                <div>
                                    <span></span>
                                    <span></span>
                                    <p>7812 2139 0823 XXXX</p>
                                </div>
                                <button>< MdEdit/> </button>
                            </div>
                            <div className="cards_boxer">
                                <div>
                                    <SiVisa className="visa"/>
                                    <p>7812 2139 0823 XXXX</p>
                                </div>
                                <button>< MdEdit/> </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my_card_right">
                    <div className="nav">
                        <p>Invoices</p>
                        <button id="view">VIEW ALL</button>
                    </div>
                   {
                       invoic.map(item => (
                        <div className="nav" key={item.id}>
                            <div>
                                <h1>{item.sana}</h1>
                                <p>{item.shtrix}</p>
                            </div>
                            <div>
                                <span>${item.price}</span>
                                <span><AiFillFileText/>PDF</span>
                            </div>
                        </div>
                       ))
                   }
                </div>
            </div>
            <div className="billing_footer">
                <div className="billing_infor">
                   <h1>Billing Information</h1>
                   {
                       billi_data.map(item => (
                            <div className="billing_boxer" key={item.id}>
                                <li>
                                    <h2>{item.nomi}</h2>
                                    <div className="editor">
                                        <button><MdDelete />delete</button>
                                        <button><MdEdit/>edit</button>
                                    </div>
                                </li>
                                <p>Company Name: <b>{item.compName}</b> </p>
                                <p>Email Address: <b>{item.emeil}</b> </p>
                                <p>VAT Number: <b>{item.number}</b></p>
                            </div>
                       ))
                   }
                </div>
                <div className="transactions">
                   <li>
                       <h1>Your Transactions</h1>
                       <p><BsCalendarWeek /> 23 - 30 March 2020</p>
                   </li>
                   <p>NEWEST</p>
                   {
                       transactions1.map(item => (
                            <div className="nav" key={item.id}>
                                <div className="daraja_infor">
                                    <div className="daraja">
                                        {item.daraja}
                                    </div>
                                    <div>
                                        <h2>{item.company}</h2>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                                <div className="foyda">
                                    ${item.foyda}
                                </div>
                            </div>
                       ))
                   }
                   <p>YESTERDAY</p>
                   {
                       transactions2.map(item => (
                            <div className="nav" key={item.id}>
                                <div className="daraja_infor">
                                    <div className="daraja">
                                        {item.daraja}
                                    </div>
                                    <div>
                                        <h2>{item.company}</h2>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                                <div className="foyda">
                                    ${item.foyda}
                                </div>
                            </div>
                       ))
                   }
                </div>
            </div>
        </div>
    )
}

export default Billing;