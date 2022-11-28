import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import { Button } from "../components/Button";

const BlogItem = ({data}) => {
    const router = useRouter();
    if (router.isFallback) return <h1>Loading...</h1>
    return (
    <div>
        <Head><title>Blog page {data.id}</title></Head>
        <img src={data.thumbnailUrl} alt={data.title}/>
        <Button type="submit" >Next page</Button>
    </div>
    )
};

export default BlogItem;

export async function getStaticProps(context){
    const aticle = await fetch(`https://jsonplaceholder.typicode.com/photos/${context.params.id}`).then(res => res.json())
    return{
        props: {
            data: aticle,
        },
        revalidate: 60,
    }; 
}

export async function getStaticPaths(context){
    return{
        paths: [{ params: {id:"1"} }, { params: {id:"2"} }],
        fallback: true,
    };
}