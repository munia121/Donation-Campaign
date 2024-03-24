/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

const DonationCard = ({data}) => {
    console.log(data)
    return (
        <Card className="w-full max-w-[48rem] flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src={data.image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    <button className='btn'>{data.category}</button>
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                   {data.title}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    <p>${data.price}</p>
                </Typography>
                <a href="#" className="inline-block">
                    <Button  variant="text" className="flex items-center gap-2 btn-primary btn text-white">
                        View Details
                    </Button>
                </a>
            </CardBody>
        </Card>
    );
};

export default DonationCard;