import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

const DateTable = () => {
    const [datesData, setDatesData] = useState([]);

    useEffect(() => {
        fetchDatesData();
    }, []);

    const fetchDatesData = async () => {
        try {
            const response = await fetch('/api/datesData');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setDatesData(data);
        } catch (error) {
            console.error('Error fetching Dates Data:', error);
        }
    };

    return (
        <Table bordered>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Ordering</th>
                    <th>Purchasing</th>
                    <th>Distribution</th>
                </tr>
            </thead>
            <tbody>
                {datesData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.ordering}</td>
                        <td>{item.purchasing}</td>
                        <td>{item.distribution}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default DateTable;
