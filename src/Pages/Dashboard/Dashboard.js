import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content bg-slate-300 my-4 p-10 rounded-md">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl text-center font-bold text-blue-800'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My orders</Link></li>
                    <li><Link to='/dashboard/addReview'>Add a review</Link></li>
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;