import React, { useState } from "react";
import "./style.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import fotoeu from "./imgs/fotoeu.jfif";

export const Header = () => {
  const nome = "<";
  const nome2 = ">";

  const [ativo, setAtivo] = useState(false);
  const style = !ativo ? "classe1" : "classe2";
  const styleBtn1 = !ativo ? "classebtn1" : "classebtn2";
  const styleBtn2 = !ativo ? "classebtn2" : "classebtn1";
  return (
    <div>
      <div className="boss">
        <nav>
          <div className="logo-nav">
            <p>
              {" "}
              code <span>{nome}</span> <span className="barra">/</span>{" "}
              <span>{nome2}</span>{" "}
            </p>
          </div>
          <AiOutlineMenu
            className={styleBtn1}
            onClick={() => setAtivo(!ativo)}
          />
          <AiOutlineClose
            className={styleBtn2}
            onClick={() => setAtivo(!ativo)}
          />
          <div className={style}>
            <ul id="item-nav">
              <li>
                <button href="#">Quem sou</button>
              </li>
              <li>
                <button href="#">Projetos</button>
              </li>
              <li>
                <button href="#">Contatos</button>
              </li>
            </ul>
          </div>
        </nav>
        {/*inicio bloco 1*/}
        <div className="container">
          <div className="bloco-pai">
            <div className="bloco-pai-item-1">
              <div className="bpi-filho">
                <p className="texto-oi">
                  <div>ola</div>{" "}
                </p>
                <p className="texto-secundario">sou desenvolvedor front-end</p>
              </div>
            </div>
            <div className="bloco-pai-item-2">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br />
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, <br />
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. <br /> It has survived not only five
              centurie
            </div>
            <div className="bloco-pai-item-3">
              <button className="btn-vamos-la">vamos lá</button>
            </div>
          </div>
        </div>
        {/*fim bloco 1*/}

        {/*inicio bloco sobre*/}
      </div>

      <div className="container2">
        <div className="bloco-sobre-pai">
          <div className="quemsou-text">quem sou  <span className="verde">  .</span></div>
          <div className="bloco-sobre-filho1">
            <img src={fotoeu} alt="" className="fotoeu" />
          </div>
          <div className="bloco-sobre-filho2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, <br />
          </div>
        </div>
      </div>

      {/*fim bloco sobre*/}
      {/* projetos */}

      <div className="container3">

        <div className="bloco-projetos-pai">

          <div className="bloco-projetos-filho1">
            <div className="bloco-projetos-nome">
              <p>nome projeto 1</p>
            </div>
            <div className="bloco-projetos-foto">foto projeto</div>
            <div className="bloco-projetos-descricao">descricao</div>
            <div className="bloco-projetos-tecnologias">tecnologias</div>
          </div>

          <div className="bloco-projetos-filho2">
            <div className="bloco-projetos-nome2">
            
              <p>nome projeto 2</p>
              
            </div>
            <div className="bloco-projetos-foto2">foto projeto</div>
            <div className="bloco-projetos-descricao2">descricao</div>
            <div className="bloco-projetos-tecnologias2">tecnologias</div>
          </div>

          <div className="bloco-projetos-filho3">
            <div className="bloco-projetos-nome3">
              <p>nome projeto 3</p>
            </div>
            <div className="bloco-projetos-foto3">foto projeto</div>
            <div className="bloco-projetos-descricao3">descricao</div>
            <div className="bloco-projetos-tecnologias3">tecnologias</div>
          </div>

          <div className="bloco-projetos-filho4">
            <div className="bloco-projetos-nome4">
              <p>nome projeto 4</p>
            </div>
            <div className="bloco-projetos-foto4">foto projeto</div>
            <div className="bloco-projetos-descricao4">descricao</div>
            <div className="bloco-projetos-tecnologias4">tecnologias</div>
          </div>
          
        </div>
      </div>

      {/*fim projetos */}
      {/*contatos*/}


      <div className="container4">
        <div className="bloco-contatos-pai">
          <div className="bloco-contato-filho"><p>me ache por aqui <span className="verde"> .</span></p></div>
          <div className="bloco-contatos-filho2">
             <a className="contatos-github" href="https://github.com/pedro-gabriel22" target="_blank">github</a>
          <p className="contatos-email">pedrogabriel2552@gmail.com</p>
          <a className="contatos-linkedin" href="https://www.linkedin.com/in/pedro-gabriel-oliveira-a52356202" target="_blank">linkedin</a>
          </div>
          
        </div>
      </div>


      {/*fim contatos*/}
    </div>
  );
};
