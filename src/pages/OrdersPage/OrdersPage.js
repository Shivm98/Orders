import React from 'react';
import {Container,Table} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import './OrdersPage.css'


const OrdersPage = (props) => {
    return (
        <div className="orders-page">
            <Container>
                <h1 className='mb-4'>Orders and Releases</h1>
                    <h2 className='mb-3'>Orders and Releases</h2>
                <div className='main'>
                    <Table striped  hover responsive>
                        <thead>
                            <tr>
                                <th></th>
                                <th>type</th>
                                <th>order number</th>
                                <th>ver</th>
                                <th>customer</th>
                                <th>inquiries</th>
                                <th>ship to address</th>
                                <th>ordering address</th>
                                <th>collaboration request</th>
                                <th> amount</th>
                                <th> date</th>
                                <th> order status </th>
                                <th> settlement </th>
                                <th> amount invoiced </th>
                                <th> revision </th>
                                <th> actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    placeholder
                                </td>
                                <td><Link to={`1234`}>1234</Link></td>
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

                            <tr>
                                <td></td>
                                <td>
                                    placeholder
                                </td>
                                <td><Link to={`1234`}>1234</Link></td>
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

                            <tr>
                                <td></td>
                                <td>
                                    placeholder
                                </td>
                                <td><Link to={`1234`}>1234</Link></td>
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

                            <tr>
                                <td></td>
                                <td>
                                    placeholder
                                </td>
                                <td><Link to={`1234`}>1234</Link></td>
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
                </div>
            </Container>
        </div>
    )
}

export default OrdersPage
