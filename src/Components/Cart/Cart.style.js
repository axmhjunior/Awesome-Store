import styled from 'styled-components';


export const Container = styled.div`
    position:fixed;
    right:0;
    top:0;
    width:100%;
    max-width:300px;
    background-color: #fff;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    height:100vh;
    padding:65px 20px 0 20px;
    transform: translate(110%, ${props => props.isvisible});
    transition: .6s linear; 

    & .subContainer{
        overflow:auto;
    }
`;


export const Box = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom: .2rem;
    align-items: flex-start;
    margin-bottom: 15px;
    border-bottom: 1px solid #ddd;

    & .product_Info{
        display:flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size:14px;
        padding:3px;
        width: 100%;
    }

    & button{
        border:none;
        font-size: 1.3rem;
        color: red;
        cursor:pointer;
    }

    & span{
        font-weight: bold;
    }

    & img{
        width:70px;
    }

&:last-child{
    border-bottom:none;
}
`;