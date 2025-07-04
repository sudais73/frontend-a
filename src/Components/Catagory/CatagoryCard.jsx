/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import classes from "./Catagory.module.css"
import { Link } from 'react-router-dom'
// import { ProductUrl } from '../../Api/EndPiont'





function CatagoryCard ({data}){
    return (
        <section className={classes.catagory}>
            <Link to={`/category/${data.name}`}>
                <span><h4>{data.title}</h4>
                </span>
                <img src={data.imageLink} alt="" />
                <p>shop now</p>
            </Link>
            </section>
    )
}

export default CatagoryCard
