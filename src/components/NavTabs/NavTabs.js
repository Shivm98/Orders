
import React from 'react'
import { Tab,Tabs } from 'react-bootstrap'
import OrderDetails from '../OrderDetails/OrderDetails'
import './NavTabs.css'


const NavTabs = (props) => {
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 NavTabs">
            <Tab eventKey="order-details" title="Order Details">
                <OrderDetails/>
            </Tab>
            <Tab eventKey="order-history" title="Order History">
                Order History
            </Tab>
        </Tabs>
    )
}

export default NavTabs
