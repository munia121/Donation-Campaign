/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CardDefault = ({ item }) => {
    const {id, image, title, category, cardBg, categoryBg, } = item || {};

    return (
        <Link to={`/donation-details/${id}`}>
            <Card style={{ backgroundColor: cardBg }} className="mt-6 ">
                <CardHeader color="blue-gray" className="mt-6 h-60">
                    <img
                        src={image}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Button style={{ backgroundColor: categoryBg }} size="sm" className="mb-4">{category}</Button>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>

                </CardBody>

            </Card>
        </Link>
    );
};

export default CardDefault;