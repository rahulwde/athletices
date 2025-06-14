import React, { Suspense, use } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookingCard from './BookingCard';
import { myBookingPromise } from '../api/application';
import { AuthContext } from '../Context/AuthContext';
import Loader from '../components/Loader';
import BookingTable from './BookingTable';

const MyBooking = () => {
  const { user} = use(AuthContext)
  console.log(user.accessToken)
  return (
    <div>
    
      <Tabs>
    <TabList>
      <Tab> Card</Tab>
      <Tab>Table</Tab>
    </TabList>

    <TabPanel>
<Suspense fallback={<Loader></Loader>}>  <BookingCard myBookingPromise={myBookingPromise(user.email,user.accessToken)}></BookingCard>
</Suspense>
    </TabPanel>
    <TabPanel>
     <Suspense fallback={<Loader></Loader>}>  <BookingTable myBookingPromise={myBookingPromise(user.email , user.accessToken)}></BookingTable> 
</Suspense>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default MyBooking;