import React from 'react';
import pic1 from '../../images/portfolio/My pic.JPG'

const Portfolio = () => {
    return (
        <div>
            <h2 className='text-center text-xl font-bold text-primary mt-8'>This is My Portfolio</h2>

            <div className='flex justify-center items-center mt-4'>

                <div className="card w-96 bg-base-100 shadow-xl text-center px-10">
                    <figure className="px-10 pt-10">
                        <img src={pic1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div >
                        <p className='mt-8'> <span className='font-bold '>Name</span>: Md. Sarafat Hossain </p>
                        <p className='mt-8'><span className='font-bold'>Email</span> : sarafat2769@gmail.com</p>
                        <p className='mt-8'> <span className='font-bold'>Educational Background</span> : B.sc(hon's) in Computer science and Engineering from BGC Trust University Bangladesh</p>

                        <p className='mt-8'><span className='font-bold'>Skill of mine as a Web developer: </span> 1.html 2.css 3.bootstrap 4.tailwind 5.javascript 5.react js 6.node js 7.mongo db </p>
                        <p className='mt-8'><span className='font-bold'>Three  website of mine</span> 1. <a href=' https://gym-equipment-warehouse.web.app/' className='text-success font-bold'> Sun fitness warehouse</a> 2.<a href='https://hrx-photography.web.app/' className='text-success font-bold'> HRX photography</a> 3.<a href='https://sage-flan-1698f7.netlify.app/' className='text-success font-bold'> Football Auction</a></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;