import React from 'react';
import Navigation from './Navigation';
import Data from './Data';

export default class MockUp extends React.Component {
    render() {
        return <div>
            <Navigation></Navigation>
            <Data></Data>
        </div>;
    }
}
