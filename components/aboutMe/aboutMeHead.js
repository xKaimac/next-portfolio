import Head from 'next/head'

import style from '@/styles/aboutMe.module.css'

export function AboutMeHead() {
    return (
        <>
            <Head>
                <title>{"//"}About Me</title>
            </Head>
            <h1 className={style.title}>About Me</h1>
        </>
    )
}