import { useContext } from "react";
import { GithubContext } from "../providers";

export const useGitHub = () => {
    const {gitHubState, getUser, getRepos, getStarred} = useContext( GithubContext);

    return {gitHubState, getUser, getRepos, getStarred};
};