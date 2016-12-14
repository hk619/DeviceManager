import React, {
    Component
} from 'react';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import Layout from './Layout';
import Laptop from './Laptop/laptop';
import Computer from './Computer/computer';
import OtherDevices from './Others/other';
import All from './AllDevices/alldevices';

class Home extends Component {
    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    <Route path='/' component={Layout}>
                        <IndexRedirect to="/laptop" />
                        <Route path='laptop' component={Laptop}></Route>
                        <Route path='computer' component={Computer}></Route>
                        <Route path='others' component={OtherDevices}></Route>
                        <Route path='all' component={All}></Route>
                    </Route>
                </Router>
            </div>
        )
    }
}
export default Home;