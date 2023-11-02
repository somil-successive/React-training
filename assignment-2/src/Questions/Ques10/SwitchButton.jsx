import React from "react";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const SwitchButton=()=>{
    const {language,setLanguage}=useContext(LanguageContext);

    return (
        <button
          onClick={() =>
            language === "English" ? setLanguage("Spanish") : setLanguage("English")
          }
        >
          {language} 
        </button>
      );
}

export default SwitchButton;