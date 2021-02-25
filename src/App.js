import logo from './logo.svg';
import './App.css';
import Selection from './Selection';
import { useEffect, useState } from 'react';


function App() {

  const [check, setCheck] = useState('Before')
  const [section, setSection] = useState('this is section')

  const fetchAsync = async () => {
    console.log("Before");
    const res = fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(res => setCheck(res.check))

    console.log("Changed : " + check);
  }

  useEffect(() => {
    fetchAsync();
    }, [] //처음 한번만 렌더하기 위해서 빈 배열 입력
  );

  return (
    <div className="App">

      <Header name = "리기훈" />

      <div className="body">
        <div className="contents-container">
          여기에 설명
          <h3>{check}</h3>
        </div>

        <div className="selection-container">
          <Selection name={section}/>
        </div>
      </div>

      <Footer name = "jokerbox.com" />
    </div>
  );
}



const Header = (props) => {
  return(
    <header className="header"> 
      <h1>서버 테스트</h1>

      <nav>{props.name}</nav>
    </header>
  )
}

const Footer = (props) => {
  return(
    <footer className="bottom">
      please contant me by {props.name}
    </footer>
  )
}

export default App;
