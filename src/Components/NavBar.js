import { Link } from 'react-router-dom';

function NavBar() {
    return (
    <div>
        <nav>
        <Link to="/">Index</Link> |{" "}
        <Link to="/home">Home</Link> |{" "}
        <Link to="/create-task">Create-Task</Link> |
        </nav>
    </div>
    )
}

export default NavBar;