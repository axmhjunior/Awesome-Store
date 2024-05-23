import { Link } from "react-router-dom";
import { Container, Form, SubContainer, Tools } from "./Navbar.module";
import {CiSearch  } from 'react-icons/ci';
import {GiShoppingCart  } from 'react-icons/gi';
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import connection from "../Api/connection";



function Navbar() {

  const  { setProduct, setIsVisible, isVisible, setFilter, cartItems } = useContext(AppContext);
  const [search, setSearch] = useState();
  
  const handleIsVisible = ()=>{
      setIsVisible(isVisible === 0 ? 1 : 0);
  }


  const getValue = async (event) => {
    event.preventDefault();
    const data = await connection(search);
    setProduct(data);
    setFilter(search)
    setSearch('');
  }
    return ( 
      <Container>
        <SubContainer>
        <div>
            <button className="menuBttn">M</button>
        <Link to='/'><h1><span>AWE</span>SOME</h1></Link>
        </div>
        <Form onSubmit={getValue} >
            <input type="search"
             placeholder="Search product"
             onChange={({target}) => setSearch(target.value)}
             value={search}             
             required
             />
            <button type="submit">
                <CiSearch/>
            </button>
        </Form>

        <Tools>
          {cartItems.length > 0 ? <p>{cartItems.length}</p> : ""}
        <button onClick={handleIsVisible}>
            <GiShoppingCart/>
        </button>
        </Tools>
        </SubContainer>
      </Container>  
     );
}

export default Navbar;
