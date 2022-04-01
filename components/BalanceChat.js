import styled from 'styled-components';
import {Line} from 'react-chartjs-2';
import React from 'react';

const BalanceChart = () => {

    const data = {
        labels: [
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
            'Jan',
        ],
        datasets: [
            {
                fill: false,
                backgroundColor: '#3773f5',
                borderColor: '#3773f5',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#3773f5',
                pointBackgroundColor: '#3773f5',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#3773f5',
                pointHoverBorderColor: '#3773f5',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [
                    65,
                    59,
                    80,
                    81,
                    56,
                    72,
                    45,
                    67,
                    55,
                    42,
                ],
            }
        ],
    };

    return (
        <Wrapper>
            <Line
                data={data}
                options={options}
                width={400}
                height={400}
            />
        </Wrapper>
    );
};

export default BalanceChart;

const Wrapper = styled.div`

`
