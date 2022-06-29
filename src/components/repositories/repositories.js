import React, {useEffect, useState} from 'react'
import * as S from './styled'
import { useGitHub } from '../../hooks';
import { Repository } from './repository';


export const Repositories = () => {
    const {gitHubState, getRepos, getStarred} = useGitHub();
    const [hasUserForSearch, setHasUserForSearch] = useState(false);

    useEffect(() => {
        if(!!gitHubState.user.login)
        {
        getRepos(gitHubState.user.login);
        getStarred(gitHubState.user.login);
        setHasUserForSearch(!!gitHubState.repositories && !!gitHubState.starred);
        }

    }, [gitHubState.user.login]);
    useEffect(() => {
        setHasUserForSearch(!!gitHubState.repositories && !!gitHubState.starred);
    }, [gitHubState.repositories, gitHubState.starred])
  return (
    <div>
        <S.TabsWrapper>
            <S.TabListWrapper>
                <S.TabWrapper>Repositories</S.TabWrapper>
                <S.TabWrapper>Starred</S.TabWrapper>
            </S.TabListWrapper>
            <S.TabPanelWrapper>
                <S.ReposWrapper>
                    {hasUserForSearch ? 
                    gitHubState.repositories.map((repo) => (
                        <Repository key={repo.id} name ={repo.name} isPrivate={repo.private } language={repo.language} forks_count={repo.forks_count}/>

                    )) : <></>}
                </S.ReposWrapper>
            </S.TabPanelWrapper>
            <S.TabPanelWrapper>
            <S.ReposWrapper>
                    {hasUserForSearch ? 
                    gitHubState.starred.map((repo) => (
                        <Repository key={repo.id} name ={repo.name} isPrivate={repo.private } language={repo.language} forks_count={repo.forks_count}/>

                    )) : <></>}
                </S.ReposWrapper>
            </S.TabPanelWrapper>

        </S.TabsWrapper>
    </div>
  )
}
