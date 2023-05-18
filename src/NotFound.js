import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2 style={{marginBottom:"10px"}}>Page Not Found!</h2>
            <Link to='/'>Go to homepage</Link>
        </div>
     );
}
 
export default NotFound
