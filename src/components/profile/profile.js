import React from 'react';
import { useGitHub } from '../../hooks/github';
import * as S from './styled';


export const Profile = () => {

    const {gitHubState} = useGitHub();
    
  return (
    <S.Wrapper>
        {/* colocar mockado mesmo, só para saber o que você quer */}
        <S.Avatar src={gitHubState.user.avatar} alt='Users Avatar'/>
        <S.WrapperUserInfo>
            <div>
                <h1>{gitHubState.user.name}</h1>    
                <S.WrapperUserGeneric>   
                    <h3>Username:</h3>
                    <a href={gitHubState.user.publicUrl} target='_blank' rel='noreferrer'>{gitHubState.user.login}</a>
                </S.WrapperUserGeneric>
                <S.WrapperUserGeneric>   
                    <h3>Location:</h3><p>
                        {gitHubState.user.location}

                    </p>
                </S.WrapperUserGeneric>
                <S.WrapperUserGeneric>   
                    <h3>Company:</h3>
                    <p>{gitHubState.user.company}</p>
                </S.WrapperUserGeneric>
                <S.WrapperUserGeneric>   
                    <h3>Blog:</h3>
                    <a href={gitHubState.user.blog} target='_blank' rel='noreferrer'>{gitHubState.user.blog}</a>
                </S.WrapperUserGeneric>
            </div>   
            <S.WrapperBio>
                <h3>Bio</h3>
                <p>{gitHubState.user.bio}</p>
            </S.WrapperBio>

            <S.WrapperStatusCount>
                <div>
                    <h4>Followers:</h4>
                    <span>{gitHubState.user.followers}</span>
                </div>
                <div>
                    <h4>Following:</h4>
                    <span>{gitHubState.user.following}</span>
                </div>
                

            </S.WrapperStatusCount>

        </S.WrapperUserInfo>
    </S.Wrapper>
  )
}
