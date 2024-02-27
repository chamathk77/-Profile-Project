import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
         <div className='lg:col-span-2 my-4  '>
            <h1 className='text-2xl sm:text-3xl md-text-4xl font-bold py-2'> Want tips & tricks to optimize your flow ?</h1>
            <p>Sign up to our Newsletter and stay up to date.</p>
         </div> 
         <div className='my-4'>
            <div className='flex flex-col  sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex 2-full w-full rounded-md text-black' type='mail' placeholder='Enter Your Email'/>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-2 ml-5 px-6 text-black'> Notify Me</button>
                <p></p>
            </div>
            <p>We care about the protection of data.Read our <span className='text-[#00df9a]'>        Privacy Policy</span> </p>

         </div>
         
        </div>
    </div>
  )
}

export default Newsletter