import React from 'react';
import { Card, CardBody } from 'reactstrap';

const MetricCard = ({ label, value }) => {
    return (
        <Card>
            <CardBody>
                <div>
                    <p className="text-muted fw-medium mt-1 mb-2">{label}</p>
                    <h4>{value}</h4>
                </div>
            </CardBody>
        </Card>
    );
};

export default MetricCard;
