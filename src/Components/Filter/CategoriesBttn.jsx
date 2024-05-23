import { useContext } from "react";
import { Button } from "../../GlobalStyle";
import {  Container  } from "./categoriesBttn.style"
import { AppContext } from "../Context/AppContext";
import connection from "../Api/connection";

function CategoriesBttn() {
    const {setFilter, setProduct} = useContext(AppContext);

    const filter = async (value)=>{
        {if(value === "Todos Produtos"){setFilter("All Products")}
        else if(value === "Carro"){setFilter("Car")}
        else if(value === "Electronico"){setFilter("Electronic")}
        else{setFilter(value)}
        }
        

       
        const update = await connection(value);
        setProduct(update);
        
    }
    return ( 
        <Container>
            <Button onClick={()=>filter("Todos Produtos")}>All Products</Button>
            <Button onClick={()=>filter("Women's Clothing")}>Women's Clothing</Button>
            <Button onClick={()=>filter("Men's Clothing")}>Men's Clothing</Button>
            <Button onClick={()=>filter("Carro")}>Cars</Button>
            <Button onClick={()=>filter("Cell Phones")}>Cell Phones</Button>
            <Button onClick={()=>filter("Electronico")}>Electronics</Button>
        </Container>
     );
}

export default CategoriesBttn;