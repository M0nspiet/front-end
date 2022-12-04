import React, { useEffect, useState }  from "react";
import { Abz } from "../../components/P"
import { List } from "../../components/List/List";
import { Button } from "../../components/Button";
import { Img } from "next/image";

export default function p2Page(){

    const [content, setContent, setContentt] = useState("");
    const [value, setValue] = useState("");
    const [valuet, setValuet] = useState("");
    const [page, setPage] = useState(0);
    const [pagel, setPagel] = useState(0);
    const [time, setTime ] = useState(0);
    const [image, setImage] = useState({ preview: "", raw: "" });
    

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
    //https://images.saymedia-content.com/.image/t_share/MTgyMjA3MTcxOTU2NzEyNTc5/best-geass-code-geass.jpg
    return (
    <main>
        <Abz>page 2</Abz>
        <div>
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


