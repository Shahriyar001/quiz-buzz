import React from 'react';
import './Option.css'

const Option = ({ option, handleOption }) => {
    console.log(option)
    // const option = option;
    return (
        <div>
            {/* <h5>{option}</h5> */}
            <button onClick={() => handleOption(option)} className='option-style'>
                <form action="">
                    <input type="radio" />{option}
                </form>
            </button>
        </div>
    );
};

export default Option;