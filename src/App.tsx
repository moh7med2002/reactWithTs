import React , {useEffect}from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from './components/ChangeLanguage';
import cookies from "js-cookie";


function App() {
  const {t} = useTranslation();

  useEffect(()=>{
    const lang = cookies.get('i18next') || "en";
    if(lang==="ar"){
      document.body.dir="rtl"
  }
  else{
      document.body.dir="ltr"
  }
  },[]);

  return (
    <div>
        {t('hello')}
        <ChangeLanguage/>
    </div>
  );
}

export default App;
