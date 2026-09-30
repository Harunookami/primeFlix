import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

function Filme() {
  const { id } = useParams();

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "9b5b9e4b01a1d42bd5e78872c06d7ae4",
          language: "pt-br",
        },
      });
    }

    loadFilme()
  }, []);
  return (
    <div>
      <h1>Acessando filme {}</h1>
    </div>
  );
}

export default Filme;
