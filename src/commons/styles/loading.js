import styled, {keyframes} from 'styled-components';

export const WrapperLoading = styled.div `
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    grid-column:1/3;
` 
const cascade = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-250%); 
        }
    30%,
    60% {
        opacity: 1;
            transform: translateY(0); 
        }
    100% {
        opacity: 0;
            transform: translateY(250%); 
        } 
`
export const Loading = styled.div`
    --primary: #ddd;
    height: 20px;
    display: grid;
    grid-template-columns: repeat(5, 20px);
    grid-gap: 5px;
    & div {
        background:var(--primary);

    }
    & div:nth-child(1) {
        animation: ${cascade} 1.5s 0.15s ease infinite backwards; 
    }
    & div:nth-child(2) {
        animation: ${cascade} 1.5s 0.3s ease infinite backwards;
    }
    & div:nth-child(3) {
        animation: ${cascade} 1.5s 0.45s ease infinite backwards; 
    }
    & div:nth-child(4) {
        animation: ${cascade} 1.5s 0.6s ease infinite backwards;
    }
    & div:nth-child(5) {
        animation: ${cascade} 1.5s 0.75s ease infinite backwards; 
    }
    
`