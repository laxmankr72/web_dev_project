import './App.css';
import gptLogo from './assets/assets/chatgpt.svg';
import addBtn from './assets/assets/add-30.png';
import msgIcon from './assets/assets/message.svg';
import home from './assets/assets/home.svg';
import saved from './assets/assets/bookmark.svg';
import rocket from './assets/assets/rocket.svg';

function App() {
  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
            <div className='upperSideTop'><img src={gptLogo} alt='logo' className='logo'/><span className='brand'>ChatGPT</span></div>
            <button className='midBtn'><img src={addBtn} alt='new chat' className='addBtn'/>New Caht</button>
            <div className='upperSideBottom'>
              <button className='query'><img src={msgIcon} alt='Query'/>What is programming ?</button>
              <button className='query'><img src={msgIcon} alt='Query'/>How to use an API ?</button>
            </div>
        </div>
        <div className='lowerSide'>
              <div className='listItems'><img src={home} alt='Home' className='listItemsImg'/>Home</div>
              <div className='listItems'><img src={saved} alt='Saved' className='listItemsImg'/>Saved</div>
              <div className='listItems'><img src={rocket} alt='Upgrade' className='listItemsImg'/>Upgrade to pro</div>
        </div>
      </div>
      <div className='main'>
            
      </div>
    </div>
  );
}

export default App;
