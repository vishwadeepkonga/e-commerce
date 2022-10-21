import React from "react";
import Recommendationitems from './Recommendationitems'
import './Recommendationitem.css'

const RecommendationData=[
    {
        id:5,
        image:'https://m.media-amazon.com/images/I/91BSflfKpJL._AC_SS450_.jpg',
        description:'Jabra Elite 3 in Ear True Wireless Earbuds Noise Isolating with 4 Built-in Microphones for Clear Calls',
        title:'phone',
        price:1000
    
    },
    {
        id:5,
        image:'https://m.media-amazon.com/images/I/91BSflfKpJL._AC_SS450_.jpg',
        description:'Jabra Elite 3 in Ear True Wireless Earbuds Noise Isolating with 4 Built-in Microphones for Clear Calls',
        title:'phone',
        price:1000
    
    },
    {
        id:5,
        image:'https://m.media-amazon.com/images/I/91BSflfKpJL._AC_SS450_.jpg',
        description:'Jabra Elite 3 in Ear True Wireless Earbuds Noise Isolating with 4 Built-in Microphones for Clear Calls',
        title:'phone',
        price:1000
    
    },
    {
        id:5,
        image:'https://m.media-amazon.com/images/I/91BSflfKpJL._AC_SS450_.jpg',
        description:'Jabra Elite 3 in Ear True Wireless Earbuds Noise Isolating with 4 Built-in Microphones for Clear Calls',
        title:'phone',
        price:1000
    
    },
    {
        id:5,
        image:'https://m.media-amazon.com/images/I/91BSflfKpJL._AC_SS450_.jpg',
        description:'Jabra Elite 3 in Ear True Wireless Earbuds Noise Isolating with 4 Built-in Microphones for Clear Calls',
        title:'phone',
        price:1000
    
    },
    {
        id:5,
        image:'https://m.media-amazon.com/images/I/91BSflfKpJL._AC_SS450_.jpg',
        description:'Jabra Elite 3 in Ear True Wireless Earbuds Noise Isolating with 4 Built-in Microphones for Clear Calls',
        title:'phone',
        price:1000
    
    },
    {
        id:5,
        image:'https://m.media-amazon.com/images/I/91BSflfKpJL._AC_SS450_.jpg',
        description:'Jabra Elite 3 in Ear True Wireless Earbuds Noise Isolating with 4 Built-in Microphones for Clear Calls',
        title:'phone',
        price:1000
    
    },
    {
        id:5,
        image:'https://m.media-amazon.com/images/I/91BSflfKpJL._AC_SS450_.jpg',
        description:'Jabra Elite 3 in Ear True Wireless Earbuds Noise Isolating with 4 Built-in Microphones for Clear Calls',
        title:'phone',
        price:1000
    
    },
    


]

function Recommendations(){

    return(
        <div className="container">
            <div className="header">
            Recommendations

            </div>
            <div className="list">
                {
RecommendationData.map(item =>
    <Recommendationitems
    key={item.id}
    title={item.title}
    image={item.image}
    description={item.description}
    price={item.price}/>)
                }

            </div>
        </div>
    )
}
export default Recommendations  