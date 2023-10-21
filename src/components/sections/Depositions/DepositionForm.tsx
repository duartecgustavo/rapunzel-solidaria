import { Text } from "@/components/shareds";
import { colors } from "@/styles/colors";
import { FormEvent, useState } from "react";
import { ButtonSC } from "../Navbar/styles";
import { FormFC } from "./styles";
import { isMobile } from "react-device-detect";

interface FormData {
  nome: string;
  email: string;
  titulo: string;
  depoimento: string;
}

interface DepositionFormProps {
  onSubmit: (formData: FormData) => void;
}

const DepositionForm = ({ onSubmit }: DepositionFormProps) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [titulo, setTitulo] = useState("");
  const [depoimento, setDepoimento] = useState("");

  const [errors, setErrors] = useState<FormData>({
    nome: "",
    email: "",
    titulo: "",
    depoimento: "",
  });

  function isValidEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: FormData = {
      nome: "",
      email: "",
      titulo: "",
      depoimento: ""
    };

    if (!nome) {
      newErrors.nome = "O campo Nome é obrigatório";
    }
    
    if (!email) {
      console.log("aquiemail")
      newErrors.email = "O campo Email é obrigatório";
    } else if (!isValidEmail(email)) {
      console.log("aquiemail")
      newErrors.email = "Email inválido";
    }
    
    if (!titulo) {
      console.log("aquititulo")
      newErrors.titulo = "O campo titulo é obrigatório";
    }
    
    if (!depoimento) {
      console.log("aquidepoimento")
      newErrors.depoimento = "O campo Depoimento é obrigatório";
    }

    const errorMessages = Object.values(newErrors).filter((error) => error).join("\n");
    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      alert(errorMessages);
    } else {
      onSubmit({ nome, email, depoimento, titulo });
      setNome("");
      setEmail("");
      setTitulo("");
      setDepoimento("");
      setErrors({ nome: "", email: "", titulo: "", depoimento: "" });
    }
  };

  return (
    <FormFC
      onSubmit={handleSubmit}
      className="d-flex flex-column col-10 col-sm-8"
    >
      <Text
        family="Concert One"
        size="36px"
        color={colors.white_FFFFFF}
        align="left"
      >
        Digite o seu:
      </Text>
      <div>
        <label
          className="form-label pb-1"
          style={{ color: colors.white_FFFFFF, fontSize: "18px" }}
        >
          Nome completo
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Digite seu nome completo.."
          aria-label="default input example"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
            setErrors({ ...errors, nome: "" });
          }}
        />
      </div>
      <div>
        <label
          className="form-label pb-1"
          style={{ color: colors.white_FFFFFF, fontSize: "18px" }}
        >
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Digite seu e-mail.."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors({ ...errors, email: "" });
          }}
        />
      </div>
      <div>
        <label
          className="form-label pb-1"
          style={{ color: colors.white_FFFFFF, fontSize: "18px" }}
        >
          Titulo da mensagem
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Digite o titulo de seu depoimento.."
          aria-label="default input example"
          value={titulo}
          onChange={(e) => {
            setTitulo(e.target.value);
            setErrors({ ...errors, titulo: "" });
          }}
        />
      </div>
      <div>
        <label
          className="form-label pb-1"
          style={{ color: colors.white_FFFFFF, fontSize: "18px" }}
        >
          Depoimento
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Nos conte o que você pensa sobre nós?"
          rows={3}
          value={depoimento}
          onChange={(e) => {
            setDepoimento(e.target.value);
            setErrors({ ...errors, depoimento: "" });
          }}
        ></textarea>
      </div>

      <ButtonSC
        type="submit"
        style={{
          color: colors.white_FFFFFF,
          borderRadius: "4px",
          padding: "8px 24px 8px 24px",
          width: isMobile ? "100%" : "",
        }}
      >
        ENVIAR DEPOIMENTO
      </ButtonSC>
    </FormFC>
  );
};

export default DepositionForm;
