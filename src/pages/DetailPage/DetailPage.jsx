import React from 'react';
import { useSelector } from 'react-redux';
import './detailpage.css'
import {useNavigate} from "react-router-dom";
import ButtonMaterial from "../../components/button/buttonMaterial";

const DetailPage = () => {

    const user = useSelector(state => state.data);
    const navigate = useNavigate()

    function back ()  {
        navigate(`/`)
    }

    return (
        <div className='detail'>
            <div className="block">
                <h1>User Details</h1>
                {user ? (
                    <div>
                        <h1>{user.user.fullName}</h1>
                        <p>Город: {user.user.city}</p>
                        <p>Username: {user.user.username}</p>
                        <p>Работа: {user.user.job}</p>
                        <p>Язык програмирование: {user.user.language}</p>
                        <p>Пол: {user.user.sex}</p>
                    </div>
                ) : (
                    <h1>No User Available</h1>
                )}

                <ButtonMaterial onClick={back} />
            </div>

        </div>
    );
};

export default DetailPage;
