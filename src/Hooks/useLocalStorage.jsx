import  { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../Utilitys/localStorage';

const useLocalStorage = () => {
    const [localData,setLocalData] = useState();

    console.log(localData)
    useEffect(()=>{
        setLocalData(getFromLocalStorage());
    },[])
    return (
        {localData}
    );
};

export default useLocalStorage;