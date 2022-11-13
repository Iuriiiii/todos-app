import Image from 'next/image';
import React from 'react'
import loading from '../public/loading.png';

interface Props { }

const Loading = (props: Props) => {
    return (
        <div>
            <Image className='invert animate-spin reverse-animation' src={loading} alt='loading' width={45} height={45} />
        </div>
    )
}

export default Loading