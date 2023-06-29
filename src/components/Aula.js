import React from "react";
import { useParams } from "react-router-dom";
import data from "../Data";
import { Routes,Route } from "react-router-dom";

const useAula = () => {
  const id = useParams().id;
  return data.filter(aula => aula.id == id)[0];
};

export default function Aula(props) {
  const aula = useAula();

  if (!aula) {
    return <Routes><Route path='*' element={<div>Essa rota não existe</div>} /></Routes>;
  }

  return (
    <div className="page">
      <h1>{aula.title}</h1>
      <p>{aula.desc}</p>
    </div>
  );
}
