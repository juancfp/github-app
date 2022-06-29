import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    gap:10px;
    align-items:center;
    flex-direction:column;

`;

export const Avatar = styled.img`
    width: 200px;
    border-radius:50%;
    margin: 15px;
    justify-self:center;

`;

export const WrapperStatusCount = styled(Wrapper)`
    justify-content:space-evenly;
    gap: 10px;
    flex-direction:row;
    text-align:center;
    font-weight:bold;
    & > * {
        align-self: space-between;
    }
`;

export const WrapperUserGeneric = styled(Wrapper)`
    gap: 10px;
    flex-direction:row;
    & > * {
        align-self: flex-start;
    }
`;

export const WrapperUserInfo = styled(Wrapper)`
    flex-direction:column;
    justify-content: space-between;
    padding: 40px 0 ;
    align-self:flex-start;
`;

export const WrapperBio = styled(Wrapper)`
    & > * {
        align-self: flex-start;
    }

`