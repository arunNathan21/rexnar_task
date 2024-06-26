import React, { useState } from 'react';
import {product} from './Data'
import { Nav } from './Nav';



export const Home = () => {
    const data = product;

//    const [productdel, setProductdel] =useState();
   
//     const handleDelete = () => {
//          productdel
//     }
   
    return (
        <>
        <Nav/>

           {
            data.map((value,index)=>(
                
                <>
                
                   <div  key={index}>
                    <div class="card" style={{width: '18rem', display: 'flex'}}>
                        <div class="card-body">
                        <img src={value.image} class="card-img-top" alt="..."/>
                            <h5 class="card-title">{value.name}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Edit</a> 
                            <a href="#" class="btn btn-danger" >Delete</a>

                        </div>
                        </div>
                    </div>
                  
                    
                </>
            ))
           }
        </>
    )
} 