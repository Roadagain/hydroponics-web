import React from 'react';
import { Table } from 'react-bootstrap';

export default class Data extends React.Component {
    render() {
        const data = [];
        for (let i = 0; i < 31; ++i){
            data.push(<tr>
                <th>{new Date(2017, 1, i).toDateString()}</th>
                <th>{i + 1}</th>
                <th>23</th>
                <th>60</th>
                <th>23</th>
            </tr>);
        }
        return <Table striped bordered responsive>
            <thead>
                <tr>
                    <th>日時</th>
                    <th>大きさ[cm]</th>
                    <th>気温[°C]</th>
                    <th>湿度[%]</th>
                    <th>水温[°C]</th>
                </tr>
            </thead>
            <tbody>{data}</tbody>
        </Table>;
    }
}
