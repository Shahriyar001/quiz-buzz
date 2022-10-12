import React from 'react';
import './Option.css'

const Option = ({ option }) => {
    console.log(option)
    // const option = option;
    return (
        <div className='option-style'>
            {/* <h5>{option}</h5> */}
            <form action="">
                <input type="radio" />{option}
            </form>
        </div>
    );
};

export default Option;