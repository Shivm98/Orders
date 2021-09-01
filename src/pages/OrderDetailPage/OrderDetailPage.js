import React, { useEffect } from 'react'
import './OrderDetailPage.css';
import {Button, Card, Col, Container, Dropdown, Row, Tab, Table, Tabs} from 'react-bootstrap'
import NavTabs from '../../components/NavTabs/NavTabs';
import Navigation from '../../components/Navigation/Navigation';

const OrderDetailPage = (props) => {
    const id = props.match.params.id;
    console.log(id);
    useEffect(() => {

    })
    return (
        <div className="order-detail-page">
            <Container >
                <h1 className='mt-5 py-4 border-bottom'>Purchase Order: {id}</h1>
                
               <Navigation/>
                <NavTabs />
            </Container>
        </div>
    )
}

export default OrderDetailPage
