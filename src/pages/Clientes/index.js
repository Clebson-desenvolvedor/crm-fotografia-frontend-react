import React, { useEffect, useState } from "react";
import { getClients } from "../../api/clientes";
import LayoutBase from "../../layouts/LayoutBase";
import LoadThreeDots from "../../components/loads";
import "./index.css";

function Clientes() {
    const [ clientes, setClientes ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchClientes = async () => {
            setLoading(true);

            try {
                const get_clientes = await getClients();

                setClientes(get_clientes.data);
            } catch (error) {
                console.error("Erro ao carregar os clientes", error);
            } finally {
                setLoading(false);
            }
        };

        fetchClientes();
    }, []);

    return (
        <LayoutBase>
            <div className="main-clientes">
            <div className="main-clientes-title"><h2>Clientes</h2></div>
            { loading ? (
                <LoadThreeDots />
            ) : (
                <table>
                    <tr className="tr-title">
                        <th>#</th>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>WhatsApp</th>
                        <th>E-mail</th>
                    </tr>
                    {clientes.length > 0 ? (
                        clientes.map(cliente => (
                            <tr className="tr-data">
                                <td>{cliente.id_cliente}</td>
                                <td><img src="/assets/images/user.png" alt={cliente.foto_cliente} /></td>
                                <td>{cliente.nome_cliente}</td>
                                <td>{cliente.whatsapp_cliente}</td>
                                <td>{cliente.email_cliente}</td>
                            </tr>
                        ))
                    ) : (
                        <p>Nenhum cliente encontrado.</p>
                    )}
                </table>
            )}
            </div>
        </LayoutBase>
    );
}

export default Clientes;