import { useRouter } from 'next/router';
import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ISession, update } from '../store/slices/session.slice';

interface Props { }

const logout = (props: Props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const session = useSelector<any, ISession>((state) => state.session);

    useLayoutEffect(() => {
        dispatch(update({ name: '', hasSession: false }));
        router.push('/login');
    }, []);

    return (
        <div></div>
    )
}

export default logout