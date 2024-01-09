

import './styles/App.scss';
import { Header } from './components/Header';
import  Hero  from './components/Hero';
import  Content  from './components/Content';

function App() {
  return (
    <div className="main">
      <Header />
      <div className='body'>
        <div className='hero'>
          <Hero />
        </div>
        <div className='content'>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
