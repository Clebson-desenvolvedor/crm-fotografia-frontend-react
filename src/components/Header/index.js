import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPowerOff, faArrowUp, faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <header>
            <div className="header-pesquisar">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder="Pesquisar" />
            </div>

            <ul>
                <li className="header-menu-foto-perfil">
                    <img src="/assets/images/alice-profile.jpg" alt="Imagem de perfil" />
                </li>
                <li className="header-menu-notificacoes" title="Notificações">
                    <FontAwesomeIcon icon={faBell} />
                </li>

                <li className="header-menu-logout" title="Voltar ao topo">
                    <FontAwesomeIcon icon={faArrowUp} />
                </li>

                <li className="header-menu-logout" title="Sair">
                    <FontAwesomeIcon icon={faPowerOff} />
                </li>
            </ul>
        </header>
    )
}

export default Header;