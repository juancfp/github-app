import React from 'react'
import * as S from './styled'

export const Repositories = () => {
  return (
    <div>
        <S.TabsWrapper>
            <S.TabListWrapper>
                <S.TabWrapper>Repositories</S.TabWrapper>
                <S.TabWrapper>Starred</S.TabWrapper>
                <S.TabWrapper>Gists</S.TabWrapper>
            </S.TabListWrapper>
            <S.TabPanelWrapper>
                <div>
                    <div>
                        <h9><a href="#">Repo 1</a></h9>
                        <p>Descrição</p>
                        <div>
                            <p>Public</p>
                            <p>Linguagem: <span>Javascript</span></p>
                            <p>Licensa: <span>MIT</span></p>
                            <p>Forks: <span>19</span></p>
                        </div>
                    </div>
                </div>
            </S.TabPanelWrapper>
            <S.TabPanelWrapper>
                <div>Starreds</div>
            </S.TabPanelWrapper>
            <S.TabPanelWrapper>
                <div>Favorites</div>
            </S.TabPanelWrapper>
        </S.TabsWrapper>
    </div>
  )
}
