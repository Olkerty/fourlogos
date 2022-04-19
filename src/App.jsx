import { MainLogo } from './components/MainLogo/MainLogo';
import { LogoBrick } from './components/LogoBrick/LogoBrick';
import posTechBack from './images/posTechBack.png';
import posTechLogo from './images/posTechLogo.svg';

import kassaRedLogo from './images/kassaRedLogo.svg';
import kassaRedBack from './images/kassaRedBack.png';

import qazaqWorkPlatLogo from './images/qazaqWorkPlatLogo.svg';
import qazaqWorkPlatBack from './images/qazaqWorkPlatBack.png';

import pizzaLogo from './images/pizzaLogo.svg';
import pizzaBack from './images/pizzaBack.png';

import styles from './mainStyles.module.css';

function App() {
  return (
    <div className='App'>
      <header className="App-header">
      </header>
      <div className={styles.allLogos}>
        <MainLogo />
        <div className={styles.logos}>
          <LogoBrick
            backgroundImage={posTechBack} 
            logoImage={posTechLogo} 
            alt={'Pos Tech'}
            path={'https://www.pos-tech.kz'}
          />
          <LogoBrick
            backgroundImage={kassaRedBack} 
            logoImage={kassaRedLogo} 
            alt={'Kassa red'}
            path={'http://kassa.red'}
          />
          <LogoBrick
            backgroundImage={qazaqWorkPlatBack} 
            logoImage={qazaqWorkPlatLogo} 
            alt={'Qazaq work platform'}
            path={'#'}
          />
          <LogoBrick 
            backgroundImage={pizzaBack} 
            logoImage={pizzaLogo} 
            alt={'Pizza in cup'}
            path={'#'}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
