import Menu from "../../components/Menu/Menu";
import ImageHome from "../../assets/bemvinda.svg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"

import "../Home/home.css"

const Home = () => {
  return (
    <>
      <Menu />
      <Header image={ImageHome}>Bem vindas</Header>
      <div className="texto-home">
        <h3>
          "O trabalho de hoje é a história de amanhã, e somos nós que o fazemos"{" "}
          <br />- Juliette Gordon Low -
        </h3>
        <div>
          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
