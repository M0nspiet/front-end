import React from "react";
import css from "./Button.module.css"
import { clx } from "../../../../untils/clx"

export const Button = ({children, className, ...props}) => {
    return(
    <button className={clx(css.button)} {...props}><i className="css.i">{children}</i></button>
    )
} 