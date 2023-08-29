import { faArrowLeft, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { useDispatch, useSelector } from "react-redux";
import CheckButton from "react-validation/build/button";
import { login } from "../actions/auth";
import { useMediaQuery } from 'react-responsive';

const required = (value) => {
  if (!value) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger mx-auto">
          This field is required!
        </div>
      </div>
    );
  }
};

export default function Login(props) {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const { user } = useSelector((state) => state?.auth);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (element) => {
    const email = element.target.value;
    setEmail(email);
  };

  const onChangePassword = (element) => {
    const password = element.target.value;
    setPassword(password);
  };

  const handleLogin = (element) => {
    element.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          if (user?.roles[0] === "ROLE_ACCOUNT") {
            props.history.push("/dashboard-user");
            window.location.reload();
          }
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };
  
  const isMobile = useMediaQuery({minWidth: 600})

  if (isLoggedIn) {
    if (user?.roles[0] === "ROLE_ACCOUNT") {
      return <Navigate to={"/home-account"} />;
    }
  }
  

  return (
    <div className="container-fluid">
      <div className="custom-display">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="mt-4 ml-4 custom-responsive-size"
        />
      </div>

      <div className="row">
        <div className="col-md-6 custom-bg-auth">
          <div className="custom-space"></div>
        </div>
        <div className="col-md-6">
          <div className={isMobile ? 'row p-4 w-75 mx-auto align-items-center custom-space-2' : 'row w-100 mx-auto align-items-center custom-space-2'}>
            <div className="col-md-12">
              <h4 className="text-dark font-weight-bold">Masuk</h4>

              <Form onSubmit={handleLogin} ref={form}>
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
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required]}
                    placeholder="Contoh: johndee@gmail.com"
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
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required]}
                      placeholder="Masukkan password"
                    />
                  </div>
                </div>

                <button className="mt-3 form-group font-weight-bold text-white border-0 py-2 w-100 custom-border-auth custom-button-auth custom-font-1">
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Masuk</span>
                </button>

                <p className="text-center text-dark custom-font-1 custom-responsive-space">
                  Belum punya akun ? &nbsp;
                  <span>
                    <Link
                      to={"/register"}
                      className="font-weight-bold custom-font-auth"
                    >
                      Daftar di sini
                    </Link>
                  </span>
                </p>

                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger mx-auto">
                      {message}
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
