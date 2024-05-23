import { Container } from "./home.style";
import { useEffect, useContext } from "react";
import Card from "../../ProductCard/Card";
import connection from "../../Api/connection";
import { AppContext } from "../../Context/AppContext";
import CategoriesBttn from "../../Filter/CategoriesBttn";




function Home() {

    const {product,setProduct, filter} = useContext(AppContext)
    

    useEffect(()=>{
        connection('iphone').then(response=>setProduct(response))
    }, [])

    return (
    <Container>
        <CategoriesBttn/>
        <br />
        <div className="bar">
            <h2>{filter}</h2>
            <div></div>
        </div>
        <br /><br />
        <Card data={product}/>
    </Container>

     );
}

export default Home;