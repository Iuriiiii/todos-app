import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Loading from '../../components/Loading'
import { ITask } from '../../types'

interface Props { }

const CardViewer = (props: Props) => {
    const router = useRouter()
    const { id } = router.query
    const [task, setTask] = useState<ITask | null>(null);

    useEffect(() => {
        if (id !== null)
            axios.get<ITask>(process.env.NEXT_PUBLIC_API_URL! + `/${id}`)
                .then((res) => setTask(res.data))
                .catch(console.error);
    }, [id]);

    if (task === null)
        return <Loading />

    return (
        <Card {...task} />
    )
}

export default CardViewer