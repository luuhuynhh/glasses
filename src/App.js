import { useState, useEffect } from 'react';
import GlassList from './components/GlassList';
import Modal from './components/Modal';
import Title from './components/Title';
import style from "./css/App.module.css";
import data from "./dataGlasses.json";
function App() {
  const [curIndex, setCurIndex] = useState(-1);
  const [curGlass, setCurGlass] = useState('');

  useEffect(() => {
    setCurGlass(pre => data.filter(i => i.id === curIndex)[0]);
  }, [curIndex]);
  return (
    <div className={style.app}>
      <Title />
      <Modal glass={curGlass} />
      <GlassList glassList={data} setCurIndex={setCurIndex} />
    </div>
  )
}

export default App;
