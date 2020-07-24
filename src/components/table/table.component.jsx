import React, { Component } from 'react';
import axios  from 'axios';
import { Row, Col, Table, Spinner } from 'reactstrap';

export default class StatsTable extends Component { 

    constructor(props) {
        super(props)

        this.state =  {
            dataStats: [],
            theads: [{Date  : '', Cases: '', Deths: '', Recovered: '', Active: ''}]

        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/stats')
        .then(response => this.setState({ dataStats: response.data.reverse() }, console.log("Response", response.data)))       
    }

    
    
    renderTableData() {

    const { dataStats } = this.state;

    return dataStats.map((data, index) => {
        
        return (
          <tr key={index}>
            <td>{data.Date}</td>
            <td>{data.Confirmed}</td>
            <td>{data.Deaths}</td>
            <td>{data.Active}</td>
            <td>{data.Recovered}</td>
          </tr>
        )
    })
}

renderTableHeader() {
    let header = Object.keys(this.state.theads[0])
    return header.map((key, index) => {
      return <th className="heading" key={index}>{key.toUpperCase()}</th>
    })
}
  
render() {
    const { posts } = this.dataStats;
    return (
        <div className="container">
            <h4>SARS-CoV-2 Timeline | South Africa</h4>
            <br />
            <Row>
                <Col sm="12">
                { (posts.length > 0) ? posts.map( (post, index) => {

                    return (
                        <Table responsive>
                        <thead>
                            <tr>
                            {this.renderTableHeader()}
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </Table>
                    )}) : <button class="btn btn-info">
                    <Spinner color="light" />{'Loading...'}
                </button> }
                   
                </Col>
            </Row>
        </div>
    )
    }
}