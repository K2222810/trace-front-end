import { useContext } from 'react';
import { Link } from "react-router";

import { UserContext } from '../../contexts/UserContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <Link to="/applications/new">
        <button>Add Application</button>
      </Link>
      <p>
        This is the dashboard page where you can see a list of all the users.
      </p>
    </main>
  );
};

export default Dashboard;