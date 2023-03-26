import { Link } from "react-router-dom";
const Ner = () => {
    return ( 
        <nav className="navbar">
      <h1>apne kar</h1>
      <div className="links">
        <Link to="/">home </Link>
        <Link to="/create">create</Link>
      </div>
        </nav>


     );
}
 
export default Ner;