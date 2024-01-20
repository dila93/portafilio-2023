import './App.css';
import Intro from './components/Intro';
import Technologies from './components/Technologies';
import Articles from './components/Articles';
import useArticles from './components/Articles/hooks/useArticles';
import Social from './components/Social';
import useSocial from './components/Social/hooks/useSocial';
import styled from 'styled-components';

function App() {
  const { articlesData } = useArticles();
  const { socialContent } = useSocial();
  

  return (
    <div className="App">
      <SectionArticles>
        <Intro/>
        <Technologies/>
        <Social data={socialContent || []}></Social>
        <Articles data={articlesData || []}></Articles>
      </SectionArticles>
    </div>
  );
}

const SectionArticles = styled.section`
  display: flex;
  flex-direction: column;
`;

export default App;
