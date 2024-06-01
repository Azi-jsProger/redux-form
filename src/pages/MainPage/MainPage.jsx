import React, { useEffect, useState } from 'react';
import Form from "../../components/Form/form";
import './main.css';
import vector from '../../assets/Vector.png';
import vectorOne from '../../assets/Vector-1.png';
import theme from '../../assets/themeButton.png';
import { useDispatch } from "react-redux";
import { setData } from "../../redux/slices/dataSlices";
import { postUsers } from "../../requests/postUsers";
import { showError, showSucsess } from "../../utils/alert/alert";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";

const MainPage = () => {

    const dispatch = useDispatch();
    const [isAnimating, setIsAnimating] = useState(true);

    const navigate = useNavigate()
    const onSubmit = async (data) => {
        try {
            const response = await postUsers(data);
            dispatch(setData(response));
            navigate(`/detailPage`)
            showSucsess('Успешно вошли', 'Здраствуйте');
        } catch (e) {
            if (e.response.status === 400) {
                showError('Ошибка', 'Неправильный запрос');
            } else if (e.response.status === 401) {
                showError('Ошибка', 'Вы не авторизованы');
            } else if (e.response.status === 403) {
                showError('Ошибка', 'Нет прав смотреть контента');
            } else if (e.response.status === 404) {
                showError('Ошибка', 'Не найдено');
            } else {
                showError('Ошибка', 'Не включено интернет');
            }
        }
    };

    useEffect(() => {
        if (isAnimating) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Clean up by removing the class when the component unmounts
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isAnimating]);

    const handleAnimationComplete = () => {
        setIsAnimating(false);
    };

    return (
        <div className='Main'>
            <Form onSubmit={onSubmit} />

            <div className="image-container">
                <div className="vectors">
                    <motion.img
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 2 }}
                        className='img-vector vectorTwo'
                        src={vector}
                        onAnimationComplete={handleAnimationComplete}
                    />

                    <motion.img
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 2 }}
                        src={vectorOne}
                        className='img-vector vectorOne'
                        onAnimationComplete={handleAnimationComplete}
                    />
                </div>

                <motion.img
                    initial={{ x: -100, rotate: -180 }}
                    animate={{ x: 50, rotate: 360 }}
                    transition={{ duration: 2 }}
                    src={theme}
                    className='theme'
                    onAnimationComplete={handleAnimationComplete}
                />
            </div>
        </div>
    );
};

export default MainPage;
