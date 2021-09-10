import styled from 'styled-components'

export const ContainerLogin = styled.div`
    width: 100%;
    height: 100%;

    display:flex;
    justify-content: center;
    align-items: center;    
    font-family: "Helvetica";

    background-color:#F8F8FF;
    border:1px solid #FFFAFA  


`;

export const LoginCenter = styled.div`
    width: 30%;
    height: 30%;
    border:2px solid #000;
    border-radius:10px;
    margin:20px;

    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2{
        font-size:50px;
        font-weight: 900;
    }

    input{
        margin:10px;
        border:1px solid #fff;
        border-radius:10px;
        padding:15px;
    }
`;

export const ContainerButton = styled.div`
   

    margin:20px 0 20px 0;

    font-size:12px;
    font-weight:bold;
    font-family: "Helvetica";
    border-radius:2px; 

    background-color:#F8F8FF;
    cursor: pointer;

    

    
`