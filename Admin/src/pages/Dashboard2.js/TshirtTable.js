import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

const TshirtTable = () => {
    const [tshirtTypes, setTshirtTypes] = useState([]);
    const [tshirtDistributed, setTshirtDistributed] = useState([]);

    useEffect(() => {
        fetchTshirtTypes();
        fetchTshirtDistributed();
    }, []);

    const fetchTshirtTypes = async () => {
        try {
            const response = await fetch('/api/tshirt-types');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            setTshirtTypes(data);
        } catch (error) {
            console.error('Error fetching T-shirt types:', error);
        }
    };

    const fetchTshirtDistributed = async () => {
        try {
            const response = await fetch('/api/tshirt-distributed');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            setTshirtDistributed(data);
        } catch (error) {
            console.error('Error fetching T-shirt distributed data:', error);
        }
    };

    return (
        <div>
            <h3>All T-shirt Types</h3>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>T-shirt Type</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {tshirtTypes.map((tshirt, index) => (
                        <tr key={tshirt._id}>
                            <th scope="row">{index + 1}</th>
                            <td><strong>{tshirt.name}</strong></td>
                            <td><strong>{tshirt.quantity}</strong></td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h3>Distributed T-shirts from Orders</h3>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>T-shirt Type</th>
                        <th>Distributed Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {tshirtDistributed.map((tshirt, index) => (
                        <tr key={tshirt._id}>
                            <th scope="row">{index + 1}</th>
                            <td><strong>{tshirt.name}</strong></td>
                            <td><strong>{tshirt.quantity}</strong></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default TshirtTable;
