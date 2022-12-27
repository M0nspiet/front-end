import Head from 'next/head'
import React from 'react'
import { getCookie } from '../../untils/setCokise';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

export const Layout = ({title,children, onlyUnAuth}) => {
  const router = useRouter()
  const [isChecked, setChecked] = useState(false)
  useEffect(() => {
  if (onlyUnAuth && getCookie("refreshToken")){
    router.push("/").then(()=>{
      setChecked(true)
    })
  } else {
    setChecked(true)
  }
},[])
  return (
    <>
    <Head>
        <title>{title}</title>
    </Head>
    {children}
    </>
  );
};
