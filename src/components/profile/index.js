import React from 'react';
import * as S from './styled';


export const Profile = () => {
  return (
    <S.Wrapper>
        {/* colocar mockado mesmo, só para saber o que você quer */}
        <S.Avatar src='https://avatars.githubusercontent.com/u/105291091?v=4' alt='Users Avatar'/>
        <S.WrapperUserInfo>
            <div>
                <h1>Juan Carlos</h1>    
                <S.WrapperUsername>   
                    <h3>Username:</h3>
                    <a href='https://www.github.com/users/juancfp' target='_blank' rel='noreferrer'>juancfp</a>
                </S.WrapperUsername>
            </div>   

            <S.WrapperStatusCount>
                <div>
                    <h4>Followers:</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Following:</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Organizations:</h4>
                    <span>5</span>
                </div>

            </S.WrapperStatusCount>

        </S.WrapperUserInfo>
    </S.Wrapper>
  )
}
