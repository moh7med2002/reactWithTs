import React from 'react'
import { Button, Stack} from '@mui/material'
import i18n from "i18next";
import { useDispatch } from 'react-redux';
import { changeLang } from '../redux/langSlice';


function ChangeLanguage() {


    const dispatch = useDispatch();

    const handleChangeLang = (lang:string) =>{
        i18n.changeLanguage(lang);
        dispatch(changeLang({lang:lang}));
        if(lang==="ar"){
            document.body.dir="rtl"
        }
        else{
            document.body.dir="ltr"
        }
    }

    return (
    <Stack direction={"row"} justifyContent={"flex-start"} columnGap={1}>
        <Button variant='contained' onClick={()=>handleChangeLang('en')}>
            English
        </Button>
        <Button variant='contained' onClick={()=>handleChangeLang('ar')}>
            عربية
        </Button>
    </Stack>
  )
}

export default ChangeLanguage