import React, { createContext, useCallback, useState} from 'react';
import { api } from '../servicers';

// criando contexto com a Context API, nativa do React
export const GithubContext = createContext({
    user:{

    },
    repositories:[],
    starred:[],
    gists:[]
});

export const GithubProvider = ( {children}) => {
    const [gitHubState, setGithubState] = useState({
        loading:false,
        user:{
            login:undefined,
            name:undefined,
            publicUrl:undefined,
            followers:undefined,
            following:undefined,
            publicGists:undefined,
            publicRepos:undefined,
            bio:undefined,
            company:undefined,
            location:undefined,
            avatar:undefined,
            blog:undefined,
        }
    });
    
    // pegar usuário
    const getUser = (username) => {
        // username vai ser o nome digitado no input(que vai ser submetido)
        api.get(`users/${username}`).then(user => {
            
            setGithubState(prevState => ({
                ...prevState,
                loading:!prevState.loading
            }))
            //já tem os dados da API
            // user a setGithubState para setar os estados
            setGithubState(prevState => ({
                ...prevState,
                user: {
                    login:user.data.login,
                    name:user.data.name,
                    publicUrl:user.data.html_url,
                    followers:user.data.followers,
                    following:user.data.following,
                    publicGists:user.data.public_gists,
                    publicRepos:user.data.public_repos,
                    bio:user.data.bio,
                    company:(user.data.company===null ? 'Não tem':user.data.company),
                    location:user.data.location,
                    avatar:user.data.avatar_url,
                    blog:user.data.blog
                }
            }))
        }).catch((error) => {
            console.log(error);
            if(error.response.request.status ===404) {
                alert("Usuário não encontrado!");
            };
        }).finally (() => {
            setGithubState(prevState => ({
                ...prevState,
                loading:!prevState.loading,
            }));
        });
    }

    const contextValue = {
        gitHubState,
        getUser: useCallback((username) => getUser(username), [])
    }

    return (

        <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
    )
}