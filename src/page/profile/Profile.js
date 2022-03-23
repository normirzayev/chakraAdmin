import React from "react";
import {IoSearchSharp} from "react-icons/io5";
import {HiUser} from "react-icons/hi"; 
import {MdSettings} from "react-icons/md";
import {IoNotifications} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {MdEdit} from "react-icons/md";
import {FiBox} from "react-icons/fi";
import {RiFileCopy2Fill} from "react-icons/ri";
import {IoBuild} from "react-icons/io5";
import {BsFacebook} from "react-icons/bs";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {AiOutlinePlus} from "react-icons/ai";
import unsplash from "../../eats/img/profile/unsplash.png";
import unsplash1 from "../../eats/img/profile/unsplash1.png";
import unsplash2 from "../../eats/img/profile/unsplash2.png";
import unsplash3 from "../../eats/img/profile/unsplash3.png";
import unsplash4 from "../../eats/img/profile/unsplash4.png";
import jorge from "../../eats/img/profile/jorge.png";
import liana from "../../eats/img/profile/liana.png";
import phan from "../../eats/img/profile/phan.png";
import elipse from "../../eats/img/profile/elipse.png";
import elipse2 from "../../eats/img/profile/elipse1.png";
import elipse3 from "../../eats/img/profile/elipse2.png";
import elipse4 from "../../eats/img/profile/elipse3.png";
function Profile(){
    const profile = [
        {
            id: 1,
            img:unsplash1,
            name:"Esthera Jackson" ,
            comment:"Hi! I need more informations...",
        },
        {
            id: 2,
            img:unsplash2,
            name:"Esthera Jackson" ,
            comment:"Awesome work, can you change...",
        },
        {
            id: 3,
            img:unsplash3,
            name:"Esthera Jackson" ,
            comment:"Have a great afternoon...",
        },
        {
            id: 4,
            img:unsplash4,
            name:"Esthera Jackson" ,
            comment:"About files I can...",
        },
    ];
    const profile2 = [
        {
            id: 1,
            img: jorge,
            page:"Project #1",
            name:"Modern",
            about: "As Uber works through a huge amount of internal management turmoil.",
            profile:elipse,
            profile1:elipse2,
            profile2:elipse3,
            profile3:elipse4,
        },
        {
            id: 2,
            img: liana,
            page:"Project #2",
            name:"Scandinavian",
            about: "Music is something that every person has his or her own specific opinion about.",
            profile:elipse,
            profile1:elipse2,
            profile2:elipse3,
            profile3:elipse4,
        },
        {
            id: 3,
            img: phan,
            page:"Project #3",
            name:"Modern",
            about: "Different people have different taste, and various types of music.",
            profile:elipse,
            profile1:elipse2,
            profile2:elipse3,
            profile3:elipse4,
        },
    ];
    const back = useNavigate();
    return(
        <div className="profile">
            <div className="head_header">
                <div className="header">
                    <div className="headerName">
                        <p><span>Pages / </span>Profile</p>
                        <h2>Profile</h2>
                    </div>
                    <div className="signUp">
                        <div className="search">
                            <IoSearchSharp />
                            <input type="search" placeholder="Type here..."/>
                        </div>
                        <HiUser/>
                        <p className="signIn" onClick={(e)=> back('/signIn')}>Sign In</p>
                        <MdSettings  className="nav_icons" />
                        <IoNotifications className="nav_icons" />
                    </div>
                </div>
                <div className="prfile_about">
                    <div className="about_left">
                        <div className="profile_img">
                            <img src={unsplash} />
                            <MdEdit className="editor"/>
                        </div>
                        <div className="profile_name">
                            <h2>Esthera Jackson</h2>
                            <p>esthera@simmmple.com</p>
                        </div>
                    </div>
                    <div className="profile_right">
                        <button> <FiBox /> OVERVIEW</button>
                        <button> <RiFileCopy2Fill /> TEAMS</button>
                        <button> <IoBuild /> PROJECTS</button>
                    </div>
                </div>
            </div>
            <div className="profile_build">
                <div className="profile_sett">
                    <h1>Platform Settings</h1>
                    <p>ACCOUNT</p>
                    <ul>
                        <li>
                            <button><span></span></button>
                            <p>Email me when someone follows me</p>
                        </li>
                        <li>
                            <button><span></span></button>
                            <p>Email me when someone answers on my post</p>
                        </li>
                        <li>
                            <button><span></span></button>
                            <p>Email me when someone mentions me</p>
                        </li>
                        <p>APPLICATION</p>
                        <li>
                            <button><span></span></button>
                            <p>New launches and projects</p>
                        </li>
                        <li>
                            <button><span></span></button>
                            <p>Monthly product updates</p>
                        </li>
                        <li>
                            <button><span></span></button>
                            <p>Subscribe to newsletter</p>
                        </li>
                    </ul>
                </div>
                <div className="profile_infor">
                    <h2>Profile Information</h2>
                    <p>Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                    <div className="border"></div>
                    <ul>
                        
                        <li><b>Full Name: </b> <p>Alec M. Thompson</p></li>
                        <li><b>Mobile:</b> <p>(44) 123 1234 123</p></li>
                        <li><b>Email:</b> <p>alecthompson@mail.com</p></li>
                        <li><b>Location:</b><p>United States</p></li>
                        <li><b>Social Media:</b><BsFacebook className="li_icon"/> <FaTwitter className="li_icon"/> <FaInstagram className="li_icon" /> </li>
                    </ul>
                </div>
                <div className="profiles">
                    <h1>Conversations</h1>
                    {
                        profile.map(item => (
                            <div className="nav" key={item.id}>
                                <div className="profile_person">
                                    <img src={item.img}/>
                                    <div>
                                        <h2>{item.name}</h2>
                                        <p>{item.comment}</p>
                                    </div>
                                </div>
                                <b title="reply">REPLY</b>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="profile_project">
                <h1>Projects</h1>
                <p>Architects design houses</p>
                <div className="profile_boxer">
                    {
                        profile2.map(item => (
                            <div className="profile_box" key={item.id}>
                                <div className="rasm">
                                    <div className="img">
                                        <img src={item.img} />
                                    </div>
                                </div>
                                <p>{item.page}</p>
                                <h1>{item.name}</h1>
                                <li>{item.about}</li>
                                <div className="nav">
                                    <button id="view">VIEW ALL</button>    
                                    <div className="prifile_profile">
                                        <img src={item.profile3} />
                                        <img src={item.profile2} />
                                        <img src={item.profile1} />
                                        <img src={item.profile} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="profile_box2">
                        <AiOutlinePlus />
                        <b>Create a New Project</b>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;