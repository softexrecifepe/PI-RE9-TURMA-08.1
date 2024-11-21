import "./UserSignUp.css";
import TextualButton from "../../../components/textual-button/TextualButton";
import linkedinVetor from "../../../assets/linkedinVetor.svg";
import googleVetor from "../../../assets/googleVetor.svg";
import SymbolButton from "../../../components/symbol-button/SymbolButton";

function UserSignUp2() {
  return (
    <>
      <div className="titleContainer">
        <h1>CADASTRE-SE</h1>
      </div>

      <form className="formContainer">
        {/* LADO ESQUERDO */}
        <div className="formContent">
          <div className="inputContainer">
            <div className="inputForm">
              <label htmlFor="user-cep">CEP</label>
              <input
                type="number"
                id="user-cep"
                name="user-cep"
                placeholder="00000-000"
              />
            </div>
          </div>
          <div className="inputContainer">
            <div className="inputForm">
              <label htmlFor="user-neighborhood">Bairro</label>
              <input
                type="text"
                id="user-neighborhood"
                name="user-neighborhood"
                placeholder="Informe seu bairro aqui"
              />
            </div>
          </div>
          <div className="inputContainer">
            <div className="inputForm" id="stateInput">
              <label htmlFor="user-state">Estado</label>
              <input
                type="text"
                id="user-state"
                name="user-state"
                placeholder="Informe seu estado aqui"
              />
            </div>
          </div>
          <div className="inputContainer">
            <div className="inputForm">
              <label htmlFor="user-linkedin">LinkedIn (Opcional)</label>
              <input
                type="text"
                id="user-linkedin"
                name="user-linkedin"
                placeholder="www.linkedin.com/in/seuperfil"
              />
            </div>
          </div>
        </div>

        {/* LADO DIREITO */}
        <div className="formContent">
          <div className="inputContainer">
            <div className="inputForm">
              <label htmlFor="user-adress">Rua</label>
              <input
                type="text"
                id="user-adress"
                name="user-adress"
                placeholder="Informe sua rua aqui"
              />
            </div>
          </div>
          <div className="inputContainer">
            <div className="inputForm">
              <label htmlFor="user-city">Cidade</label>
              <input
                type="text"
                id="user-city"
                name="user-city"
                placeholder="Informe sua cidade aqui"
              />
            </div>
          </div>
          <div className="inputContainer">
            <div className="inputForm" id="houseNumberInput">
              <label htmlFor="user-house-number">Nº</label>
              <input
                type="number"
                id="user-house-number"
                name="user-house-number"
                placeholder="000"
              />
            </div>
            <div className="inputForm" id="complementInput">
              <label htmlFor="user-complement">Complemento</label>
              <input
                type="text"
                id="user-complement"
                name="user-complement"
                placeholder="Complemente aqui"
              />
            </div>
          </div>
          <div className="inputContainer">
            <div className="inputForm">
              <label htmlFor="user-portfolio">Seu portifólio (Opcional)</label>
              <input
                type="text"
                id="user-portfolio"
                name="user-portfolio"
                placeholder="www.seuportfolio.com.br"
              />
            </div>
          </div>
        </div>
      </form>

      <div className="optionsContainer">
        <div className="goBackButton">
          <TextualButton text={"VOLTAR"} className="submit"></TextualButton>
        </div>
        <div className="registerCurriculumButton">
          <TextualButton
            text={"CADASTRAR CURRICULO"}
            className="submit"
          ></TextualButton>
        </div>
        <div className="finishLaterButton">
          <TextualButton
            text={"FINALIZAR DEPOIS"}
            className="submit"
          ></TextualButton>
        </div>
      </div>

      <div className="buttonContainer">
        <SymbolButton className="symbol-button" imageUrl={linkedinVetor} />

        <SymbolButton className="symbol-button" imageUrl={googleVetor} />
      </div>

      <div className="loginContainer">
        <p>
          Já tem uma conta? <a href="">Entrar</a>
        </p>
      </div>

      <div className="informationContainer">
        <p>
          Ao criar uma conta, você concorda com nossos{" "}
          <a href="">Termos de Serviço</a>,{" "}
          <a href="">Política de Privacidade</a> e nossas{" "}
          <a href="">Configurações de Notificação padrão</a>.
        </p>
      </div>
    </>
  );
}

export default UserSignUp2;
