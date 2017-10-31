import React from 'react';
import { Table } from 'react-bootstrap';

export default class Data extends React.Component {
    render() {
        const data = [];
        for (let i = 0; i < 31; ++i){
            const dateStr = '2017/01/' + (i < 10 ? '0' : '') + (i + 1);
            data.push(<tr>
                <th className="text-right">{dateStr}</th>
                <th className="text-right">{i + 1}</th>
                <th className="text-right">23</th>
                <th className="text-right">60</th>
                <th className="text-right">23</th>
            </tr>);
        }
        return <Table striped bordered responsive>
            <thead>
                <tr>
                    <th className="text-center">日時</th>
                    <th className="text-center">大きさ[cm]</th>
                    <th className="text-center">気温[°C]</th>
                    <th className="text-center">湿度[%]</th>
                    <th className="text-center">水温[°C]</th>
                </tr>
            </thead>
            <tbody>{data}</tbody>
        </Table>;
    }
}
