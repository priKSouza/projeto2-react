import Menu from "../../components/Menu/Menu";
import ImagePortfolio from "../../assets/portfolio2.svg"
import Header from "../../components/Header/Header";
import Card from "../../components/Card"
import Footer from "../../components/Footer/Footer"

const Portfolio = () => {
  return (
    <>
      <Menu />
      <Header image={ImagePortfolio}>Meus projetos</Header>
      <Card/>
      <Footer/>
    </>
  );
};

export default Portfolio;
