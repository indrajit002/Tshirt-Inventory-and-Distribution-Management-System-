import React, { Component } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import ReactApexChart from "react-apexcharts"

class SalesAnalytics extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [38, 26, 14],
      options: {
        labels: ["Online", "Offline", "Marketing"],
        plotOptions: {
          pie: {
            donut: {
              size: '75%'
            }
          }
        },
        legend: {
          show: false,
        },
        colors: ['#3b5de7', '#45cb85', '#eeb902'],
      },
    }
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">taken t shirt Analytics</h4>

            <Row className="align-items-center">
              <Col sm={6}>
                <ReactApexChart
                  options={this.state.options}
                  series={this.state.series}
                  type="donut"
                  height={245}
                  className="apex-charts"
                />
              </Col>
              <Col sm={6}>
                <div>
                  <Row>
                    <div className="col-6">
                      <div className="py-3">
                        <p className="mb-1 text-truncate"><i
                          className="mdi mdi-circle text-primary me-1"></i>{" "}owl coder Tshirt
                            </p>
                        <h5>2,652</h5>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="py-3">
                        <p className="mb-1 text-truncate"><i
                          className="mdi mdi-circle text-success me-1"></i>{" "}Drive Ready Tshirt</p>
                        <h5> 2,284</h5>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="py-3">
                        <p className="mb-1 text-truncate"><i
                          className="mdi mdi-circle text-warning me-1"></i>{" "}Project Space Tshirt</p>
                        <h5> 1,753</h5>
                      </div>
                    </div>
                  </Row>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

export default SalesAnalytics
