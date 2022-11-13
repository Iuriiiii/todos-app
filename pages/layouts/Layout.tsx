import React, { useEffect, useLayoutEffect, useState } from 'react'
import Footer from './Footer'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { ISession } from '../../store/slices/session.slice';
import { ITask } from '../../types';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Head from 'next/head';
const Header = dynamic(import('./Header'), { ssr: false });

interface Props { children?: React.ReactNode }

const Layout = (props: Props) => {
    const router = useRouter();
    const session = useSelector<any, ISession>((state) => state.session);

    useLayoutEffect(() => {
        if (!session.hasSession)
            router.push('/login');
    }, []);

    return (
        <>
            <Head>
                <title>Todo's Viewer</title>
                <meta name="description" content="Todo's viewer app" />
                <meta name="author" content="Alexander Casas" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='x-screen max-x-screen px-16'>
                <Header className='h-20 flex-center' />
                <div className='flex-center h-[calc(100vh-10rem)] overflow-y-scroll'>
                    {props.children}
                </div>
                <Footer className='h-20 flex-center space-x-3' />
            </div>
        </>
    )
}

export default Layout