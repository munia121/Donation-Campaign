import { NavLink } from 'react-router-dom';
import image from '../../../assets/Frame (5).png'
const NavBar = () => {
    return (
        <div className="max-w-7xl mx-auto navbar bg-base-100 border-2 border-red-400">
            <div className="flex-1">
                <img src={image} alt="" />
                <div>
                    <a className="btn btn-ghost text-3xl text-red-500">Donation</a>
                    <p className='ml-3 tracking-[.35em]'>Campaign</p>
                </div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 flex gap-10 text-xl ">
                    <NavLink className={({isActive}) => isActive? 'text-primary underline' :'black'} to={'/'}>Home</NavLink>
                    <NavLink className={({isActive}) => isActive? 'text-primary underline' :'black'} to={'/donation'}>Donation</NavLink>
                    <NavLink className={({isActive}) => isActive? 'text-primary underline' :'black'} to={'statistic'}>Statistic</NavLink>
                    
                </ul>
            </div>
        </div>
    );
};

export default NavBar;