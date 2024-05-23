import { useContext } from "react";
import { Container } from "./Style";
import { AppContext } from "../Context/AppContext";

function NotFoundError() {
    const { search } = useContext(AppContext)
    return ( 
        <Container>
            <h2>No results for {search}</h2>
            <h3>Try checking your spelling or use more general terms</h3>
        </Container>
     );
}

export default NotFoundError;