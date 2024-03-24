import { Spinner } from '@material-tailwind/react';

const CoustomSpnner = () => {
    return (
        <div className='flex justify-center items-center'>
            <Spinner color='green' className="h-16 w-16 text-gray-900/50" />;
        </div>
    );
};

export default CoustomSpnner;