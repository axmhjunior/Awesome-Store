import styled from 'styled-components';




export const Container = styled.div`
    max-width:1200px;
    
    margin:100px auto 0 auto;
    background-color: #fff6e9;

    & .bar{
        text-align: center;
    }
    & .bar div{
        width:70px;
        border-radius: 5px;
        height: 5px;
        background-color: #40a2e3;
        margin:0 auto;
    }
`;
export const Header = styled.header`
    cursor:pointer;
    margin-top:1rem;
    text-align: center;
    width:100%;
    background-color:#fff;
    height: 250px;

    & img{
        width:100%;
        height:100%;
    }
`;
export const CategorieBox = styled.div`
    margin-top: 1rem;
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
    background-color: #fff;
    justify-items:center ;
    
    box-shadow: 0 0 4px 1px;
    height: auto;


    & div {
        width:200px;
        text-align:center;
    }

    & div:hover{
        background-color: #f4f3f7 ;
    }

    & div .categorie {
        margin:2rem auto;
        cursor:pointer;
        background-color: purple;
        border-radius: 50%;
        height: 100px;
        padding:10px;
        width:100px;
        border:1px solid purple;
    }
    &  .categorie img{
        width:100%;
        height: 100%;
    }
`;
