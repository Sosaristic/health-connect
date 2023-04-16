import React from 'react';
import { OverviewBanner, OverviewBooking, OverviewServices } from '../components/Overview';


function OverviewPage() {
  return (
    <div className='w-full flex flex-col gap-5'>
        <OverviewBanner/>
        <OverviewBooking/>
    </div>
  )
}

export default OverviewPage