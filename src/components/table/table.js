import React from 'react';
import { Row, Col, Table } from 'reactstrap';

const  TableStats = ({ posts }) => {
    return (
        <div className="container">
        <h4>SARS-CoV-2 Timeline | South Africa</h4>
        <br />
        <Row>
            <Col sm="12">           

                <Table borderless responsive>
                <thead className="table-head">
                    <tr>
                        <th>Date</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Recoveries</th>
                    </tr>
                </thead>

                <tbody>
                { (posts.length > 0) ? posts.map( (post, index) => {

                return(
                    

                <tr key={index}>
                    <th scope="row">{post.Date}</th>
                    <td>{post.Confirmed}</td>
                    <td>{post.Deaths}</td>
                    <td>{post.Active}</td>
                    <td>{post.Recovered}</td>
                </tr> )}) : <div className="loading">
                        <button class="btn block btn-info">
                            <span class="spinner-border spinner-border-sm"></span> Loading...
                        </button>
                    </div> }
                </tbody> 
        </Table>

              
                </Col>
            </Row>
        </div>
    );
}

export default TableStats;