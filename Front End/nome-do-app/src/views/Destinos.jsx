import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DestinoService from "../Controller/DestinoController";
import "../style.css";

export default function Index() {
  const [localidades, setLocalidades] = useState([]);

  const getAllDestinos = () => {
    DestinoService.getAllDestinos()
      .then((response) => {
        setLocalidades(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllDestinos();
  }, []);

  const deleteDestino = (localidadeId) => {
    DestinoService.deleteDestino(localidadeId)
      .then((response) => {
        getAllDestinos();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Deu ruim na API");
        }
      });
  };

  return (
    <>
      <header className="header" id="primary">
        <h1 className="container">Cadastro Destino</h1>
      </header>
      <div className="container p-5">
        <Link to="/Destinos-Create" className="btn btn-info mb-2">
          Criar Destino
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm table-colors">
            <thead>
              <tr>
                <th>Id</th>
                <th>Cidade</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {localidades.map((localidade) => (
                <tr className="text-white tr-hover" key={localidade.id_destino}>
                  <td className="text-black">{localidade.id_destino}</td>
                  <td className="text-black">{localidade.localidade}</td>
                  <td className="text-black">{localidade.estado}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Destinos-Update/${localidade.id_destino}`}
                      className="btn btn-primary"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-denger"
                      onClick={() => deleteDestino(localidade.id_destino)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
