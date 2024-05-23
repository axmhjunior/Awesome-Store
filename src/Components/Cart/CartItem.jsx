import { useContext } from "react";
import { Box } from "./Cart.style";
import {  BsCartDashFill  } from "react-icons/bs";
import { AppContext } from "../Context/AppContext";


function CartItem({data, id}) {
   const {cartItems, setCartItems} = useContext(AppContext);
   const handleDelete = ()=>{
      const update = cartItems.filter((index)=>(index.id != id))
      setCartItems(update)
   }
    return ( 
        <Box>
        <img src={data.thumbnail} alt="" />
        <div className="product_Info">
           <section><p>{data.title}</p></section>
           <section><h3>R$ {data.price}</h3></section>
        </div>
        <button onClick={handleDelete}><BsCartDashFill/></button>
        </Box>
     );
}

export default CartItem;