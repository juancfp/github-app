import {Layout, Profile} from "./components";
import * as S from './commons';

function App() {
  return (
    <>
      <S.GlobalStyle/>

      <Layout>
        <Profile/>
      </Layout>
    </> 
  );
}

export default App;
