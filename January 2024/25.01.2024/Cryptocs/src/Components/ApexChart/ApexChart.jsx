import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';


const ApexChart = ({ coinHistory }) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        if (coinHistory) {
            const newChartData = {
                series: [
                    {
                        name: 'USD',
                        data: coinHistory.map((coin) => parseFloat(coin.priceUsd).toFixed(4)),
                    },
                ],
                options: {
                    chart: {
                        height: 350,
                        type: 'area',
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    stroke: {
                        curve: 'smooth',
                    },
                    xaxis: {
                        type: 'datetime',
                        categories: coinHistory.map((coin) => coin.date),
                    },
                    tooltip: {
                        x: {
                            format: 'dd/MM/yy',
                        },
                    },
                },
            };

            setChartData(newChartData);
        }
    }, [coinHistory]);

    if (!chartData) {
        // You can return a loading indicator or null until data is available
        return null;
    }

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="area"
                    height={450}
                    width={1000}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexChart;
