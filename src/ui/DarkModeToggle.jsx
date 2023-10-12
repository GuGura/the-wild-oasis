import React from 'react';
import ButtonIcon from "./ButtonIcon.jsx";
import {HiOutlineMoon, HiOutlineSun} from "react-icons/hi2";
import {useDarkMode} from "../context/DarkModeContext.jsx";

function DarkModeToggle(props) {
    const {isDarkMode, toggleDarkMode} = useDarkMode()
    return (
        <ButtonIcon onClick={toggleDarkMode}>
            {isDarkMode ? <HiOutlineMoon/> : <HiOutlineSun/>}
        </ButtonIcon>
    );
}

export default DarkModeToggle;