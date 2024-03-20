import React from "react"
import ReactApexChart from "react-apexcharts"
import {
    Card,
    CardBody,
} from "reactstrap"

const scatterChart = () => {

    const series = [{
        name: "Owl coder",
        data: [
            [2, 5], [7, 2], [4, 3], [5, 2], [6, 1], [1, 3], [2, 7], [8, 0], [9, 8], [6, 0], [10, 1]]
    }, {
        name: "Drive Ready",
        data: [
            [15, 13], [7, 11], [5, 8], [9, 17], [11, 4], [14, 12], [13, 14], [8, 9], [4, 13], [7, 7], [5, 8], [4, 3]]
    },{
        name:"Intern",
        data:[
            [20,24],[21,30],[30,8],[8,10],[40,2],[9, 5], [9, 17], [11, 4], [14, 12], [13, 14], [8, 9], [4, 13], [7, 7], [5, 8]
        ]
    },
    {
        name:"Staff",
        data:[
            [5, 8], [3, 2],[1, 4], [9, 6],[7, 2], [3, 8],[6, 9], [4, 1],[2, 7], [8, 3],[9, 3], [5, 1]
        ]
    },
     ]

    const options = {
        chart: {
            height: 350,
            type: 'scatter',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true,
                type: 'xy'
            }
        },

        colors: ['#3b5de7', '#45cb85','#000080','#dc3545'],
        xaxis: {
            tickAmount: 10,

        },
        legend: {
            position: 'top',
        },
        yaxis: {
            tickAmount: 7
        }
    }

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h4 className="card-title mb-4">Monthly Distribution</h4>

                    <ReactApexChart
                        options={options}
                        series={series}
                        height="350"
                        type="scatter"
                        className="apex-charts"
                    />

                </CardBody>
            </Card>


        </React.Fragment>
    )
}

export default scatterChart