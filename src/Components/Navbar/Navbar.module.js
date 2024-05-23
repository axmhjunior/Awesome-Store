import styled from 'styled-components';

export const Container = styled.div`
    background-color: #272829;
    position:fixed ;
    top:0;
    z-index: 1;
    width:100%;
    & div .menuBttn{
        display:none;
    }

    & span{
        color: #40a2e3;
    }

    & a{
        color:#1b3c73;
        text-decoration: none;
    }

    & button{
        cursor: pointer;
        color: #fff;
    }
    
  
`;

export const SubContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`;

export const Form = styled.form`
    display:flex;
    width:50%;
    & input{
        border-radius: .3rem;
        padding:.5em;
        flex-grow:1;
        width:100%;
        border:1px splid #000;
        outline: none;
    }

    & button{
        background-color: #40a2e3;
        margin-left:.2rem;
        font-size: 15px;
        border-radius: .5em;
        padding: 2px 10px;
        border:1px solid #40a2e3;
    }

`;

export const Tools = styled.div`
    & button{
        font-size: 25px;
        background: none;
        border:none;
    }

    & p{
        position:relative;
        top:5px;
        width:15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        margin-left:6px;
        font-size:10px;
        text-align: center;
        color:#fff;
    }

`;
