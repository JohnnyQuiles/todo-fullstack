import { Outlet, Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div>
      <h1>A TODO FULLSTACK!</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem", }}>
        <Link to="home">Home</Link> |{" "}
        <Link to="create-task">Create-Task</Link> 
      </nav>
      <Outlet />
    </div>
  );
}; 
