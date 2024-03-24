import { useEffect, useState } from "react";

const useDonationData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true)
        fetch('/data.json')
        .then(res=>res.json())
        .then(data =>setData(data))
        setLoading(false)
    },[])

    return (
       {data,loading}
    );
};

export default useDonationData;