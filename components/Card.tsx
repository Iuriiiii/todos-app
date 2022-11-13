import React from 'react'
import { ITask } from '../types'
import { BsFillFilePersonFill } from 'react-icons/bs';

interface Props { }

const Card = (props: ITask) => {
    return (
        <div className='relative h-72 w-40 bg-zinc-800 rounded-lg p-3 flex-center flex-col hover:rotate-3'>
            <p className='absolute top-10 font-bold rotate-45 right-0'>{props.completed ? 'completed' : 'uncompleted'}</p>
            <p className={`text-7xl flex-1 flex-center ${props.completed ? 'text-green-600' : 'text-red-600'}`}><BsFillFilePersonFill /></p>
            <p className='flex-1 text-center'>{props.title}</p>
        </div>
    )
}

export default Card