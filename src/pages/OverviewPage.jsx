import React from 'react';
import { OverviewBanner, OverviewServices } from '../components/Overview';


function OverviewPage() {
  return (
    <div className='w-full flex flex-col gap-5'>
        <OverviewBanner/>
        <OverviewServices/>
    </div>
  )
}

export default OverviewPage