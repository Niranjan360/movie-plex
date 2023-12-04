import { Link } from 'react-router-dom'
import '../styles/sidebar.css'
import 'boxicons'

const Sidebar = () => {
return ( <div className="sidebar-comp">
            <img src="https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2020/04/17/omtc.jpg?itok=k5LqY7FI" alt="" />

            <div className='nav-links'>
                <Link to="/"><span><box-icon type='solid' name='home' color="rgb(40, 40, 40)"></box-icon></span> Home</Link>
                <Link to="/search"><span><box-icon name='search-alt-2' color="rgb(40, 40, 40)" ></box-icon></span>     Search</Link>
                <Link to="/add"><span><box-icon name='camera-movie' type='solid' color="rgb(40, 40, 40)"></box-icon></span>Addmovies</Link>
                <Link to="/profile"><span><box-icon name='user-circle' color="rgb(40, 40, 40)"></box-icon> </span>     Profile</Link>
            </div>
        </div> );
}
 
export default Sidebar;