import React from 'react';
import './Topic.css'

const Topic = ({ topic }) => {
    const { name, logo, total } = topic;
    return (
        <div className='card'>
            <img src={logo} alt="" />
            <div>
                <div>
                    <h4>{name}</h4>
                    Total: {total}
                </div>
                <button></button>
            </div>

        </div>
    );
};

export default Topic;