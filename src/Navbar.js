import {Link} from 'react-router-dom'
const Nabvar = () => {
    return ( 
        <div className="navbar">
            <h1>Unique Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </div>
     );
}
 
export default Nabvar;