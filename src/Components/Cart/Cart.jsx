import { useContext } from "react";
import { Container } from "./Cart.style";
import { AppContext } from "../Context/AppContext"
import CartItem from "./CartItem";



function Cart() {

   const {cartItems, isVisible} = useContext(AppContext);
   const totalPrice = cartItems.reduce((acc, item)=> item.price + acc, 0)
    return ( 
        <Container isvisible={isVisible}>
         <div className="subContainer">
         {
            cartItems.map((item)=>(
               <CartItem key={item.id}  data={item} id={item.id} />
            ))
         }
         </div>
         <h3>Total: R$ {totalPrice}</h3>
        </Container>
     );
}
 
export default Cart;