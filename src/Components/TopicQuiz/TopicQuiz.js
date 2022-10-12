import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicQuiz = () => {
    const quizz = useLoaderData();
    console.log(quizz.data.questions
    );
    return (
        <div>
            <h1>ebery thing u need to know</h1>
            <h2>quizes componant</h2>
        </div>
    );
};

export default TopicQuiz;