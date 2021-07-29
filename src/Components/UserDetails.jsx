import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
    const [usuario, setUsuario] = useState([]);
const {id} = useParams();

    const getUser = async () => {
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
        const users = await res.data;
        setUsuario(users);
    }
    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="contains m-5">
            <h4>detalles de usuario</h4>
            <p>Nombre: {usuario.name}</p>
            <p>Email: {usuario.email}</p>
            <p>Username: {usuario.username}</p>
            <p>Website: {usuario.website}</p>
        </div>
    )
}

export default UserDetails;
