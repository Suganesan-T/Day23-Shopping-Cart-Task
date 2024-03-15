import { useState } from "react"
function Card({product,count,rm}) {
    const[addcart,setAddCart] = useState(true)
    return (
        <div className="col-lg-3">
            <div class="card" style={{ width: "18rem;" }}>
                <img className="image" src={product.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">{product.price}</p>
                    {
                        addcart ? <button onClick={()=>{count();setAddCart(false)}} className="btn btn-primary">Add to Cart</button> 
                        : <button onClick={()=>{rm();setAddCart(true)}} className="btn btn-primary" style={{backgroundColor:"red"}} >Remove From Cart</button>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Card

