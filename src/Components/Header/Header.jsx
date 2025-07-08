/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import  { BiCart } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import Classes from "./Header.module.css"
import LowerHeader from './LowerHeader.jsx';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider.jsx';
import { auth } from '../../Utlity/Firebase.js';

function Header() {

    const [{basket,user},dispach] = useContext(DataContext)
    const totalItem= basket?.reduce((amount,item)=>{
        return item.amount + amount
    },0)
    
    return (
        <section className={Classes.fixed}>
        <>
            <section className={Classes.Header_container}>
                <div className={Classes.logo_container}>
               
                    {/* {logo} */}
                    <Link  onClick={()=>scrollTo(0,0)} to="/"> <img src="/amazon_PNG11.png" alt="" /></Link>
                    {/* {delivery} */}
                    <div  className={Classes.delivery}>
                        <span>
                            <CiLocationOn />

                        </span>
                        <div>
                            <p>delivered to</p>
                            <span>ethiopia</span>
                        </div>
                    </div>
                    </div>
                <div className={Classes.search}>
                    {/* serch  */}
                    <select name="" id="">
                        <option value="">All</option>
                    </select>
                    <input type="text" placeholder='search product' />
                    <FaSearch size={25}/>
                    {/* icon */}

                </div>
                {/* right header */}

                <div className={Classes.order_container}>
                    <Link to="" className={Classes.language}>

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1200px-Flag_of_the_United_States.png" alt="" />

                        <select name="" id="">
                            <option value="">Eng</option>
                        </select>
                        </Link>

                    <Link  onClick={()=>scrollTo(0,0)} to={!user&&"/auth"}>
                        <div>
                            <div>
                                {
                                    user? (<p>Hello <br />{user.email.split("@")[0]} <br /> <span onClick={()=>auth.signOut()}>Sign Out</span></p>) :<><h5>Sign in</h5> <span>Account & Lists</span></>

                                }
                                    
                            
                            </div>
                            
                        </div>
                    </Link>

                    {/* orders */}
                    <Link  onClick={()=>scrollTo(0,0)} to="/orders" >
                        <p>returns</p>
                        <span> & order</span>
                    </Link>
                    {/* cart */}
                    <Link  onClick={()=>scrollTo(0,0)} to="/cart" className={Classes.cart}>
                    <BiCart size={35} />
                        <span>{totalItem}</span>
                    </Link>


                </div>
            </section>
            <LowerHeader/>
        </>
        </section>
    );
}

export default Header
