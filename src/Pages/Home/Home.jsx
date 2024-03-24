import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import useDonationData from "../../Hooks/useDonationData";
// import CoustomSpnner from "../../components/CoustomSpnner/CoustomSpnner";

const Home = () => {

    const [value, setValue] = useState('');
    const {data,loading} = useDonationData()
    const [filterData,setFilterData] = useState([]);
    console.log(value)

    useEffect(()=>{
        setFilterData(data)
    },[data])

    const handlesearch = () =>{
        if(value.trim() !=''){
            const filtered = data.filter((item) =>item.category.toLowerCase().includes(value.toLocaleLowerCase()));
            setFilterData(filtered)
        }
        else{
            setFilterData(data);
        }
    }

    


    return (
        <div>
            <Banner setValue={setValue} handlesearch={handlesearch}></Banner>
            <Category filterData={filterData} loading={loading}></Category>
        </div>
    );
};

export default Home;