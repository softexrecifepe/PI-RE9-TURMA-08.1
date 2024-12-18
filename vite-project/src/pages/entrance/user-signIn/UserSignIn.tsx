import TextualButton from "../../../components/textual-button/TextualButton";
import linkedinVetor from "../../../assets/linkedinVetor.svg";
import googleVetor from "../../../assets/googleVetor.svg";
import "./UserSignIn.css";
import { Link } from "react-router-dom";

function UserSignIn() {
  return (
    <>
      <div className="user-login">
        <div className="titleContainer">
          <h1>Conheça diversas oportunidades de emprego</h1>
        </div>
        <form>
          <label htmlFor="user-email">Email</label>
          <input
            type="email"
            id="user-email"
            name="user-email"
            placeholder="Digite seu email"
          />

          <label htmlFor="user-password">Senha</label>
          <input
            type="password"
            id="user-password"
            name="user-password"
            placeholder="Digite sua senha"
          />
          <Link to="/home" className="linkStyle">
          <TextualButton text={"ENTRAR"} className="submit"></TextualButton>
          </Link>
        </form>

        <hr />

        <div className="buttonContainer">
          <TextualButton
            className="externalRegistrationButton"
            text="Entrar com LinkedIn"
            imageUrl={linkedinVetor}
          />
          <TextualButton
            className="externalRegistrationButton"
            text="Entrar com Google"
            imageUrl={googleVetor}
          />
          <div className="signup-now">
            <p>
              Não possui uma conta? <Link to="/userSignUp1">Cadastre-se</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSignIn;
