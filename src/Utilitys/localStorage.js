// local storage a set korar joono 

import { toast } from "react-toastify";

// DonationDetails.jsx file a bosano hoyece
export const saveToLocalStorage = (data) =>{
    const saveData = JSON.parse(localStorage.getItem('donation') ) || [];

    const existData = saveData.find(item => item.id == data.id);
    if(!existData){
        saveData.push(data);
        localStorage.setItem('donation', JSON.stringify(saveData));
        toast.success('Added successfully')
    }
    else{
        toast.warning('already exist vai....')
    }
}

// Local storag er data onno kothao dekhanor jonno
// Donation.jsx a bosano hoyece
export const getFromLocalStorage = () =>{
    const data = JSON.parse(localStorage.getItem('donation') ) || [];
    return data
}