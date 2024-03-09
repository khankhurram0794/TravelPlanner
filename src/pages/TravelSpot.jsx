import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllSpots } from '../utils/Slices/getDataSlice'
import { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'

const TravelSpot = () => {

   const dispatch = useDispatch()

    const AllSpots = useSelector((store)=>store.getData.searchedspots)

    useEffect(()=>{
        dispatch(getAllSpots())
    },[])

    return (
        <>
        <div className='flex justify-between items-center flex-col gap-5'>
            <div className='text-3xl font-bold'>Travel Spots</div>
            <div className='flex gap-10'>
            <SearchBar/>
            <Filter/>
            </div>
            <div className='w-[1000px] p-5'>
                <div className='flex flex-wrap gap-10'>
                {AllSpots.map((data)=>{
                    console.log(data)
                    return (
                        <>
                        <div className='w-[290px] h-[300px] rounded-2xl shadow-xl'>
                            <h1 className='text-2xl font-semibold'>{data.name}</h1>
                            <h2 className='text-lg font-semibold'>City:- <span className='text-md font-normal'>{data.location.city}</span></h2>
                            <h2 className='text-lg font-semibold'>Country:- <span className='text-md font-normal'>{data.location.country}</span></h2>
                        </div>
                        </>
                    )
                })}
                </div>
            </div> 
        </div>
        </>
    )
}

export default TravelSpot