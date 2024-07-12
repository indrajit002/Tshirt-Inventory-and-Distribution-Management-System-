import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

const TshirtDataBySizes = () => {
    const [tshirtData, setTshirtData] = useState([]);

    useEffect(() => {
        fetchTshirtData();
    }, []);

    const fetchTshirtData = async () => {
        try {
            const response = await fetch('/api/tshirtDataBySizes');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setTshirtData(data);
        } catch (error) {
            console.error('Error fetching T-shirt data by sizes:', error);
        }
    };

    return (
        
        <Table bordered>
            
            <thead>
                <tr>
                    <th><b>T-shirt Size</b></th>
                    <th><b>T-shirt Ordered</b></th>
                    <th><b>T-shirt Distributed</b></th>
                </tr>
            </thead>
            <tbody>
                {tshirtData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.size}</td>
                        <td>{item.ordered}</td>
                        <td>{item.distributed}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TshirtDataBySizes;
