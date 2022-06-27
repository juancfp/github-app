import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    gap:10px;
    
`;

export const Avatar = styled.img`
    width: 200px;
    border-radius:50%;
    margin: 15px;
    justify-self:center;
    align-self:center;
    

`;

export const WrapperStatusCount = styled(Wrapper)`
    justify-content:space-evenly;
    gap: 10px;
    text-align:center;
    & > * {
        align-self: flex-end;
    }
`;

export const WrapperUserGeneric = styled(Wrapper)`
    gap: 10px;

    & > * {
        align-self: flex-end;
    }
`;

export const WrapperUserInfo = styled(Wrapper)`
    flex-direction:column;
    justify-content: space-between;
    padding: 40px 0 ;
    
`;

export const WrapperBio = styled(Wrapper)`
    & > * {
        align-self: flex-end;
    }

`