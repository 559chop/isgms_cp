import React from 'react';
// reactstrap components
import { Row, Col } from 'reactstrap';
//local components
import Dash from '../components/Dash/Dash';
import TicketForm from '../components/Form/TicketForm';
import MultiBarChart from '../components/Chart/MultiBarChart';
//data
import { iTicketDashItems } from '../assets/data/iTicketDashData';
import { chartITicket } from '../assets/data/charts/';

const testPage = () => {
    return (
        <>
            <div className='content'>this is a test page</div>
        </>
    );
};

export default testPage;
