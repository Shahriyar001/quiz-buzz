import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicQuiz = () => {
    const quizz = useLoaderData();
    // console.log(quizz.data.questions);

    const allQuiz = quizz.data.questions;
    console.log(allQuiz)
    // console.log(quizz.data);
    const data = quizz.data;
    return (
        <div>
            <h1>Quiz of {data.name}</h1>
            <div>
                {
                    allQuiz.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>

        </div>
    );
};

export default TopicQuiz;