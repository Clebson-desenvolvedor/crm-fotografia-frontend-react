import "./index.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faHandshake, faChartLine, faGear, faSliders, faCamera } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Aside() {
    return (
        <aside>
            <nav>
                <div className="nav-logo">
                    <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')}>
                        <img src="/assets/images/logo.png" alt="Imagem de perfil" />
                    </NavLink>
                </div>
                <ul>
                    <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')}>
                        <li title="Home"><FontAwesomeIcon icon={faHome} /></li>
                    </NavLink>

                    <NavLink to="/clients" className={({isActive}) => (isActive ? 'active' : '')}>
                        <li title="Clientes"><FontAwesomeIcon icon={faUsers} /></li>
                    </NavLink>

                    <NavLink to="/services" className={({isActive}) => (isActive ? 'active' : '')}>
                        <li title="Serviços"><FontAwesomeIcon icon={faCamera} /></li>
                    </NavLink>

                    <NavLink to="/leads" className={({isActive}) => (isActive ? 'active' : '')}>
                        <li title="Leads"><FontAwesomeIcon icon={faHandshake} /></li>
                    </NavLink>

                    <NavLink to="/dashboard" className={({isActive}) => (isActive ? 'active' : '')}>
                        <li title="Dashboard"><FontAwesomeIcon icon={faChartLine} /></li>
                    </NavLink>

                    <NavLink to="/preferences" className={({isActive}) => (isActive ? 'active' : '')}>
                        <li title="Preferências"><FontAwesomeIcon icon={faSliders} /></li>
                    </NavLink>

                    <NavLink to="/configurations" className={({isActive}) => (isActive ? 'active' : '')}>
                        <li title="Configurações"><FontAwesomeIcon icon={faGear} /></li>
                    </NavLink>
                </ul>
            </nav>
        </aside>
    )
}

export default Aside;