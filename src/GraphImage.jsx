import React from 'react';
import {Image, Panel} from 'react-bootstrap';

export default class GraphImage extends React.Component {
    render() {
        return (
            <Panel>
                <Image src={this.props.src} thumbnail/>
                <p className="description">{this.props.desc}</p>
            </Panel>
        );
    }
}
