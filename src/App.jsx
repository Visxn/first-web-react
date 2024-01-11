

import './styles/App.scss';
import { Header } from './components/Header';
import  Hero  from './components/Hero';
import  Content  from './components/Content';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
