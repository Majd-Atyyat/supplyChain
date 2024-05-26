import React from 'react';

import GaugeComponent from 'react-gauge-component'


const GaugeChartComponent = () => {
    return (
        <div className="gauge-chart-container">
            <GaugeComponent
                arc={{
                    subArcs: [
                        {
                            limit: 20,
                            color: '#ec2225',
                            showTick: true
                        },
                        {
                            limit: 40,
                            color: '#ffba00',
                            showTick: true
                        },
                        {
                            limit: 60,
                            color: '#67bc46',
                            showTick: true
                        },
                        {
                            limit: 100,
                            color: '#0190df',
                            showTick: true
                        },
                    ]
                }}
                value={70}
            />
        </div>
    );
};

export default GaugeChartComponent;
