import React, { useEffect, useState } from "react";
import { List } from "../components/List/List";
import { Button } from "../components/Button";
import { Img } from "next/image";
import Head from "next/head";


export default function IndexPage(){
    const [content, setContent] = useState("");
    const [value, setValue] = useState("");
    const [valuet, setValuet] = useState("");
    const [page, setPage] = useState(0);
    const [pagel, setPagel] = useState(0);
    const [time, setTime ] = useState(0);

    function Photos(){
        const [photp, setPhotp] = useState([])
    }

    function handleClick(e){
        e.preventDefault(); 
        if (!value) return;
        if (!valuet) return;
        setContent(LastState => [{ thumbnailUrl: value}, ...(LastState || [])]);
        setContent(LastState => [{ title: valuet}, ...(LastState || [])]);
        setValue("");
        setValuet("");
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then((json) => setContent(json)); 
        return () => {};
    }, []);

    useEffect(() =>{
        const id = setInterval(() => setTime(l => l + 1), 1000);
        return () => clearInterval(id);
    }, []);
    
    //https://jsonplaceholder.typicode.com/photos //fill - на весь экран
    //https://images.saymedia-content.com/.image/t_share/MTgyMjA3MTcxOTU2NzEyNTc5/best-geass-code-geass.jpg
    return (
        <div>
            <Head><title>Blog main</title></Head>
            <form onSubmit={handleClick}>
                <p><Button type="submit">Add picture</Button>
                <input type="text" placeholder="picture Title" value={valuet} onChange={e => setValuet(e.target.value)}/></p>
                <input type="url" placeholder="http//img.jpg" value={value} onChange={e => setValue(e.target.value)}/>                <Button type="button" onClick={() => setPage(p => p + 1)}>next-({page})</Button>
            </form>
            <span>{time}</span>
            { content && <List content={content?.slice(page*10, (page + 1) * 10)} /> }
        </div>
    );
};