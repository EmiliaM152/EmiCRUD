import React from 'react';
import { Table } from "reactstrap"
import { Button } from 'react-bootstrap';

const TablaContacto = ({data}) => {
    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4"> Sin Registros</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.idcontacto}>
                                <td>{item.nombre}</td>
                                <td>{item.correo}</td>
                                <td>{item.telefono}</td>
                                <td>
                                    <Button variante="primary" size="sm" className="me-2">Editar</Button>
                                    <Button variante="danger" size="sm">Eliminar</Button>
                                </td>
                            </tr>
                        ))
                       )
               }
            </tbody>           
        </Table>
    )
}
 export default TablaContacto;