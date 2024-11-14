import React from 'react'
import Card from './Card'
const Tours = ({tours,removeTour}) => {
  return (
    <div className='w-[1080px] py-10 mx-auto flex flex-col gap-10 items-center'>
      <h1 className='text-center text-4xl font-extrabold border-dashed border-8 border-indigo-400 px-16 py-4 w-fit rounded-xl'>Plan with Mahi</h1>
      <div className='flex gap-2 justify-center items-center flex-wrap'>
        {
          tours.map((tour)=>{
            return <Card {...tour} removeTour={removeTour} className=''></Card>
          })
        }
      </div>
    </div>
  )
}

export default Tours
