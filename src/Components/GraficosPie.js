import React, { Component } from "react";
import Chart from "react-apexcharts";
import Api from '../api/Api';

export default class GraficosLinhaArea extends Component {
    constructor(props) {
        super(props);
            this.state = {
                options: {
                    chart: {
                      width: 380,
                      type: 'pie',
                    },
                    legend: {
                        show: true,
                        showForSingleSeries: true,
                        showForNullSeries: true,
                        showForZeroSeries: true,
                        position: 'bottom',
                        horizontalAlign: 'center', 
                        floating: false,
                        fontSize: '16px',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        formatter: undefined,
                        inverseOrder: false,
                        width: undefined,
                        height: undefined,
                        tooltipHoverFormatter: undefined,
                        offsetX: 0,
                        offsetY: 0,
                        labels: {
                            colors: ['#0ca60c','#f1c40f', '#ff0000'],
                        },
                        },
                    fill: {
                        colors: ['#0ca60c','#f1c40f', '#ff0000']
                      },
                    labels: ['Recuperados', 'Activos', 'Mortes'],
                    colors:['#0ca60c','#f1c40f', '#ff0000'],
                    dataLabels: {
                        style: {
                            fontSize: '14px',
                            fontFamily: 'Poppins',
                            fontWeight: 'bold',
                        },
                    },
                    responsive: [{
                      breakpoint: 480,
                      options: {
                        chart: {
                          width: 200
                        },
                      }
                    }]
                },
            series: [1,1,1]
        };
        this.buildChartDataRecuperados = this.buildChartDataRecuperados.bind(this);
    }

    buildChartDataRecuperados = (data) => {
        let chartDataActive = [];
        chartDataActive.push(data.recovered);
        chartDataActive.push(data.active);
        chartDataActive.push(data.deaths);
        return chartDataActive;
        };
    componentDidMount() {
            let isMounted = true;
            const getHistorico = async () => {
                let res =await Api.getAngolaPais();
                let casos = this.buildChartDataRecuperados(res);
                if (isMounted) {
                    this.setState({
                        series:casos
                    });
                }
            }
            getHistorico();
            return () => { isMounted = false };
        }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="pie"
              width="480px"
            />
          </div>
        </div>
      </div>
    );
  }
}

