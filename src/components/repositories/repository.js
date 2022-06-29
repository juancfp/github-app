import React from 'react';
import * as S from './styled'

export  function Repository({name, isPrivate, language, forks_count}) {
  return (
    <S.RepoWrapper>
        <S.RepoName>
            <h4><a href="#">{name}</a></h4>
            <p>{isPrivate='false'? 'Public' : 'Private'}</p>
        </S.RepoName>
        <S.RepoInfo>
            <p>Linguagem: <span>{language}</span></p>
            <p>Forks: <span>{forks_count}</span></p>
        </S.RepoInfo>      
    </S.RepoWrapper>
  )
}
