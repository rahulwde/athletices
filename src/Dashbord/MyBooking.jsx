import React, { Suspense, use } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookingCard from './BookingCard';
import { AuthContext } from '../Context/AuthContext';
import Loader from '../components/Loader';
import BookingTable from './BookingTable';
import useJobApi from '../api/useJobApi';
 

const MyBooking = () => {
  const { user} = use(AuthContext)
 const {myBookingPromise}= useJobApi()
  return (
    <div>
    
            <title>MyBooking - Athletics</title>
             
      <Tabs>
    <TabList>
      <Tab> Card</Tab>
      <Tab>Table</Tab>
    </TabList>

    <TabPanel>
<Suspense fallback={<Loader></Loader>}>  <BookingCard myBookingPromise={myBookingPromise(user.email)}></BookingCard>
</Suspense>
    </TabPanel>
    <TabPanel>
     <Suspense fallback={<Loader></Loader>}>  <BookingTable myBookingPromise={myBookingPromise(user.email)}></BookingTable> 
</Suspense>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default MyBooking;