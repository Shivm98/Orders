import React from 'react'
import {Button, Card, Col, Container, Dropdown, Row, Tab, Table, Tabs} from 'react-bootstrap';
import './Navigation.css'

const Navigation = (props) => {
    return (
         <div className='mt-5 mb-1 bg-light border-white p-3 Navigation'>
             <Row>
                   <Col className='col-auto'>
                         <Dropdown>
                            <Dropdown.Toggle variant="primary" className='w-100' id="dropdown-basic">
                                Create Order Confirmation
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Confirm Entire Order</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Update Line Items</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Reject Entire Order</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                   </Col>
                   <Col className='col-auto'>
                      <Button className='w-100 '>
                        Create Ship Notice
                       </Button>
                    </Col>
                   <Col className='col-auto'>
                         <Button  className='w-100'>
                         Create Service Sheet
                       </Button>
                  </Col>
                   <Col className='col-auto'>
                         <Dropdown>
                            <Dropdown.Toggle variant="primary" className='w-100' id="dropdown-basic">
                               Create Invoice
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                   </Col>
                   <Col className='col-auto'> 
                        <Button  className='w-100'>
                         Create Quality Notification
                       </Button>
                    </Col>
                    </Row>
                </div>
    )
}

export default Navigation
