import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';

export default function ListadoEmpleados() {

        const urlBase = "http://localhost:8081/rrss-app/empleados"
        const[empleados, setEmpleados] = useState ([]);
        useEffect(() => {
            cargarEmpleados();
        }, []);

        const cargarEmpleados = async () => {
            const resultados = await axios.get(urlBase);
            console.log("resultado cargar empleados");
            console.log(resultados.data);
            setEmpleados(resultados.data);
        }
        const eliminarEmpleado = async (id) => {
            await axios.delete(`${urlBase}/${id}`);
            cargarEmpleados();
        }
        

  return (

        <div className='container'>
            <div className='container text-center' style={{margin:"30px", color:'blue'}}>
                <h3>Sistema de Recursos Humanos</h3>
            </div>

            <table className="table table-striped table-hover aling-middle">
                <thead className='table-dark'>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Empleado</th>
                    <th scope="col">Departamento</th>
                    <th scope="col">Sueldo</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    // Iteramos el arreglo de empleados
                    empleados.map((empleado, indice) => (
                        <tr key={indice}>
                        <th scope="row">{empleado.idEmpleado}</th>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.departamento}</td>
                        <td><NumericFormat value={empleado.sueldo}
                            displayType={'text'}
                            thousandSeparator= ',' prefix={'$'}
                            decimalScale={0} fixedDecimalScale/>                       
                            </td>
                        <td className='textcenter'>
                            <Link to={`/editar/${empleado.idEmpleado}`}
                                className='btn btn-warning btn-sm me-3'>Editar</Link>
                            <button onClick={() => eliminarEmpleado(empleado.idEmpleado)}
                                className='btn btn-danger btn-sm'
                            >Eliminar</button>
                        </td>
                        </tr>
                    ))         
                    }
                </tbody>
            </table>
        </div>
  )
}