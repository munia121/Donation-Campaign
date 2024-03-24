/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import { Input, Button } from "@material-tailwind/react";
import bannerImg from '../../assets/banner.png'


const Banner = ({setValue,handlesearch}) => {

    return (
        <div className="h-[450px] relative flex flex-col justify-center items-center border-green-500 ">

            <div style={{backgroundImage: `url(${bannerImg})`}} className={`absolute inset-0  bg-cover bg-center opacity-15 `}>

            </div>

            <Typography variant="h2">I Grow By Helping People In Need</Typography>
            <div className="relative flex w-full max-w-[24rem] mt-4">
                <Input
                    type="email"
                    label="Email Address"
                    onChange={(e) =>setValue(e.target.value)}
                    className="pr-20 "
                    containerProps={{
                        className: "min-w-0",
                    }}
                />
                <Button
                    size="sm"
                    color="red"
                    onClick={()=>handlesearch()}
                    className="!absolute right-1 top-1 rounded ">
                    search
                </Button>
            </div>

        </div>
    );
};

export default Banner;