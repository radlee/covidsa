import React , { Component } from 'react';
import { Toast, ToastBody, ToastHeader, Row, Col, Container, Card, Button, CardBody, CardHeader, CardFooter, CardText, CardTitle } from 'reactstrap';

export default class Notice extends Component { 
   render () {
    return (

        <Container>
            <Row>
                <Col   sm="6">
                <div>
                        <Card>
                            <CardHeader> The <b>NOVEL-COVID-19 | SA Stats Update</b> Website </CardHeader>
                            <CardBody>
                                <CardTitle>Historical Statistics</CardTitle>
                                <CardText>
                                    This Web App is developed for educational purpose. To get the full updated information please visit <a href="https://www.sacoronavirus.co.za">SAcoronavirus</a>
                                </CardText>
                            </CardBody>
                            <CardFooter>radlee.github.io/covidsa-v3</CardFooter>
                        </Card>
                    </div>
                </Col>

                <Col   sm="6">
                    <div>
                        <Card>
                            <CardHeader> ORIGIN2020 </CardHeader>
                            <CardBody>
                                <CardTitle>SPA & PWA</CardTitle>
                                <CardText>
                                    Modern Web Applications. From minimal web apps to complex systems. Always developing with Mobile-1st approach.
                                </CardText>
                            </CardBody>
                            <CardFooter>Styled | Cultured | Sophisticated</CardFooter>
                        </Card>
                    </div>
               
                </Col>
            </Row>
        </Container>
    )
   }
}