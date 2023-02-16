import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Nav } from "../components/Header/Nav/Nav";
import css from "./index.module.css";
import { Button } from "../components/Header/UI/Button/Button";
import { Card } from "../components/Cards/Card";

const IndexPage = ({ data }) =>{
    return( 
    <Layout title = "Main">
        <header className={css.header}>
            <Nav />
        </header>
        <main className={css.main}>
            <div className={css.main__title}>
                <h1 className={css.main__logo}>Nice to meet you</h1>
            </div>
            <section className={css.cards}>
                {data?.map((el, i) => (
                <Card key={i} id = {i} {...el} />
                ))}
            </section>
        </main>
    </Layout>
    );
};

export async function getStaticProps(context){
    let result = await fetch("https://leti.kzteams.ru/api/blog/page?istl=[NUMBER]").then(res => {
        if (res.ok) return res.json();
        else throw Error(res.statusText);
    }).catch(err => console.error(err));
    result = result.map(a => ({...a, data: ""}));
    if (!Array.isArray(result)){
        return{
            props: {
                data: [...result],
            },
            revalidate: 100,
        };
    }
    return {
        props: {
            data: [...result],
        },
        revalidate: 100,
    }
}

export default IndexPage;