import { Link } from "react-router";

const AppList = ({ applications }) => {
  return (
    <main>
      <h1>Applications</h1>
      <Link to="/applications/new">
        <button>Add Application</button>
      </Link>

      {applications.length === 0 ? (
        <p>No applications yet. Add one to start tracking your job search.</p>
      ) : (
        applications.map((app) => (
          <Link key={app._id} to={`/applications/${app._id}`}>
            <div>
              <div>
                {app.createdAt
                  ? new Date(app.createdAt).toLocaleDateString()
                  : ""}
              </div>
              <div>{app.company}</div>

              <div>{app.roleTitle}</div>

              <div>{app.status}</div>
            </div>
          </Link>
        ))
      )}
    </main>
  );
};

export default AppList;
