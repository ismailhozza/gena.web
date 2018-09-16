import React from "react";
// import { match as Match } from "react-router";
import { Route, Link } from "react-router-dom";

const Student = ({ match }:any) => (
    <div>
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

export default Student;