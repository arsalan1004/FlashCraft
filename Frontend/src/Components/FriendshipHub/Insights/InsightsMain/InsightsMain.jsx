import React from 'react'
import boy from '../../../../Assets/Images/boy.png';
import FriendBox from './FriendBox';

function InsightsMain() {

  const friends = [
    {
        name: 'Muhammad Amir',
        userName: '@muhammadAmir',
    },
    {
        name: 'Fahad Umer',
        userName: '@fahad_umer',
    },
    {
        name: 'Malik Shaz',
        userName: '@shaz.123',
    },
    {
        name: 'Khalid Zain',
        userName: '@khalidX',
    }

]

  return (
    <div className='h-screen w-3/4 pt-5  text-secondary overflow-y-auto '>
      
      {/* User Profile */}
      <div className='flex items-start mx-3 pl-10 '>
        {/* Image */}
        <div>
          <img src={boy} alt='userImage' className='relative z-10 bg-[#6BB4C5] rounded-full
                        w-[150px] h-[150px] mt-3'
            />
        </div>

         {/* User Detail Section */}
        <div className='px-6 pt-5'>
          <h1 className='font-bold  text-2xl tracking-wide font-Itim '>Muhammad Amir</h1>
          <h2 className='font-Itim italic text-lg'>@muhammad_amir</h2>
          <div className='flex items-center text-center mt-5 text-Poppins'>
                <div className='py-0 pr-4 border-r-slate-300 border-r-[1px]'>
                    <h3 className='mb-1 text-slate-500 font-medium'>Friends</h3>
                    <p className='text-sm text-slate-500'>10</p>
                </div>
                <div className='py-0 px-4 border-r-slate-300 border-r-[1px]'>
                    <h3 className='mb-1 font-medium text-slate-500'>Friend Requests</h3>
                    <p className='text-sm text-slate-500' >15 </p>
                </div>
                <div className='py-0 px-4'>
                    <h3 className='mb-1 font-medium text-slate-500'>Date Joined</h3>
                    <p className='text-sm text-slate-500'>24-Oct-2023</p>
                </div>
            </div>
        
        </div>
      
      </div>

  

      <div className='w-full pl-0 mt-8 flex border-t-2 border-b-2 border-t-slate-300 border-b-slate-300'>
        <div className='h-10 w-1/3 border-r-2 border-r-slate-300 flex-center'>
          <span className='text-center text-secondary font-bold tracking-wide'>Safwaat Friends</span>
        </div>
        <div className='h-10 w-1/3 border-r-2 border-r-slate-300 flex-center'>
          <span className='text-center text-secondary font-bold tracking-wide'>Pending Requests</span>
        </div>
        <div className='h-10 w-1/3 border-r-2 border-r-slate-300 flex-center'>
          <span className='text-center text-secondary font-bold tracking-wide'>Sent Requests</span>
        </div>
      </div>

      {/* Friend Box Section */}
      <div className='mt-8 pl-5'>
       <div className='rounded-xl w-3/4 bg-primary-200 p-1'>
        {/* FriendBox */}
        {
          friends.map(
            (val,i) => (
              <FriendBox
                key={i} 
                name={val.name}
                userName={val.userName}  
              />
            )
          )
        }
       </div>
        
      </div>


    </div>
  )
}

export default InsightsMain