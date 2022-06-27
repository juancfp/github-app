import styled from 'styled-components';

export const Wrapper = styled.header`
    display:flex;
    grid-column:1/3;
    margin-bottom:20px;
    & input {
        width:100%;
        padding:10px;
        margin-right:10px;  

    }
    & input::placeholder {
        color:#ddd;
    }
    & button {
        cursor:pointer;
        text-transform:uppercase;
    }
`

