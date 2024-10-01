import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "./RegistrantList.css";

const RegistrantList: React.FC = () => {
  const registrants = useSelector((state: RootState) => state.registrants);

  return (
    <div className="registrant-list">
      <h1>Registrant List</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Attendance</th>
            <th>Adults</th>
            <th>Kids</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {registrants.map((registrant, index) => (
            <tr key={index}>
              <td>{registrant.firstName}</td>
              <td>{registrant.lastName}</td>
              <td>{registrant.email}</td>
              <td>{registrant.phone}</td>
              <td>{registrant.attendance}</td>
              <td>{registrant.adults}</td>
              <td>{registrant.kids}</td>
              <td>{registrant.message || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistrantList;
