import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

class TshirtTypePieChart extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchTshirtData();
  }

  fetchTshirtData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/tshirts");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      this.setState({ data });
    } catch (error) {
      console.error("Error fetching t-shirt data:", error);
    }
  };

  getOption = () => {
    const { data } = this.state;
    const tshirtTypeCount = data.reduce((acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {});

    const chartData = Object.keys(tshirtTypeCount).map((type) => ({
      value: tshirtTypeCount[type],
      name: type,
    }));

    return {
      toolbox: {
        show: false,
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: Object.keys(tshirtTypeCount),
        textStyle: {
          color: ["#74788d"],
        },
      },
      color: [
        "#02a499",
        "#f8b425",
        "#ec4561",
        "#38a4f8",
        "#3c4ccf",
        "#58D68D",
        "#8E44AD",
      ],
      series: [
        {
          name: "Tshirt Types",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: chartData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
  };

  render() {
    return (
      <React.Fragment>
        <ReactEcharts style={{ height: "350px" }} option={this.getOption()} />
      </React.Fragment>
    );
  }
}

export default TshirtTypePieChart;
