import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import {useDispatch} from "react-redux";
import {postUsers} from "../requests/postUsers";
import {setData} from "../redux/slices/dataSlices";
import {showError, showSucsess} from "../utils/alert/alert";

const MainRoutes = () => {




    return (
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/detailPage'} element={<DetailPage />} />
        </Routes>
    );
};

export default MainRoutes;

