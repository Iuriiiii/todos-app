import axios, { Axios } from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import Loading from '../components/Loading'
import { ISelectors } from '../store'
import { ISession } from '../store/slices/session.slice'
import styles from '../styles/Home.module.css'
import { ITask } from '../types'

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    axios.get<ITask[]>(process.env.NEXT_PUBLIC_API_URL!)
      .then((res) => setTasks(res.data))
      .catch(console.error);
  }, []);

  return (
    <>
      {
        tasks.length === 0
          ? <Loading />
          : (
            <div className='flex-center flex-wrap gap-3 h-full'>
              {tasks.map((task) => <Link key={task.title} href={`/card/${task.id}`}><Card key={task.title} {...task} /></Link>)}
            </div>
          )
      }

    </>
  )
}
