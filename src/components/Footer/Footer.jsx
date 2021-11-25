import { VscGithubInverted } from 'react-icons/vsc'
import './footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <span>Feito por Priscila Souza <a className="git" target="_blank" href="https://github.com/priKSouza"><VscGithubInverted/></a></span>
        </div>
    )
}

export default Footer