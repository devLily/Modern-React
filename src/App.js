import React from 'react';
import Hello from './Hello';
import './App.css';


function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  return (
    <>
    {/*주석 작성하기*/}
      <Hello 
      // 이런식으로 작성하는 주석은 화면에 나타나지 않지롱
      />
      <div style ={style}>{name}</div>
      <div className="gray-box"></div>
      </>
  );
}
export default App;
