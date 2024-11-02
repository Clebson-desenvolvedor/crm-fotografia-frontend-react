import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faHandshake, faChartLine, faGear, faSliders, faCamera } from "@fortawesome/free-solid-svg-icons";

function Aside() {
    return (
        <aside>
            <nav>
                <div className="nav-logo">
                    <img src="/assets/images/logo.png" alt="Imagem de perfil" />
                </div>
                <ul>
                    <li title="Home"><FontAwesomeIcon icon={faHome} /></li>
                    <li title="Clientes"><FontAwesomeIcon icon={faUsers} /></li>
                    <li title="Serviços"><FontAwesomeIcon icon={faCamera} /></li>
                    <li title="Leads"><FontAwesomeIcon icon={faHandshake} /></li>
                    <li title="Dashboard"><FontAwesomeIcon icon={faChartLine} /></li>
                    <li title="Preferências"><FontAwesomeIcon icon={faSliders} /></li>
                    <li title="Configurações"><FontAwesomeIcon icon={faGear} /></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Aside;