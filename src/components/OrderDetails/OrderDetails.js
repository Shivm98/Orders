import React from 'react'
import {Button, Card, Col, Container, Dropdown, Row, Tab, Table, Tabs} from 'react-bootstrap'
import Navigation from '../Navigation/Navigation'

const OrderDetails = () => {
    return (
        <div>
            <Row className='mb-5 border-bottom p-3'>
                    <Col>
                        From:
                        <br></br>
                        <address>
                            <strong>	2717 Quincy Street</strong>
                            <br></br>
                            <p>Philadelphia</p>
                            <p>State/Province full	Pennsylvania</p>
                            <p>Zip Code/Postal code	19103</p>
                            <p>Phone Number	267-482-5076</p>
                            <p>Mobile Number	267-600-9332</p>
                        </address>
                    </Col>
                    <Col>
                        To:
                        <br></br>
                        <address>
                            <strong>	2717 Quincy Street</strong>
                            <br></br>
                            <p>Philadelphia</p>
                            <p>State/Province full	Pennsylvania</p>
                            <p>Zip Code/Postal code	19103</p>
                            <p>Phone Number	267-482-5076</p>
                            <p>Mobile Number	267-600-9332</p>
                        </address>
                    </Col>
                    <Col>
                        Purchase Order:
                        <br></br>
                      <address>
                            <strong>	2717 Quincy Street</strong>
                            <br></br>
                            <p>Philadelphia</p>
                            <p>State/Province full	Pennsylvania</p>
                            <p>Zip Code/Postal code	19103</p>
                            <p>Phone Number	267-482-5076</p>
                            <p>Mobile Number	267-600-9332</p>
                        </address>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <h5 className='mb-0'>Comments</h5>
                    <p className='mb-0'>Comment Type: Terms and Conditions</p>
                    <p>Body: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                   
                    <h5 className='mb-0'>Other Information</h5>
                    <p>Body: Lorem ipsum dolor sit amet, consectetur</p>
                </Row>

                <Row className='mb-5'>
                   <Col>
                         <Card className='bg-light border-0'>
                            <Card.Header className=' bg-light'>Ship All Items To</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                <address>
                                    <strong>	2717 Quincy Street</strong>
                                    <br></br>
                                    <p>Philadelphia</p>
                                    <p>State/Province full	Pennsylvania</p>
                                    <p>Zip Code/Postal code	19103</p>
                                    <p>Phone Number	267-482-5076</p>
                                    <p>Mobile Number	267-600-9332</p>
                                </address>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                   </Col>
                   <Col>
                          <Card className='bg-light border-0 h-100'>
                            <Card.Header className=' bg-light'>Bill To</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                <address>
                                    <strong>	2717 Quincy Street</strong>
                                    <br></br>
                                    <p>Philadelphia</p>
                                    <p>State/Province full	Pennsylvania</p>
                                    <p>Zip Code/Postal code	19103</p>
                                    <p>Phone Number	267-482-5076</p>
                                </address>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                   </Col>
                   <Col>
                         <Card className='bg-light border-0 h-100'>
                            <Card.Header className=' bg-light'>Deliver To</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                <address>
                                    <strong>	2717 Quincy Street</strong>
                                    <br></br>
                                    <p>Philadelphia</p>
                                    <p>State/Province full	Pennsylvania</p>
                                    <p>Zip Code/Postal code	19103</p>
                                </address>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                   </Col>
                </Row>
                <h4 className='mt-4'>Line Items</h4>

                <Row>
                    <Col>
                         <Table striped  hover responsive>
                        <thead>
                            <tr>
                                <th>Line #</th>
                                <th>No. Schedule Lines</th>
                                <th>Part #</th>
                                <th>Customer Part #</th>
                                <th>Type</th>
                                <th>Return</th>
                                <th>Revision Level</th>
                                <th>Qty (Unit)</th>
                                <th>Need By</th>
                                <th> Price</th>
                                <th> Subtotal</th>
                                <th> Tax </th>
                                <th> settlement </th>
                                <th> amount invoiced </th>
                                <th> revision </th>
                                <th> actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    placeholder
                                </td>
                                <td>placeholder</td>
                                <td>placeholder</td>
                                <td>placeholder</td>
                                <td>placeholder</td>
                                <td>placeholder</td>
                                <td>placeholder</td>
                                <td>placeholder</td>
                                <td>placeholder</td>
                                <td>placeholder</td>
                                <td>placeholder</td>
                                <td>placeholder</td>
                                <td>placeholder</td>
                                <td>placeholder</td>
                                <td>placeholder</td>
                                
                            </tr>

                           
                        </tbody>
                        </Table>
                    </Col>
                </Row>
                 <Navigation/>
        </div>
    )
}

export default OrderDetails
