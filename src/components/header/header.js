import React, { useState } from 'react';
import * as S from './styled';
import {useGitHub} from '../../hooks';

function Header(props) {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(() => (event.target.value));
        console.log(input);
    }

    const {getUser} = useGitHub();
    
    const handleSubmit = () => {
        if(input==='') return
        getUser(input);
    }


    // renderizar apenas se tiver novo usuário

        return ( 
    <S.Wrapper>

        <input type={'text'} placeholder="Insert the username you want to search" onChange={handleChange}/>
        <button type='submit' onClick={handleSubmit}>
            Buscar
        </button>
    </S.Wrapper>
    )
}


export {Header};
