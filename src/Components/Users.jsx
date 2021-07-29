import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {
    const [usuarios, setUsuarios] = useState([]);
    const getUsers = async () => {
        const res = await axios.get('http://jsonplaceholder.typicode.com/users');
        const users = await res.data;
        setUsuarios(users);
    }
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container m-5">
            <h1>Lista de Usuarios</h1>
            {
                usuarios.map((item) => (
                    <div>
                        <Link to={`/UserDetails/${item.id}`}>{item.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Users;