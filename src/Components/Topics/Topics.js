import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const topics = useLoaderData();
    // console.log(topics.data)
    const topicses = topics.data;
    console.log(topicses)
    return (
        <div className='topics-container'>
            <div className='topic-container'>
                {
                    topicses.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
            <div className='last-container'>

            </div>
        </div>
    );
};

export default Topics;