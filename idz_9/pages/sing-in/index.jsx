import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { Input } from "../../components/Input/Input"
import { setCookie } from '../../untils/setCokise'
import {postFetch} from "../../untils/Fetch"
import { useRouter } from 'next/router'
import css from "./index.module.css"
import { useEffect } from 'react'
import { Layout } from '../../components/Layout/Layout'



const SingIn = () => {
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const[isLoading, setLoading] = useState(false)
    const router = useRouter();

    useEffect(() => {
        router.prefetch("/");
    }, []);

    function FormHandler(e){
        e.preventDefault();
        postFetch("https://norma.nomoreparties.space/api/auth/login", {
            username,
            password,
        }).then(res => {
            setCookie("accsessToke", es.accsessToken, 2)
            setCookie("refreshToke", es.refreshToken)
            router.push("/");
        })
    }

    return (
        <Layout title="sing-in" onlyUnAuth>
        <section className={css.section} onSubmit = {FormHandler}>
            <div className={css.singin}>
                <div className={css.content}>
                    <h2 className={css.h2}>Sing In</h2>
                    <div className={css.form}>
                        <div className={css.inputb}>
                            <Input onChange={(e) =>setUsername(e.target.value)} type = "text" required className={css.vvod}></Input><i className={css.i}>Username</i>
                        </div>
                        <div className={css.inputb}>
                            <Input onChange={(e) =>setPassword(e.target.value)} type = "password" required className={css.vvod} value={password}></Input><i className={css.i}>Password</i>
                        </div>
                        <div className={css.links}>
                            <a href='' className={css.a}>Forgot password</a>
                            <a href='/registr' className={css.a}>SingUp</a>
                        </div>
                        <div><a href='/'><input type = "submit" value="Login" className={css.vvod}></input></a></div>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    );
};

export default SingIn;