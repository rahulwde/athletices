import React, { Suspense, use } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookingCard from './BookingCard';
import { myBookingPromise } from '../api/application';
import { AuthContext } from '../Context/AuthContext';
import Loader from '../components/Loader';

const MyBooking = () => {
  const { user} = use(AuthContext)
  return (
    <div>
    
      <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
<Suspense fallback={<Loader></Loader>}>  <BookingCard myBookingPromise={myBookingPromise(user.email)}></BookingCard>
</Suspense>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default MyBooking;