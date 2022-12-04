import React, { useEffect, useState }  from "react";
import { Abz } from "../../components/P"
import { List } from "../../components/List/List";
import { Button } from "../../components/Button";
import { Img } from "next/image";
import Image from "next/image";
import Head from "next/head";

export default function p2Page({ data }){

    const [content, setContent, setContentt] = useState(data);
    const [value, setValue] = useState("");
    const [valuet, setValuet] = useState("");
    const [page, setPage] = useState(0);
    const [pagel, setPagel] = useState(0);
    const [image, setImage] = useState({ preview: "", raw: "" });
    
    function Photos(){
        const [photp, setPhotp] = useState([])
    }

    function handleClick(e){
        e.preventDefault(); 
        if (!value) return;
        setContent(LastState => [{ thumbnailUrl: value}, ...(LastState || [])]);
        setValue("");
        setValuet("");
        //if (e.target.files.length) {
            //setImage({
                //preview: URL.createObjectURL(e.target.files[0]),
                //raw: e.target.files[0]
            //});
        //}
    }
    return (

    <main>
        <Abz>page 2</Abz>
        <div>
        <Head><title>Blog page 2</title></Head>
            <form onSubmit={handleClick} >
            <Button type="submit" >Add picture</Button>
            <p><input type="text" value={valuet} onChange={e => setValuet(e.target.value)}></input></p>
            <input type="url" value={value} onChange={e => setValue(e.target.value)}></input>
            </form>
            { content && <List content={content?.slice(page*10, (page + 1) * 10)} /> }
        </div>
    </main>
    );
}

export async function getStaticProps (context){
    const obj = await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())
    return{
        props: {
            data: obj,
        },
    };
}