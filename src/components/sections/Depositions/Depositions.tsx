import { BeautyTitle } from "@/components/shareds";
import { ButtonSC } from "../Navbar/styles";

const Depositions = () => {
    return (
        <>
            <BeautyTitle FrontTitle="Depoimentos" BackTitle="FALE!" Color="White" />

            <input className="form-control" type="text" placeholder="Default input" aria-label="default input example" />
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <ButtonSC
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#ModalLocal"
            >
                ENVIAR DEPOIMENTO
            </ButtonSC>

        </>
    )
}

export default Depositions;