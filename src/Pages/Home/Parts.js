import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([])

    // const length = parts?.length
    // const start = length - 6;
    // const lastParts = parts.slice(start, length)
    // console.log(lastParts)

    useEffect(() => {
        fetch('https://rocky-reaches-51313.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, []);

    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-8">
                Our parts
            </h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;