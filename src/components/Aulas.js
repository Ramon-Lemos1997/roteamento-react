import React, { } from "react";
import data from '../Data';
import { Link, useMatch } from "react-router-dom";

export default function Aulas(props) {
  const match= useMatch('aulas')
  return (
    <div className="page">
      <h1>Aulas</h1>
      <ul className="aulas">
        {data.map(aula => {
          return <li key={aula.id}><Link className="link" to={`${match.pathname}/${aula.id}/`}>{aula.title}</Link></li>;
        })}
      </ul>
    </div>
  );
}
