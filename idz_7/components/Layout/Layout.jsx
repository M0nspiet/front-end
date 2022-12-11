import Head from 'next/head'
import React from 'react'

export const Layout = ({title,children}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
    </Head>
    {children}
    </>
  );
};
