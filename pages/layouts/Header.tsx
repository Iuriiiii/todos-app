import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ISession } from '../../store/slices/session.slice';

interface Props { }

const Header = (props: React.HTMLAttributes<HTMLElement>) => {
  const router = useRouter();
  const session = useSelector<any, ISession>((state) => state.session);

  return (
    <header {...props}>
      <nav className='space-x-10'>
        {session.hasSession !== false && <Link href='/' style={router.asPath === '/' ? { fontWeight: 'bold' } : {}}>Home</Link>}
        {session.hasSession === false && <Link href='/login' style={router.asPath.includes('/login') ? { fontWeight: 'bold' } : {}}>Login</Link>}
        {session.hasSession !== false && <Link href='/logout' style={router.asPath.includes('/logout') ? { fontWeight: 'bold' } : {}}>Logout</Link>}
      </nav>
    </header>
  )
}

export default Header