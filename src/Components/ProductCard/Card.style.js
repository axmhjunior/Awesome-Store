import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    gap:10px;
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
    justify-items: center;
    align-items: center; 
    font-size:14px;
 


    & .product{
        box-shadow: 0 0 3px 0;
        display:flex;
        flex-direction: column ;
        justify-content: space-between;
        width: 225px;
        padding: 10px;
        height: 365px;
        background-color: #fff;
        text-align: center;
    }

    & .image{
        width: 100%;
        height: 200px;
        border-bottom: 1px solid #ddd;
    }

    & .product div{
        padding: 10px;
        background-color:#fff;
        text-align: center;
    }

    & img{
        height: 100%;
        width: 100%;        
    }

    & .infoProduct{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    & .cart{
        color:red;
        text-align: center;
        font-size: 1.2rem;
        width:70px;
    }

    & .cart:hover{
        color: #fff;
    }

`;