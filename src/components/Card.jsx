import React,{useState} from 'react'

const Card = (props) => {
    const[showMore, setShowMore] = useState(false);
    const description=showMore?props.info:`${props.info.substring(0,200)}....`;
    function showHandler(){
        setShowMore(!showMore);
    }
  return (
    <div className='w-[350px] h-max flex flex-col items-center rounded-lg shadow-[rgba(0,0,0,0.24)_0px_3px_8px] gap-4 py-3'>
      <img src={props.image} alt={props.name} className='w-[330px] aspect-square object-cover ' />
      <div className='w-[330px] flex flex-col gap-1'>
        <h4 className='text-green-700 font-black'>₹{props.price}</h4>
        <h3 className='font-black text-lg'>{props.name}</h3>
        <p className='font-medium text-sm'>
            {description}
            <span onClick={showHandler} className='text-sky-500 font-medium cursor-pointer'>{showMore?'Show Less':'Read More'}</span>
        </p>
      </div>
      <button onClick={()=>{props.removeTour(props.id)}} className='font-bold border-2 border-red-500 bg-red-100 rounded-lg py-1 px-12 hover:bg-red-500 hover:text-white transition-all delay-200'>Not Interested</button>
    </div>
  )
}

export default Card
