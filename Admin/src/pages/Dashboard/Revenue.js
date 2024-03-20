import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { VectorMap } from "react-jvectormap"

const map = React.createRef(null)

const Overview = () => {
    
    return (
        <React.Fragment>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <h4 className="card-title mb-4" style={{color:'red'}}>T-shirt taken History</h4>

                        <Row>
                            {/* <Col sm={6}>
                                <div id="usa-vectormap" style={{ height: '230px' }}>
                                    <VectorMap
                                        map='us_aea'
                                        backgroundColor="transparent"
                                        ref={map}
                                        handleWindowResize={true}
                                        containerStyle={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                        regionStyle={{
                                            initial: {
                                                fill: '#556ee6'
                                            },
                                        }}
                                        markerStyle={{
                                            initial: {
                                                r: 9,
                                                fill: '#556ee6',
                                                fillOpacity: 0.9,
                                                stroke: '#fff',
                                                strokeWidth: 7,
                                                strokeOpacity: 0.4
                                            },
                                            hover: {
                                                stroke: '#fff',
                                                fillOpacity: 1,
                                                strokeWidth: 1.5
                                            }
                                        }}
                                        containerClassName="map"
                                    />
                                </div>
                            </Col> */}

                            <Col sm={11} className="ms-auto">
                                <div className="mt-4 mt-sm-0">
                                    <p>Last month taken history</p>

                                    <div className="d-flex align-items-start py-3">
                                        <div className="flex-1">
                                            <p className="mb-2">Owl coder</p>
                                            <h5 className="mb-0"> 2,256</h5>
                                        </div>
                                        <div className="ms-auto">
                                            23.33 % <i className="mdi mdi-arrow-up text-success ms-1"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start py-3 border-top">
                                        <div className="flex-1">
                                            <p className="mb-2">Drive Ready</p>
                                            <h5 className="mb-0"> 1,853</h5>
                                        </div>
                                        <div className="ms-auto">
                                            19.17 % <i className="mdi mdi-arrow-up text-success ms-1"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start py-3 border-top">
                                        <div className="flex-1">
                                            <p className="mb-2">Intern</p>
                                            <h5 className="mb-0"> 1555</h5>
                                        </div>
                                        <div className="ms-auto">
                                            16.08 % <i className="mdi mdi-arrow-up text-success ms-1"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start py-3 border-top">
                                        <div className="flex-1">
                                            <p className="mb-2">Staff</p>
                                            <h5 className="mb-0"> 4000</h5>
                                        </div>
                                        <div className="ms-auto">
                                            41.37 % <i className="mdi mdi-arrow-up text-success ms-1"></i>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default Overview;