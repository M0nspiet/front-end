import React, { useEffect, useState }  from "react";
import { Abz } from "../../components/P"
import { List } from "../../components/List/List";
import { Button } from "../../components/Button";
import { Img } from "next/image";

export default function p2Page(){

    const [content, setContent] = useState("");
    const [value, setValue] = useState("");
    const [page, setPage] = useState(0);
    const [pagel, setPagel] = useState(0);
    const [time, setTime ] = useState(0);

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

    function Photos(){
        const [photp, setPhotp] = useState([])
    }

    function handleClick(e){
        e.preventDefault(); 
        if (!value) return;
        setContent(LastState => [{ title: value}, ...(LastState || [])]);
        setValue("");
        //if (e.target.files.length) {
            //setImage({
                //preview: URL.createObjectURL(e.target.files[0]),
                //raw: e.target.files[0]
            //});
        //}
    }

    const [image, setImage] = useState({ preview: "", raw: "" });

    //const handleChange = e => {
        //if (e.target.files.length) {
            //setImage({
                //preview: URL.createObjectURL(e.target.files[0]),
                //raw: e.target.files[0]
            //});
        //}
    //};

    return (
    <main>
        <Abz>page 2</Abz>
        <div>
            <form onSubmit={handleClick}>
            <Button type="submit">Add picture</Button>
            <input type="file" id="upload-button" value={value} onChange={e => setValue(e.target.value)}></input>
            </form>
            { content && <List content={content} /> }
        </div>
    </main>
    );
}


