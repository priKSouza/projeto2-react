import Menu from "../../components/Menu/Menu";
import ImageSobre from "../../assets/sobre.svg"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"

import "../Sobre/sobre.css"

const Sobre = () => {
  return (
    <>
      <Menu />
      <Header image={ImageSobre}>Mais sobre mim</Header>    
      <Footer/>
    </>
  );
};

export default Sobre;
