import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    // Add other fields as necessary
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, [id]); // Add id as a dependency to reload the user when the id changes

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {id} {/* Display the id from useParams */}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b> {user.name}
                </li>
                <li className="list-group-item">
                  <b>Username:</b> {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email:</b> {user.email}
                </li>
                {/* Add other fields as necessary */}
              </ul>
            </div>
          </div>
          {/* Link to the edit page */}
          <Link className="btn btn-primary my-2" to={`/edit/${id}`}>
            Edit
          </Link>
          {/* Back to home button */}
          <Link className="btn btn-secondary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
