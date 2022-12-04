import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Nav } from "../components/Header/Nav/Nav";
import css from "./index.module.css";
import { Button } from "../components/Header/UI/Button/Button";
import { Card } from "../components/Cards/Card";

const IndexPage = () =>{
    return( 
    <Layout title = "Main">
        <header className={css.header}>
            <Nav />
        </header>
        <main className={css.main}>
            <div className={css.main__title}>
                <h1 className={css.main__logo}>Nice to meet you</h1>
            </div>
        </main>
        <section className={css.cards}>
            <Card />
            <Card />
        </section>
    </Layout>
    );
};

export default IndexPage;