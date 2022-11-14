import React from "react"; 
import css from "./abz.module.css"

export const abz = ({children}) =>
{
    console.log(css);
    return (
    <abz type = "abz1"  className = {css.abz1}>
        {children}
    </abz>
    );
    
}