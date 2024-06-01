import React from 'react';
import { useForm } from "react-hook-form";
import './form.css';

const Form = (props) => {

    const {
        onSubmit
    } = props

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className="h2">
                <h1>Sign in</h1>
                <h4>Sign in and start managing your candidates!</h4>
            </div>

            <div className="username">
                <input {...register('username', {
                    required: 'Имя не может быть пустым',
                    minLength: {
                        value: 4,
                        message: 'минимум 4 символа'
                    },
                    maxLength: {
                        value: 15,
                        message: 'максимум 15 имволов '
                    }
                })}
                       placeholder='Login'
                       type="text"
                       className='input-form'
                />
                {errors?.username && (<div>{errors.username.message}</div>)}
            </div>

            <div className="password">
                <input
                    {...register('password', {
                        required: 'Пароль не может быть пустым',
                        minLength: {
                            value: 4,
                            message: 'минимум 4 символа'
                        },
                        maxLength: {
                            value: 15,
                            message: 'максимум 15 символов '
                        }
                    })}
                    placeholder='Password'
                    type="password"
                    className='input-form'
                />
                {errors?.password && (<div>{errors.password.message}</div>)}
            </div>

            <div className="check">
                <div className="checked">
                    <input
                        type="checkbox"
                        id="remember"
                        className="checkbox-in"
                    />
                    <label htmlFor="remember" className="checkbox-label">
                        <span className="custom-checkbox"></span>
                        Remember me
                    </label>
                </div>
                <a href="">Forgot password?</a>
            </div>

            <button
                type='submit'
                className='input-form form-but'
            >
                Login
            </button>
        </form>
    );
};

export default Form;
