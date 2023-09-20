import { Text } from "@/components/shareds";
import { colors } from "@/styles/colors";
import { FormEvent, useState } from "react";
import { ButtonSC } from "../Navbar/styles";

interface FormData {
  nome: string;
  email: string;
  depoimento: string;
}

interface DepositionFormProps {
  onSubmit: (formData: FormData) => void;
}

const DepositionForm = ({ onSubmit }: DepositionFormProps) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [depoimento, setDepoimento] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ nome, email, depoimento });
    setNome("");
    setEmail("");
    setDepoimento("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column col-10 col-sm-8"
      style={{ gap: "32px" }}
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
          onChange={(e) => setNome(e.target.value)}
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setDepoimento(e.target.value)}
        ></textarea>
      </div>
      <ButtonSC
        type="submit"
        style={{
          color: colors.white_FFFFFF,
          borderRadius: "4px",
          width: "fit-content",
          padding: "8px 24px 8px 24px",
        }}
      >
        ENVIAR DEPOIMENTO
      </ButtonSC>
    </form>
  );
};

export default DepositionForm;
