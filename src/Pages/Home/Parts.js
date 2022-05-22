import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/part')
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