import React, { useEffect, useState } from "react";
import { List } from "../components/List/List";
import { Button } from "../components/Button";
import { Img } from "next/image";



export default function IndexPage(){
    const [content, setContent] = useState("");
    const [value, setValue] = useState("");
    const [page, setPage] = useState(0);
    const [pagel, setPagel] = useState(0);
    const [time, setTime ] = useState(0);

    function Photos(){
        const [photp, setPhotp] = useState([])
    }

    function handleClick(e){
        e.preventDefault(); 
        if (!value) return;
        setContent(LastState => [{ title: value}, ...(LastState || [])]);
        setValue("");
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
    
    //https://jsonplaceholder.typicode.com/photos
    //https://static.wikia.nocookie.net/codegeass/images/7/7e/1295504746.jpg/revision/latest?cb=20140311192830
    return (
        <div>
            <form onSubmit={handleClick}>
                <Button type="submit">Add txt</Button>
                <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
                <Button type="button" onClick={() => setPagel(p => p - 1)}>pref-({pagel})</Button>
                <Button type="button" onClick={() => setPage(p => p + 1)}>next-({page})</Button>
            </form>
            <span>{time}</span>
            { content && <List content={content?.slice(page*10, (page + 1) * 10)} /> }
        </div>
    );
};