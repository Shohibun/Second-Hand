import { faArrowLeft, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { register } from "../actions/auth";
import { useMediaQuery } from 'react-responsive';

const required = (value) => {
  if (!value) {
    return(
      <div>
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      </div>
    );
  };
};

const validName = (value) => {
  if (value.length < 3 || value.length > 20)
  return (
    <div className="alert alert-danger">
      The name must be between 3 and 20 characters.
    </div>
  )
}

const validEmail = (value) => {
  if (!isEmail(value)){
    return (
      <div className="">
        <div className="alert alert-danger">
          Email is not valid
        </div>
      </div>
    )
  }
}

const validPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger mx-auto" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      </div>
    );
  }
};

export default function Register() {

  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (element) => {
    element.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(name, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };
 
  const isMobile = useMediaQuery({minWidth: 600})

  return (
    <div className="container-fluid">
      <div className="custom-display">
        <FontAwesomeIcon icon={faArrowLeft} className="mt-4 ml-4 mb-4 custom-responsive-size" />
      </div>

      <div className="row">
        <div className="col-md-6 custom-bg-auth">
          <div className="custom-space"></div>
        </div>
        <div className="col-md-6">
          <div className={isMobile ? 'row p-4 w-75 mx-auto align-items-center custom-space-2' : 'row w-100 mx-auto align-items-center custom-space-2'}>
            <div className="col-md-12">
              <h4 className="text-dark font-weight-bold">Daftar</h4>

              <Form onSubmit={handleRegister} ref={form}>
              {!successful && (
                  <>
                    <div className="form-group mb-3">
                      <label
                        htmlFor="username"
                        className="text-dark mb-1 custom-font-2"
                      >
                        Nama
                      </label>
                      <Input
                        type="text"
                        className="form-control p-2 pl-4 custom-font-1 custom-border-auth"
                        placeholder="Nama Lengkap"
                        name="name"
                        value={name}
                        onChange={onChangeName}
                        validations={[required, validName]}
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label
                        htmlFor="email"
                        className="text-dark mb-1 custom-font-2"
                      >
                        Email
                      </label>
                      <Input
                        type="text"
                        className="form-control p-2 pl-4 custom-font-1 custom-border-auth"
                        placeholder="Contoh: johndee@gmail.com"
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                        validations={[required, validEmail]}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="password"
                        className="text-dark mb-1 custom-font-2"
                      >
                        Password
                      </label>

                      <div className="inner-addon right-addon">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-muted ml-2 custom-fa"
                        />

                        <Input
                          type="password"
                          className="form-control p-2 pl-4 custom-font-1 custom-border-auth"
                          placeholder="Masukkan password"
                          name="password"
                          value={password}
                          onChange={onChangePassword}
                          validations={[required, validPassword]}
                        />
                      </div>
                    </div>

                    <button className="mt-3 form-group font-weight-bold text-white border-0 py-2 w-100 custom-border-auth custom-button-auth custom-font-1">
                      Daftar
                    </button>
                    <p className="text-center text-dark custom-font-1 custom-responsive-space">
                      Sudah punya akun ? &nbsp;
                      <span>
                        <Link
                          to={"/login"}
                          className="font-weight-bold custom-font-auth"
                        >
                          Masuk di sini
                        </Link>
                      </span>
                    </p>
                  </>
                )}

                {message && (
                  <div className="form-group mt-2">
                    <div
                      className={
                        successful
                          ? "alert alert-success mx-auto"
                          : "alert alert-danger mx-auto"
                      }
                      role="alert"
                    >
                      {message}
                      <p className="mx-auto text-dark custom-auth-font">
                        Please go to the{" "}
                        <Link className="text-primary" to={"/login"}>
                          Login
                        </Link>{" "}
                        page
                      </p>
                    </div>
                  </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />


              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
