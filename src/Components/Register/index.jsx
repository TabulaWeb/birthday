import React from "react";
import './index.css'
import img from '../../Assets/birthday.svg'

const Register = () => {
  return (
    <>
      <div className="register-title">
        <p>Добро пожаловать</p>
        <p>Введите свое имя</p>
      </div>

      <div className="register-form">
        <input type="text" placeholder="Имя" />
        <button>ПРОДОЛЖИТЬ</button>
      </div>

      <div className="register-img">
        <div className="register-img__container">
          <img src={img} alt="birthday" />
        </div>
      </div>
    </>
  );
};

export default Register;
