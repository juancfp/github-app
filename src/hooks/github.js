import { useContext } from "react";
import { GithubContext } from "../providers";

export const useGitHub = () => {
    const {gitHubState, getUser} = useContext( GithubContext);

    return {gitHubState, getUser};
};