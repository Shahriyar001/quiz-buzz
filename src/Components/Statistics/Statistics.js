import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = [
        {
            name: "React",
            marks: 6,
            quiz: 8,
            amt: 240
        },
        {
            name: "JavaScript",
            marks: 8,
            quiz: 9,
            amt: 240
        },
        {
            name: "CSS",
            marks: 4,
            quiz: 8,
            amt: 240
        },
        {
            name: "Git",
            marks: 9,
            quiz: 11,
            amt: 240
        }
    ];
    return (
        <div>
            <LineChart width={500} height={400} data={data} margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}>

                <Line type="monotone" dataKey="quiz" stroke="#82ca9d" />
                <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />

            </LineChart>


        </div>
    );
};

export default Statistics;