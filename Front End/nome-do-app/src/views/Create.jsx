import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinoService from "../Controller/DestinoController";

export default function Create() {
  const [localidade, setLocalidade] = useState("");
  const [estado, setEstado] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarDestino = (e) => {
    e.preventDefault();

    const destino = { localidade, estado };

    if (id) {
      DestinoService.updateDestino(id, destino)
        .then((response) => {
          navigate("/Destinos")
        })

    } else {
      DestinoService.createDestino(destino)
        .then((response) => {
          navigate("/Destinos")
        })
    }
  }

  useEffect(() => {
    function getDestinoById() {
      if (id) {
        DestinoService.getDestinoById(id)
          .then((response) => {
            setLocalidade(response.data.localidade);
            setEstado(response.data.estado);
          })
          .catch((error) => {
            console.log(error);
          })
      }
    }
    getDestinoById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar Destino"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Cidade
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Cidade"
              value={localidade}
              onChange={(e) => setLocalidade(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Uf" className="form-label">
              Estado
            </label>
            <input
              type="text"
              id="Uf"
              className="form-control"
              placeholder="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarDestino(e)}>
            Enviar
          </button>
          <Link
            to="/Destinos"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
