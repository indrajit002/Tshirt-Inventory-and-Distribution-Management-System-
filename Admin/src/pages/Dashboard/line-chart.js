import React from "react"
import ReactApexChart from "react-apexcharts"
import {
    Card,
    CardBody,
  } from "reactstrap"

const LineChart = () => {

    const series = [{
        name: "2022",
        type: 'area',
        data: [20, 34, 27, 59, 37, 26, 38, 25],
    },
    {
        name: "2023",
        data: [10, 24, 17, 49, 27, 16, 28, 15],
        type: 'area',
    },
    {
        name: "2024",
        data: [19, 64, 37, 14, 27, 16, 64, 15],
        type: 'line',
    }]

    const options = {
        chart: {
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        colors: ['#45cb85', '#3b5de7','#FF0000'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: '5',
            dashArray: [4, 0],
        },

        markers: {
            size: 2
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            title: {
                text: 'Month'
            }
        },

        fill: {
            type: 'solid',
            opacity: [0.1, 0.1],
        },

        legend: {
            position: 'top',
            horizontalAlign: 'top-right',
        }
    }

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h4 className="card-title mb-12">Sales Report</h4>

                    <ReactApexChart
                        options={options}
                        series={series}
                        height="280"
                        type="line"
                        className="apex-charts"
                    />
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default LineChart