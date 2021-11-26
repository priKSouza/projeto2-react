import Menu from "../../components/Menu/Menu";
import ImageSobre from "../../assets/sobremim.svg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  BiMusic,
  BiSun,
  BiJoystick,
  BiCodeCurly,
  BiCodeAlt,
} from "react-icons/bi";

import "../Sobre/sobre.css";

const Sobre = () => {
  return (
    <>
      <Menu />
      <Header image={ImageSobre}>Mais sobre mim</Header>
      <div className="main">
        <img
          src="https://lh3.googleusercontent.com/tSsmduNEqobmnvM3eqschMQHGPZ3VoWLack0XKkfd2Jq35vEeK6QW_HtVzN7dVjSOP0haRlMv3DFPNqA8t6KNbUXE6gHa1m-jGbZ8-WFnf2un6sWCuX1ovWz-tzhax8YBfbRZygnE12Ie-ky2g9DcOEfTwDAlv3YOQXZnm09YmF8EJOXDjwHJP1v_QY1F-IOOcn7EJU4NYx0jYHhaQdyvfkXjHg15y-yqK_jP7cnqwYHn8l3S3gM9v7J-8A8cejPw0yDYIrmA03VCdpPIAXj0DYtXzbxH3pjFV7Dg8IfNeMbVsS-rpeYHXfL-TdlzJWcyDoRbqn59PkS_ZDF4urzjJBSLP1HevZ3j7Hz17nictx9PsNAERM4HfrZ8xOIhVY0FNA5xWax7lz1A-YX4u3nTpESMzcrwOJPXo0Fsoi5nRQl0Ah9ys1hf-Mo1ksQ0AkdAwurM5rPg1zIpG5AX79oGLLcHqG_Wu-Q8oNLVyl1EShFHYtn-7AjqY9CKvHjWmZB3sTTEZUdYtouXMeKtGMZY2TrpbuTKjzzWxlm5j7RPDr1T8WfZ9iPcP47s8h821CD_j7nThqhpztRDeeGjNnysn2FWRcPMOGfh5CAM_HeRTTJcAmQVDsQ2sKYZ6aoMGtyqWuXusQLH0D3i60DHtJa9VdOe8NtE2vBoifDhWofxrZg6HeraDSh3Xg6FqZOJdbhotpkrhbLODqUCStcwJj8gbqQBw=s617-no?authuser=0"
          alt="Priscila Souza"
        />
        <div>
          <h2>Priscila Souza</h2>
          <p>
            <BiSun /> Pernambucana
          </p>
          <p>
            <BiCodeCurly /> Aluna da turma On13 da Reprograma
          </p>
          <p>
            <BiMusic /> Apaixonada por música
          </p>
          <p>
            <BiJoystick /> Amante de jogos
          </p>
          <p>
            <BiCodeAlt /> Pessoa desenvolvedora Front-end
          </p>
        </div>
      </div>
      <div className="historia">
        <p>
          Eu me chamo Priscila Karina Santos de Souza, mas pode me chamar de
          Karina. Nasci em 1989 (faz as contas pra descobrir minha idade kkkkk),
          passei maior parte da minha vida em Pernambuco mas moro em Curitiba -
          PR. <br />
          <br />
          Já fiz um pouco de tudo nessa vida. Trabalhei com vendas, recepção
          hospitalar, caixa de farmácia, produção de uma grande empresa de
          alimentos, já tive uma pequena empresa, fiz StringArt (quadros feitos
          em madeira com pregos e linhas) mas, atualmente estudo programação.
          Tenho feito alguns cursos gratuitos e estudado sozinha. <br />
          <br />
          Conheci a {""}
          <a href="https://reprograma.com.br/" target="_blank" className="reprograma">
          {"{reprograma}"}
          </a>{" "}
          {""}
          na minha procura por mais conhecimento. Participei de todo processo
          seletivo e consegui uma vaga na turma On13. Foram 18 semanas de muito
          conteúdo, prática, projetos, choro, alegrias, um misto de emoções. Fiz
          amizades que sei que um dia vamos nos cruzar nesse mundo da
          programação. Sou grata pela oportunidade de poder aprender com
          mulheres incríveis. <br />
          <br />
          Chego ao fim do meu bootcamp e ao início de uma tragetória de sucesso!{" "}
          <br />
          <pre>{"<Vamos reprogramar o mundo?/>"}</pre>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Sobre;
