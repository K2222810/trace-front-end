import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import * as appService from '../../services/appService';



const AppDetails = () => {
    const { appId } = useParams();
    const [app, setApp] = useState(null);
    console.log('appId', appId);

    useEffect(() => {
    const fetchApp = async () => {
      const data = await appService.show(appId);
      setApp(data.application);
    };

    fetchApp();
  }, [appId]);

  if (!app) return <main>Loading application...</main>;

  return (
    <main>
      <h1>{app.company}</h1>

      <p><strong>Role:</strong> {app.roleTitle}</p>
      <p><strong>Status:</strong> {app.status}</p>
      <p><strong>Industry:</strong> {app.industry}</p>

      <p>
        <strong>Applied Date:</strong>{" "}
        {app.appliedDate
          ? new Date(app.appliedDate).toLocaleDateString()
          : "Not set"}
      </p>

      <p><strong>Location:</strong> {app.location || "Not set"}</p>
      <p><strong>Salary Range:</strong> {app.salaryRange || "Not set"}</p>

      <p><strong>Further Details:</strong></p>
      <p>{app.furtherDetails || "None"}</p>

      <p>
        <strong>Created:</strong>{" "}
        {new Date(app.createdAt).toLocaleString()}
      </p>

      <p>
        <strong>Last Updated:</strong>{" "}
        {new Date(app.updatedAt).toLocaleString()}
      </p>
    </main>
  );
};

export default AppDetails;