import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const SizePieChart = () => {
    const [sizeData, setSizeData] = useState({
        XXL: 0,
        XL: 0,
        L: 0,
        M: 0,
        S: 0,
        XS: 0
    });

    useEffect(() => {
        fetchSizeData();
    }, []);

    const fetchSizeData = async () => {
        try {
            const response = await axios.get('/api/sizes');
            const sizes = response.data;

            // Initialize size counts
            let sizeCount = {
                XXL: 0,
                XL: 0,
                L: 0,
                M: 0,
                S: 0,
                XS: 0
            };

            // Count occurrences of each size
            sizes.forEach(size => {
                if (size in sizeCount) {
                    sizeCount[size]++;
                }
            });

            setSizeData(sizeCount);
        } catch (error) {
            console.error('Error fetching size data:', error);
        }
    };

    // Dummy data for testing if backend is not accessible
    const dummyData = {
        XXL: 5,
        XL: 10,
        L: 8,
        M: 15,
        S: 20,
        XS: 3
    };

    const data = {
        labels: ['XXL', 'XL', 'L', 'M', 'S', 'XS'],
        datasets: [
            {
                label: 'Size Distribution',
                data: [
                    sizeData.XXL || dummyData.XXL,
                    sizeData.XL || dummyData.XL,
                    sizeData.L || dummyData.L,
                    sizeData.M || dummyData.M,
                    sizeData.S || dummyData.S,
                    sizeData.XS || dummyData.XS
                ],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40'
                ]
            }
        ]
    };

    return (
        <div>
            <h5>T-shirt Size Distribution</h5>
            <Pie data={data} />
        </div>
    );
};

export default SizePieChart;
