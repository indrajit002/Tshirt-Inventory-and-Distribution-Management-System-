import React, { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';

import Breadcrumbs from '../../components/Common/Breadcrumb';
import MetricCard from './MetricCard';
import TshirtTable from './TshirtTable';
import GenderDoughnutChart from './GenderDoughnutChart';
import SizePieChart from './SizePieChart';
import TshirtDataBySizes from './TshirtDataBySizes';
import DateTable from './DateTable';

const Dashboard2 = () => {
    const [metrics, setMetrics] = useState({
        tshirtOrdered: 0,
        tshirtNeeded: 0,
        tshirtDistributed: 0,
        tshirtReturned: 0,
        tshirtExchanged: 0,
        tshirtLeft: 0
    });
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null);     // Error state

    useEffect(() => {
        fetchMetricsData();
    }, []);

    const fetchMetricsData = async () => {
        try {
            const endpoints = [
                '/api/orders',
                '/api/needed',
                '/api/distributed',
                '/api/returned',
                '/api/exchanged',
                '/api/left'
            ];

            const promises = endpoints.map(endpoint =>
                fetch(endpoint)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => data.length > 0 ? data.reduce((acc, item) => acc + item.quantity, 0) : 0)
            );

            const [
                tshirtOrderedCount,
                tshirtNeededCount,
                tshirtDistributedCount,
                tshirtReturnedCount,
                tshirtExchangedCount,
                tshirtLeftCount
            ] = await Promise.all(promises);

            setMetrics({
                tshirtOrdered: tshirtOrderedCount,
                tshirtNeeded: tshirtNeededCount,
                tshirtDistributed: tshirtDistributedCount,
                tshirtReturned: tshirtReturnedCount,
                tshirtExchanged: tshirtExchangedCount,
                tshirtLeft: tshirtLeftCount
            });

            setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
            console.error('Error fetching Metrics Data:', error);
            setError(error.message);
            setLoading(false); // Set loading to false in case of error
        }
    };

    if (loading) {
        return <p>Loading...</p>; // Display a loading message while fetching data
    }

    if (error) {
        return <p>Error: {error}</p>; // Display an error message if data fetching fails
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumbs title="Dashboard" breadcrumbItem="Dashboard 2" />
                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col md={2}>
                                <MetricCard label="Tshirt Ordered" value={metrics.tshirtOrdered} />
                            </Col>
                            <Col md={2}>
                                <MetricCard label="Tshirt Needed" value={metrics.tshirtNeeded} />
                            </Col>
                            <Col md={2}>
                                <MetricCard label="Tshirt Distributed" value={metrics.tshirtDistributed} />
                            </Col>
                            <Col md={2}>
                                <MetricCard label="Tshirt Returned" value={metrics.tshirtReturned} />
                            </Col>
                            <Col md={2}>
                                <MetricCard label="Tshirt Exchanged" value={metrics.tshirtExchanged} />
                            </Col>
                            <Col md={2}>
                                <MetricCard label="Tshirt Left" value={metrics.tshirtLeft} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Row>
                            <Col xl={6}>
                                <GenderDoughnutChart />
                            </Col>
                            <Col xl={6}>
                                <SizePieChart />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={8}>
                        <TshirtTable />
                    </Col>
                    <Col lg={10}>
                        <TshirtDataBySizes />
                    </Col>
                    <Col lg={10}>
                        <DateTable />
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

export default Dashboard2;
