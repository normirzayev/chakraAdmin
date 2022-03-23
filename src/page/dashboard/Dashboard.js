import React from "react";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import {IoSearchSharp} from "react-icons/io5";
import {HiUser} from "react-icons/hi"; 
import {MdSettings} from "react-icons/md";
import {IoNotifications} from "react-icons/io5";
import {IoWalletOutline} from "react-icons/io5";
import {AiOutlineGlobal} from "react-icons/ai"
import {FaRegFileAlt} from "react-icons/fa";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import {GiElectric} from "react-icons/gi";
import {IoRocketSharp} from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import {BsFillCheckCircleFill} from "react-icons/bs";
import icon from "../../eats/img/Icon.png";
import icon1 from "../../eats/img/Icon1.png";
import icon2 from "../../eats/img/Icon2.png";
import icon3 from "../../eats/img/Icon3.png";
import icon4 from "../../eats/img/Icon4.png";
import icon5 from "../../eats/img/Icon5.png";
import avatar from "../../eats/img/avatar.png";
import { DiCss3 } from "react-icons/di";
import {BsFillCreditCardFill} from "react-icons/bs";
import {AiOutlineDropbox} from "react-icons/ai";
import {SiAdobexd} from "react-icons/si";
import { useNavigate } from "react-router-dom";
function Dashboard(){
    const back = useNavigate();
    return(
        <div className="dashboard">
            <div className="header">
                <div className="headerName">
                    <p><span>Pages</span> / Dashboard</p>
                    <h2>Dashboard</h2>
                </div>
                <div className="signUp">
                    <div className="search">
                        <IoSearchSharp />
                        <input type="search" placeholder="Type here..."/>
                    </div>
                    <HiUser className="nav_icons" onClick={(e) => back("/profile")} />
                    <p className="signIn" onClick={(e)=> back('/signIn')}>Sign In</p>
                    <MdSettings className="nav_icons" />
                    <IoNotifications className="nav_icons"/>
                </div>
            </div>
            <div className="inforUsers">
                <div className="inforUser_boxer">
                    <div className="userBoxer_text">
                        <span>Today's Money</span>
                        <p>$53,000 <span>+55%</span></p>
                    </div>
                    <div className="userBoxer_img">
                        <IoWalletOutline className="icon1" />
                    </div>
                </div>
                <div className="inforUser_boxer">
                    <div className="userBoxer_text">
                        <span>Today's Users</span>
                        <p>$2,300 <span>+5%</span></p>
                    </div>
                    <div className="userBoxer_img">
                        <AiOutlineGlobal className="icon1" />
                    </div>
                </div>
                <div className="inforUser_boxer">
                    <div className="userBoxer_text">
                        <span>New Clients</span>
                        <p>$3,052 <span>-14%</span></p>
                    </div>
                    <div className="userBoxer_img">
                        <FaRegFileAlt  className="icon1"/>
                    </div>
                </div>
                <div className="inforUser_boxer">
                    <div className="userBoxer_text">
                        <span>Total Sales</span>
                        <p>$173,000 <span>+8%</span></p>
                    </div>
                    <div className="userBoxer_img">
                        <AiOutlineShoppingCart className="icon1" />
                    </div>
                </div>
            </div>
            <div className="developers">
                <div className="build_developer">
                    <div className="build_left">
                        <p>Built by developers</p>
                        <h2>Purity UI Dashboard</h2>
                        <p>From colors, cards, typography to complex elements, you will find the full documentation.</p>
                        <button>Read More <AiOutlineArrowRight/> </button>
                    </div>
                    <div className="build_right">
                            <GiElectric  className="electr"/> 
                            <h2>chakra</h2>
                    </div>            
                </div>
                <div className="developer_father">
                    <div className="developer_img">
                        <div className="opcity">
                            <h2>Work with the Rockets</h2>
                            <p>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
                            <button>Read More <AiOutlineArrowRight/> </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user_statis">
                <div className="active_users">
                    <Chart1 />
                    <h2>Active Users</h2>
                    <p><span>(+23)</span> than last week</p>
                    <div className="mini_infor">
                        <div className="mini_infor_boxer">
                            <div className="iconName">
                                <IoWalletOutline  className="mini_icon" />
                                <p>Users</p>
                            </div>
                            <h1>32,984</h1>
                            <div className="stat_spann">
                                <span></span>
                            </div>
                        </div>
                        <div className="mini_infor_boxer">
                            <div className="iconName">
                                <IoRocketSharp  className="mini_icon"/>
                                <p>Clicks</p>
                            </div>
                            <h1>2,42m</h1>
                            <div className="stat_spann">
                                <span></span>
                            </div>
                        </div>
                        <div className="mini_infor_boxer">
                            <div className="iconName">
                                <AiOutlineShoppingCart  className="mini_icon"/>
                                <p>Sales</p>
                            </div>
                            <h1>2,400$</h1>
                            <div className="stat_spann">
                                <span></span>
                            </div>
                        </div>
                        <div className="mini_infor_boxer">
                            <div className="iconName">
                                <IoBuild  className="mini_icon"/>
                                <p>Items</p> 
                            </div>
                            <h1>320</h1>
                            <div className="stat_spann">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sales_overiew">
                    <h1>Sales overview</h1>
                    <p><span>(+5) more </span>in 2021</p>
                    <Chart2 />
                </div>
            </div>
            <div className="dashboard_footer">
                <div className="project">
                    <div className="project_nav">
                        <h1>Projects</h1>
                        <li><span></span><span></span><span></span></li>
                    </div>
                    <p>
                        <BsFillCheckCircleFill className="check" />
                        <p><b>30 done</b> this month</p>
                    </p>
                    <table>
                        <ul>
                            <li>COMPANIES</li>
                            <li>MEMBERS</li>
                            <li>BUDGET</li>
                            <li>COMPLETION</li>
                        </ul>
                        <ul>
                            <li>
                                <div>
                                    <img src={icon5}  className="icon_logo"/>
                                    <span>Chakra Soft UI Version</span>
                                </div>
                                <div className="table_rasm">
                                    <img src={avatar} alt="" />
                                    <img src={avatar} alt="" />
                                    <img src={avatar} alt="" />
                                    <img src={avatar} alt="" />
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="narx">
                                    $14,000
                                </div>
                                <div>
                                    <p>60%</p>
                                    <div className="stat_span">
                                        <span></span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={icon}  className="icon_logo"/>
                                    <span>Add Progress Track</span>
                                </div>
                                <div className="table_rasm">
                                    <img src={avatar} alt="" />
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="narx">
                                    $3,000
                                </div>
                                <div>
                                    <p>60%</p>
                                    <div className="stat_span">
                                        <span></span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={icon4} className="icon_logo" />
                                   <span>Fix Platform Errors</span>
                                </div>
                                <div className="table_rasm">
                                    <img src={avatar} alt="" />
                                    <img src={avatar} alt="" />
                                </div>
                                <div  className="narx">
                                    Not set
                                </div>
                                <div>
                                    <p>60%</p>
                                    <div className="stat_span">
                                        <span></span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={icon1}  className="icon_logo"/>
                                    <span>Launch our Mobile App</span>
                                </div>
                                <div className="table_rasm">
                                    <img src={avatar} alt="" />
                                    <img src={avatar} alt="" />
                                    <img src={avatar} alt="" />
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="narx">
                                    $32,000
                                </div>
                                <div>
                                    <p>60%</p>
                                    <div className="stat_span">
                                        <span></span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={icon2}  className="icon_logo"/>
                                    <span>Add the New Pricing Page</span>
                                </div>
                               <div className="table_rasm">
                                    <img src={avatar} alt="" />
                                    <img src={avatar} alt="" />
                                    <img src={avatar} alt="" />
                                    <img src={avatar} alt="" />
                                    <img src={avatar} alt="" />
                               </div>
                               <div className="narx"> 
                                    $400
                               </div>
                               <div>
                                    <p>60%</p>
                                    <div className="stat_span">
                                        <span></span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={icon3} className="icon_logo" />
                                    <span>Redesign New Online Shop</span>
                                </div>
                                <div className="table_rasm">
                                    <img src={avatar} alt="" />
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="narx">
                                    $7,600
                                </div>
                                <div>
                                    <p>60%</p>
                                    <div className="stat_span">
                                        <span></span>
                                    </div>
                                </div>
                            </li>
                        </ul>    
                    </table>
                </div>
                <div className="order_over">
                    <h1>Orders overview</h1>
                    <p><span>+30%</span> this month</p>
                    <div className="order_boxer">
                        <div  className="boxer_child">
                            <IoNotifications className="natifi iconNaifi"/>
                            <p>$2400, Design changes</p>
                        </div>
                        <div className="chiziq_father">
                            <div className="chiziq"></div>
                            <p>22 DEC 7:20 PM</p>
                        </div>
                    </div>
                    <div className="order_boxer">
                        <div className="boxer_child">
                            <DiCss3 className="css iconNaifi"/>
                            <p>New order #4219423</p>
                        </div>
                        <div className="chiziq_father">
                            <div className="chiziq"></div>
                            <p>22 DEC 7:20 PM</p>
                        </div>
                    </div>
                    <div className="order_boxer">
                        <div className="boxer_child">
                            <AiOutlineShoppingCart className="karzina iconNaifi"/>
                            <p>Server Payments for April</p>
                        </div>
                        <div className="chiziq_father">
                            <div className="chiziq"></div>
                            <p>22 DEC 7:20 PM</p>
                        </div>
                    </div>
                    <div className="order_boxer">
                        <div className="boxer_child">
                            <BsFillCreditCardFill className="card iconNaifi"/>
                            <p>New card added for order #3210145</p>
                        </div>
                        <div className="chiziq_father">
                            <div className="chiziq"></div>
                            <p>22 DEC 7:20 PM</p>
                        </div>
                    </div>
                    <div className="order_boxer">
                        <div className="boxer_child">
                            <AiOutlineDropbox className="drop iconNaifi"/>
                            <p>Unlock packages for Development</p>
                        </div>
                        <div className="chiziq_father">
                            <div className="chiziq"></div>
                            <p>22 DEC 7:20 PM</p>
                        </div>
                    </div>
                    <div className="order_boxer">
                        <div className="boxer_child">
                            <SiAdobexd className="xd iconNaifi"/>
                            <p>New order #9851258</p>
                        </div>
                        <div className="chiziq_father">
                            <div className="chiziq"></div>
                            <p>22 DEC 7:20 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;