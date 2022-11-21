import React from "react";
import { Img } from "next/image";

export const List = ({content}) =>{
    return (
    <ul>
        {content.map((eL, i) =>(
        <li key={i}><img src={eL.thumbnailUrl} alt={eL.title} /></li>
    ))}
    </ul>
    );
};