import React from "react"; 
import css from "./Abz.module.css"

export const Abz = ({children}) =>
{
    console.log(css);
    return (
    <p className = {css.abz} className = {css.abz}>
        {children}
    </p>
    );
    
}
