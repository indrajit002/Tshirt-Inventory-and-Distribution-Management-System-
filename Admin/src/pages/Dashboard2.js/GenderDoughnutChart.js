// GenderDoughnutChart.js
import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';

const GenderDoughnutChart = () => {
    const [genderData, setGenderData] = useState({
        maleCount: 0,
        femaleCount: 0
    });

    useEffect(() => {
        fetchGenderData();
    }, []);

    const fetchGenderData = async () => {
        try {
            const response = await fetch('/api/gender-count');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setGenderData({
                maleCount: data.maleCount,
                femaleCount: data.femaleCount
            });
        } catch (error) {
            console.error('Error fetching gender data:', error);
        }
    };

    const getOption = () => {
        return {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['Male', 'Female'],
                textStyle: {
                    color: ['#74788d']
                }
            },
            graphic: [
                {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        text: `${genderData.maleCount + genderData.femaleCount} students`,
                        textAlign: 'center',
                        fontSize: 14,
                        fontWeight: 'bold'
                    }
                }
            ],
            color: ['#02a499', '#f8b425'],
            series: [
                {
                    name: 'Gender Distribution',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: genderData.maleCount, name: 'Male' },
                        { value: genderData.femaleCount, name: 'Female' }
                    ]
                }
            ]
        };
    };

    return (
        <ReactEcharts style={{ height: '350px' }} option={getOption()} />
    );
};

export default GenderDoughnutChart;
