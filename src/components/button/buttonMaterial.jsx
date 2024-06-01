import React from 'react';
import Button from '@mui/material/Button';

const ButtonMaterial = (props) => {

    const {
        onClick
    } = props

    const styles = {
        width: '20vh' ,
    }

    return (
        <Button
            style={styles}
            onClick={onClick}
        >
            Назад
        </Button>
    );
};

export default ButtonMaterial;