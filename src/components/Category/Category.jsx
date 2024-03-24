/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import useDonationData from "../../Hooks/useDonationData";
import CardDefault from "../CardDefault/CardDefault";
import CoustomSpnner from "../CoustomSpnner/CoustomSpnner";

const Category = ({filterData, loading}) => {
    
    if(loading){
        return <CoustomSpnner></CoustomSpnner>
    }


    // console.log(data)
    return (
        <div className="grid grid-cols-4 max-w-7xl mx-auto gap-6 mt-10">
            {
                filterData.map(item => <CardDefault item={item} key={item.id}></CardDefault>)
            }
        </div>
    );
};

export default Category;