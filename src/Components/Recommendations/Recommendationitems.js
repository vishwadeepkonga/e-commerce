import React  from "react";
import './Recommendations.css'

function Recommendationitems({
    key,
    title,
    description,
    price,
    image
}){
    return(
        <div className="item-container">
         <img src={image}/>
         <div className="item-info">
            <div className="item-title">
                {title}
                </div>
<div className="description">
    {description}

</div>
<div className="footer">
    <div className="price">
${price}
    </div>
    <div className="old-price">$
{price*5}
    </div>

</div>
<div className="footer-button">
    <button className="itemcard-btn btn-secondary">
            Add to wishlist
    </button>
    <button className="itemcard-btn btn-primary">
            Add to cart
    </button>



</div>
            </div>

         </div>

    )
}
export default Recommendationitems