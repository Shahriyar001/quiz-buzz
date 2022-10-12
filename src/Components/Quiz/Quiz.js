import React from 'react';
import Option from '../Option/Option';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    // const firstq = options;
    // console.log(quiz) 
    // console.log(options);

    const handleOption = option => {
        if (option === correctAnswer) {
            alert('Currect Ans')
        }
        else (
            alert('Worng Ans')
        )
        console.log(option);
    }

    return (
        <div className='quiz-com'>
            <h4>Quiz { }:{question}</h4>
            {
                options.map(option => <Option
                    key={option.id}
                    option={option}
                    handleOption={handleOption}
                ></Option>)
            }
        </div>
    );
};

export default Quiz;