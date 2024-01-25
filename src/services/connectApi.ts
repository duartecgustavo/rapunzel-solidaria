import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export type Data = {
  Titulo: string;
  Nome: string;
  Conteudo: string;
  Email: string;
};

type RespostaDeDepoimento = {
  mensagem: string;
  depoimentos: Data[];
};

const api = axios.create({
  baseURL: "https://rapunzel-solidaria-api.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export function enviarDepoimento(data: Data) {
  console.log("dataAPI", data);
  return api
    .post("/depoimentos", data)
    .then((response) => {
      toast.success("Depoimento enviado com sucesso!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
export function pegarDepoimento(): Promise<RespostaDeDepoimento> {
  return api
    .get("/depoimentos")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
