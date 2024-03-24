
import { Button } from '@material-tailwind/react';
import useLocalStorage from '../../Hooks/useLocalStorage';
import DonationCard from '../../components/DonationCard/DonationCard';
import { useState } from 'react';

const Donation = () => {
    const { localData } = useLocalStorage();
    const [showAll,setShowAll] = useState(4);
    console.log(localData);


    // const handleShowAll = () =>{
    //     setShowAll(showAll)
    // }


    if(localData && localData.length === 0){
        return <p className='text-center mt-10 text-2xl'>No data found...</p>
    }


    return (
        <>
            <div className='grid grid-cols-2 max-w-7xl mx-auto gap-4 mt-10'>
                {
                    localData && localData.slice(0,showAll).map((data) => <DonationCard key={data.id} data={data}></DonationCard>)
                }
            </div>
            {
                localData && localData.length > 4 ? <div className='flex justify-center mt-7'>
                <Button onClick={()=>setShowAll(localData.length)} color="green">{!showAll?'show All': 'show less'}</Button>
            </div>
            : null 
            }

        </>
    );
};

export default Donation;


