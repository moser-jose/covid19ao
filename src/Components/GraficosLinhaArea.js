import React, { Component } from "react";
import Chart from "react-apexcharts";
import Api from '../api/Api';
import moment from 'moment';
import 'moment/locale/pt';

export default class GraficosLinhaArea extends Component {
    constructor(props) {
        super(props);
            this.state = {
            options: {
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    formatter: function (val, opts) {
                        return val
                    },
                    textAnchor: 'middle',
                    distributed: false,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        colors: ['#0a6ae0', '#0ca60c', '#ff0000'],
                        borderRadius:'100px'
                    },
                    background: {
                    enabled: true,
                    foreColor: '#fff',
                    padding: 4,
                    borderRadius: 2,
                    borderWidth: 1,
                    borderColor: '#fff',
                    opacity: 0.9,
                    dropShadow: {
                        enabled: false,
                        top: 1,
                        left: 1,
                        blur: 1,
                        color: '#000',
                        opacity: 0.45
                    }
                    }
                },
                chart: {
                    id: "basic-bar",
                    
                    sparkline: {
                        enabled: false
                  }
                },
                fill: {
                    colors: ['#0a6ae0', '#0ca60c', '#ff0000'],
                    opacity: 0.4,
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
                markers: {
                    width: 12,
                    height: 12,
                    colors: ['#0a6ae0', '#0ca60c', '#ff0000'],
                    strokeWidth: 0,
                    strokeColor: '#fff',
                    fillColors: ['#0a6ae0', '#0ca60c', '#ff0000'],
                    radius: 82,

                },
                labels: {
                    colors: ['#0a6ae0', '#0ca60c', '#ff0000'],
                },
                
                },
                stroke: {
                    curve: 'smooth',
                    colors: ['#0a6ae0', '#0ca60c', '#ff0000'],
                    show: true,
                    lineCap: 'butt',
                    width: 6,
                    dashArray: 0, 
                },
                xaxis: {
                    categories: [],
                    labels:
                        {
                            format:'d/MMM',
                        }
                    
                },
            },
            series: []
        };
        this.buildChartDataRecuperados = this.buildChartDataRecuperados.bind(this);
        this.buildChartData= this.buildChartData.bind(this)
    }

    buildChartDataRecuperados = (data) => {
        
        moment.locale('pt');
        let chartDataActive = [];
        let lastDataPoint;
        for (let date in data) {
          if (lastDataPoint) {
            let newDataPoint = data[date] - lastDataPoint;
            chartDataActive.push(newDataPoint);
          }
          lastDataPoint = data[date]; 
        } 
        return chartDataActive;
        };
        
    buildChartData = (data) => {
        moment.locale('pt');
        let chartDataActive = [];
        let lastDataPoint;
        for (let date in data) {
          if (lastDataPoint) {
            let newDataPoint = moment(new Date(date)).format('L');
            chartDataActive.push(newDataPoint);
          }
          lastDataPoint = data[date]; 
        } 
        return chartDataActive;
        };
    componentDidMount() {
      
            let isMounted = true;
        
            const getHistorico = async () => {
                let res =await Api.getPaisHistorico("angola");
                let Legenda = this.buildChartData(res.timeline.cases);
                let casos = this.buildChartDataRecuperados(res.timeline.cases);
                let recuperados = this.buildChartDataRecuperados(res.timeline.recovered);
                let mortes = this.buildChartDataRecuperados(res.timeline.deaths);
                if (isMounted) {
                    this.setState({
                        series:[
                            {
                                name:"Total de casos",
                                data:casos
                            },
                            {
                                name:"Total de Recuperados",
                                data:recuperados
                            },
                            {
                                name:"Total de Mortes",
                                data:mortes
                            }
                        ]
                    });
                    this.setState({
                        options:{
                            xaxis:{
                                categories:Legenda,
                            }
                        }
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
              type="area"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

