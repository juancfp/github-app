import {Tabs, TabPanel, Tab, TabList} from  'react-tabs';
import styled from 'styled-components';

export const TabsWrapper = styled(Tabs)`
    
`
export const TabListWrapper = styled(TabList) `
    display:flex;
   
`
export const TabPanelWrapper = styled(TabPanel)`
    margin:0 2px;
    & div {
        padding:10px;
        
    }
    
    &:not(react-tabs__tab-panel--selected) {
        border:0;
    }
    
    &.react-tabs__tab-panel--selected{
        background-color: #acab9c;
        border:1px solid black;
        border-bottom-right-radius:4px;
        border-bottom-left-radius:4px;
    }
    display:flex;
`
export const TabWrapper = styled(Tab)`
    box-sizing:border-box;
    border:1px solid black;
    border-top-right-radius:5px;
    border-top-left-radius:5px;
    margin:5px 0 0 2px ;
    padding:4px;
    border-bottom-width:0;
    box-sizing:border-box;
    transition:200ms;
    cursor:pointer;
    outline:none;
    &.react-tabs__tab--selected {
        cursor:default;
        background-color:#acab9c;
        margin:0 0 -1px 2px;
        font-size:20px;
    }
    

`
export const ReposWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 250px);
    

`

export const RepoWrapper = styled.div`
    display:flex;
    flex-direction:column;
    font-size:15px;

    border:1px solid #5d5d5d;
    margin:2px;
    border-radius:8px;
    `
    export const RepoInfo = styled.div`
    display:flex;
    flex-direction:column;
    margin:0;
    `
    
    export const RepoName = styled.div`
    display:flex;
    justify-content:space-between;
    & > p {
        font-style:italic;
        font-size:12px;
        margin-left:4px;
    }
    h4 {
        font-weight:bold;
        
    }
`