import React from "react"
import { Row, Col, CardBody, Card, Progress } from "reactstrap"
import { Link } from "react-router-dom"

//Import Components
import LineChart from "./line-chart"
import RevenueChart from "./revenue-chart"
import SalesAnalytics from "./sales-analytics"
import ScatterChart from "./scatter-analytics"
import LatestTransaction from "./latest-transaction"

//Import Image
import widgetImage from "../../assets/images/widget-img.png"
import Overview from "./Overview";
import Reviews from './Reviews';
import Revenue from './Revenue';
import Inbox  from './Inbox';

const Dashboard = () => {

  return (
    <React.Fragment>
      <div className="page-content">
  
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Dashboard</h4>

              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">Welcome to the technical hub Dashboard</li>
                </ol>
              </div>

            </div>
          </div>
        </Row>

        <Row>
          <Col lg={3}>
            <Card>
              <CardBody>
                <div className="d-flex align-items-start">
                  <div className="avatar-sm font-size-20 me-3">
                    <span className="avatar-title bg-soft-primary text-primary rounded">
                      <i className="mdi mdi-tag-plus-outline"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">New Orders</div>
                  </div>
                </div>
                <h4 className="mt-4">1,000</h4>
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0"><span className="text-success me-2"> 0.28% <i
                      className="mdi mdi-arrow-up"></i> </span></p>
                  </div>
                  <div className="col-5 align-self-center">

                    <Progress
                      value="62"
                      color="primary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div className="d-flex align-items-start">
                  <div className="avatar-sm font-size-20 me-3">
                    <span className="avatar-title bg-soft-primary text-primary rounded">
                      <i className="mdi mdi-account-multiple-outline"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">New Users</div>

                  </div>
                </div>
                <h4 className="mt-4">20,000</h4>
                <Row>
                  <div className="col-7">
                    <p className="mb-0"><span className="text-success me-2"> 0.16% <i
                      className="mdi mdi-arrow-up"></i> </span></p>
                  </div>
                  <div className="col-5 align-self-center">
                    <Progress
                      value="62"
                      color="success"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <LineChart />

          </Col>
          <Col lg={3}>
            <RevenueChart />
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <SalesAnalytics />
          </Col>
          <Col lg={4}>
            <ScatterChart />
          </Col>

           
        
         
        </Row>


      </div>
    </React.Fragment>
  )
}

export default Dashboard