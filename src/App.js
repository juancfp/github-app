import {Header, Layout, Profile, Repositories} from "./components";
import { useGitHub } from "./hooks";
import * as S from './commons';


function App() {
  const {gitHubState} = useGitHub();
  return (
    <main>
        <S.GlobalStyle/>
        <Layout>
          <Header/>
          {gitHubState.user.name === undefined ? 
          (<S.WrapperLoading>
            <h2>Nenhum usuário pesquisado</h2>
          </S.WrapperLoading>)
          : // or
            <>
              <Profile/>
              <Repositories/>
            </>
          }
          
        </Layout>
    </main> 
  );
}

export default App;
