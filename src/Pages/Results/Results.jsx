// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ProductUrl } from '../../Api/EndPiont'
import ProductCard from '../../Components/product/ProductCard'
import classes from './Results.module.css'
import Loader from '../../Components/Loader/Loader'

function Results() {
    const[results, setResults] = useState([])
  const[isLoading,setisLoading]=useState(false)
    const{catagoryName}=useParams()
    useEffect(()=>{
       setisLoading(true)
        axios.get(`${ProductUrl}/products/category/${catagoryName}`)
        .then((res)=>{
           setResults(res.data)
           setisLoading(false)
        }).catch((err)=>{
            console.log(err)
            setisLoading(false)
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <LayOut>
        {
            isLoading?(<Loader/>):(
                <div>
    <h1 style={{padding:'30px'}}>Results</h1>
    <p style={{padding:'30px'}} >Category / {catagoryName}</p>
    <hr />

    <div className={classes.products_container}>

        {

            results?.map((product)=>{
                return <div key={product.id} >
                    <ProductCard 
                    addtocart={true}
                product={product}/>
                </div>
            })
        }
    </div>
    </div>


            )
        }
    
    </LayOut>
  )
}

export default Results
