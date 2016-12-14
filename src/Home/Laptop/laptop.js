import React from 'react';
import Table from '../DetailsTable/table';
import Request from 'superagent';
import { connect } from 'react-redux'

class Laptop extends React.Component {
    constructor() {
        super();

    }
    componentDidMount() {
        Request.get("http://localhost:38077/device/get-all-devices")
            .then((resp) => {
                console.log(resp.body)
            })
    }
    render() {
        return (
            <div>
                <span>
                    <h1 className="pull-left" style={{ paddingLeft: 23 }}>
                        laptop
                </h1>

                </span>
                <Table />
            </div>
        );
    }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Laptop);
