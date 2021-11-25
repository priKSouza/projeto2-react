import './header.css'

const Header = (props) => {
    return(
        <div className="header">
            <h1>{props.children}</h1>
            <img src={props.image} alt="Ilustração" />
        </div>
    )
}

export default Header