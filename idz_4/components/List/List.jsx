import React from "react";
import { Img } from "next/image";

export const List = ({content}) =>{
    return (
    <ul>
        {content.map((eL, i) =>(
        <li key={i}><img srs={eL.title} alt="No picture ;(" />{eL.title}</li>
    ))}
    </ul>
    );
};