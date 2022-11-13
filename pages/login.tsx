import { useRouter } from 'next/router';
import React, { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ISession, update } from '../store/slices/session.slice';

interface Props { }

const login = (props: Props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const hasSession = useSelector<ISession, ISession['hasSession']>((state) => state.hasSession)

    if (hasSession) {
        router.push('/');
        return null;
    }

    function formSubmit(e: FormEvent) {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            username: HTMLInputElement
            password: HTMLInputElement,
        };

        if (target.username.value === '') {
            return alert('Invalid nickname');
        } else if (target.password.value === '') {
            return alert('Invalid password');
        }

        dispatch(update({ name: target.username.value, hasSession: true }));
        router.push('/');
    }

    return (
        <form className='space-y-3 flex flex-col' onSubmit={formSubmit}>
            <label>Username: <input name='username' className='w-full' type='text' autoComplete='username' /></label>
            <label>Password: <input name='password' className='w-full' type='password' autoComplete='current-password' /></label>
            <button className='w-full bg-zinc-800 rounded font-bold' type='submit'>Login</button>
        </form>
    )
}

export default login