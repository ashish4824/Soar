import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData, fetchTransactions } from '../../../actions';

import { useSelector } from 'react-redux';

const CreditCard = lazy(() => import('./CreditCard'));
const BarChartComponent = lazy(() => import('./BarChartComponent'));
const ExpensePieChart = lazy(() => import('./ExpensePieChart'));
const BalanceHistoryChart = lazy(() => import('./BalanceHistoryChart'));
const QuickTransferCard = lazy(() => import('./QuickTransferCard'));
const RecentTransactions = lazy(() => import('./RecentTransactions'));

export default function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchTransactions());
  }, [dispatch]);

  const userData = useSelector((state) => state.user);
  const transactions = useSelector((state) => state.transactions);

  return (
    <div className='w-[96%] m-auto'>
      <div className='flex flex-wrap xl:space-x-6 items-center'> 
        <Suspense fallback={<div>Loading...</div>}>
          <CreditCard />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <RecentTransactions />
        </Suspense>
      </div>

      <div className='flex flex-wrap xl:space-x-6 items-center'>
        <Suspense fallback={<div>Loading...</div>}>
          <BarChartComponent />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ExpensePieChart />
        </Suspense>
      </div>

      <div className='flex flex-wrap items-center  xl:space-x-6'>
        <Suspense fallback={<div>Loading...</div>}>
          <QuickTransferCard />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <BalanceHistoryChart />
        </Suspense>
      </div>
    </div>
  );
}
