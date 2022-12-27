import Link from "next/link";
import React from "react";
import css from "./ButtonList.module.css"
import { clx } from "../../../../untils/clx"

export const ButtonLink = ({children,className ,...props}) => {
    return <Link className={clx(css.link)} {...props}>{children}</Link>
}