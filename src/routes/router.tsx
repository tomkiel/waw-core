import React, { Component } from 'react';
import { HashRouter} from 'react-router-dom';

import Auth from './auth';

class Routes extends Component {
    render() {
        return (
            <HashRouter>
                <Auth />
            </HashRouter>
        )
    }
}

export default Routes;