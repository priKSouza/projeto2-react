import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import ImageContato from "../../assets/contato.svg";
import Footer from "../../components/Footer/Footer";
import { BsGithub, BsLinkedin, BsInstagram, BsBehance } from "react-icons/bs"

import "./contato.css";

const Contato = () => {
  return (
    <>
      <Menu />
      <Header image={ImageContato}>Contato</Header>
      <div className="redes">
        <p className="siga">Me segue nas redes sociais</p>
        <p className="email">priscilakarinajump@gmail.com</p>
        <div>
          <a
            href="https://github.com/priKSouza"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size={30} color="#003049" />
          </a>

          <a
            href="https://www.linkedin.com/in/priscila-santos-souza/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size={30} color="#003049" />
          </a>

          <a href="https://www.instagram.com/pri_kariina/"><BsInstagram size={30} color="#003049"/></a>

          <a href="https://www.behance.net/priSouza"><BsBehance size={30} color="#003049"/></a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contato;
