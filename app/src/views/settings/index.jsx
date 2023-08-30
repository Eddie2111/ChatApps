// lazy import the ThemeSwitcher component
import React from 'react';
// const ThemeSwitcher = React.lazy(() => import('../../components/main/ThemeSwitcher'));
import ThemeSwitcher from "../../components/buttons/ThemeSwitcher";
export default function Settings(){
    return(
        <div>
            <h1>Settings</h1>
            <ThemeSwitcher />
        </div>
    )
};