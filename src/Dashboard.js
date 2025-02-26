import React, { useEffect, useState } from 'react';
import { fetchBrentOilData } from './api';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchBrentOilData();
            console.log("Fetched Data for Chart:", result);  // Debugging
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Brent Oil Price Dashboard</h1>
            <h2>Brent Oil Price Trends</h2>
            <LineChart width={800} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default Dashboard;