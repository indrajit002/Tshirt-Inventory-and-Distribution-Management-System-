import React, { Component } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import ReactApexChart from "react-apexcharts"

class SalesAnalytics extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [38, 26, 14,22],
      options: {
        labels: ["Owl coder", "Drive ready", "Intern","Staff"],
        plotOptions: {
          pie: {
            donut: {
              size: '50%'
            }
          }
        },
        legend: {
          show: false,
        },
        colors: ['#000000','#FFA500','#FFFF00','#808080'],
      },
    }
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Different Technology</h4>

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
                    <div className="col-8">
                      <div className="py-3">
                        <p className="mb-1 text-truncate"><i
                          className="mdi mdi-circle text-black me-1"></i>{" "}Owl coder
                            </p>
                        <h5> 2,652</h5>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="py-3">
                        <p className="mb-1 text-truncate"><i
                          className="mdi mdi-circle text-warning me-1"></i>{" "}Drive ready</p>
                        <h5> 2,284</h5>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="py-3">
                        <p className="mb-1 text-truncate"><i
                          className="mdi mdi-circle text-warning me-1"></i>{" "}Intern</p>
                        <h5> 1,753</h5>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="py-3">
                        <p className="mb-1 text-truncate"><i
                          className="mdi mdi-circle text-secondary me-1"></i>{" "}Staff</p>
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
