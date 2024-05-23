import { useContext } from "react";
import { Container } from "./Card.style";
import { AppContext } from "../Context/AppContext";
import { Button } from "../../GlobalStyle";
import {  BsCartDashFill  } from "react-icons/bs";


function Card({data}) {
    
    const {cartItems, setCartItems} = useContext(AppContext);

    const handleCart = (id, index) =>{
        const element = cartItems.find((item)=> item.id === index)
        {if(element){
            const update = cartItems.filter((itemCart)=> itemCart.id != index)
            setCartItems(update)
        }else{
            setCartItems([...cartItems, data[id]]);
        }
            
        }

        
    }
    return ( 
        < Container>  
        {
    data.map((item, index)=>(
        <div className= "product" key={item.id}>
            <div className="image">
            <img src={item.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="" />
            </div>
            
            <div className ="infoProduct">
            <p>{item.title}</p>
            <h3>R$ {item.price}</h3> <br />
            <Button onClick={()=>handleCart(index, item.id)}>
                {
                    cartItems.some((value)=> value.id === item.id) ? (<BsCartDashFill className="cart"/>) : ("Buy Now") 
                }
            </Button>
            </div>
        </div>
        ))}
    </Container>
     );
}

export default Card;
