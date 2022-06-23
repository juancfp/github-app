import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    
    
`;

export const Avatar = styled.img`
    width: 200px;
    border-radius:50%;
    margin: 15px;

`;

export const WrapperStatusCount = styled(Wrapper)`
    gap: 10px;
    text-align:center;
`;

export const WrapperUsername = styled(Wrapper)`
    gap: 10px;
`;

export const WrapperUserInfo = styled(Wrapper)`
    flex-direction:column;
    justify-content: space-between;
    padding: 40px 0 ;
`;