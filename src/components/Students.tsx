import React from "react";
import { Route, Link } from "react-router-dom";

const Students = ({ match }:any) => (
    <div>
      <h2>Students</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

    </div>
  );

export default Students;