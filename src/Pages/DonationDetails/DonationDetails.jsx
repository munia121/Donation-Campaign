import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDonationData from '../../Hooks/useDonationData';
import {
    Card,
    CardHeader,
    CardBody,
    // CardFooter,
    Typography,
    // Avatar,
    // Tooltip,
    Button,
} from "@material-tailwind/react";
import { saveToLocalStorage } from '../../Utilitys/localStorage';
import CoustomSpnner from '../../components/CoustomSpnner/CoustomSpnner';

const DonationDetails = () => {

    const { id } = useParams();
    const { data, loadData } = useDonationData();
    const [singleData, setSingleDAta] = useState()
    // console.log(id)


    // Local storage settings
    const handleDonation = () => {
        saveToLocalStorage(singleData) 
    }


    

    useEffect(() => {
        const singleData = data.find(item => item.id == id);
        setSingleDAta(singleData)
    }, [data, id])

    const { image, title, categoryBg, description, price } = singleData || {}


    if(loadData){
        return <CoustomSpnner></CoustomSpnner>
    }

    return (
        <Card className="mt-10 max-w-7xl rounded-md mx-auto overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none relative"
            >
                <img className='w-full h-[550px]'
                    src={image}
                    alt="ui/ux review check"
                />
                <div className='absolute bottom-0 bg-opacity-40 bg-black w-full h-28 pl-5 '>
                    <Button onClick={handleDonation} style={{ backgroundColor: categoryBg }} className='mt-8 text-xl' >Donated ${price}</Button>

                </div>
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray">
                    {title}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    {description}
                </Typography>
            </CardBody>

        </Card>
    );
};

export default DonationDetails;