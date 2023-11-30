import '../styles/sidebar.css'

const Sidebar = () => {
return ( <div className="sidebar-comp">
            <div>
                <h1>Movie-Plex</h1>

                <div className='nav-links'>
                    <a href="">Home</a>
                    <a href="">Search</a>
                    <a href="">Addmovies</a>
                    <a href="">Profile</a>
                </div>
            </div>
        </div> );
}
 
export default Sidebar;