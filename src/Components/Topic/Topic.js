import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className='card'>
            <img src={logo} alt="" />
            <div className=''>
                <div>
                    <h4>{name}</h4>
                    <p>Total: {total}</p>
                </div>
                <button className='btn-topic'><Link to={`/topic/${id}`}>Start Practice-> </Link></button>
            </div>

        </div>
    );
};

export default Topic;