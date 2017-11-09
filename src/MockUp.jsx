import React from 'react';
import Navigation from './Navigation';
import Data from './Data';
import GraphImage from './GraphImage';

export class Home extends React.Component {
    render() {
        return (<div/>);
    }
}

export class Measured extends React.Component {
    render() {
        return (<Data/>);
    }
}

export class Analysed extends React.Component {
    render() {
        return (<GraphImage src="img.png" desc="test"/>);
    }
}
