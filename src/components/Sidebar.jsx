import '../styles/sidebar.css'
import 'boxicons'

const Sidebar = () => {
return ( <div className="sidebar-comp">
            <div>
                <img src="https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2020/04/17/omtc.jpg?itok=k5LqY7FI" alt="" />

                <div className='nav-links'>
                    <a href=""><span><box-icon type='solid' name='home' color="white"></box-icon></span> Home</a>
                    <a href=""><span><box-icon name='search-alt-2' color="white" ></box-icon></span>     Search</a>
                    <a href=""><span><box-icon name='camera-movie' type='solid' color="white"></box-icon></span>Addmovies</a>
                    <a href=""><span><box-icon name='user-circle' color="white"></box-icon> </span>     Profile</a>
                </div>
            </div>
        </div> );
}
 
export default Sidebar;