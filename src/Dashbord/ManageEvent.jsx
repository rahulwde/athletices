import React, { Suspense, use } from 'react';
import Loader from '../components/Loader';
import ManageTable from './ManageTable';
import { AuthContext } from '../Context/AuthContext';
import useManageApi from '../api/useManageApi';
 

const ManageEvent = () => {
  const {user}= use(AuthContext)
  const {manageEventPromise} = useManageApi()
  return (
    <div>
       <h2 className='my-4 text-3xl font-bold text-center text-blue-700'>Manage Events</h2>
       <Suspense fallback={<Loader></Loader>}>
       <ManageTable manageEventPromise={manageEventPromise(user.email)}></ManageTable>
        
       </Suspense>
    </div>
  );
};

export default ManageEvent;