import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {Button, createField, Input} from "../common/FormsControls/FormsControls";
import {minLengthCreator, required} from "../../utils/validators/validators";
import styles from "./../common/FormsControls/FormsControls.module.css";

// const minLength0 = minLengthCreator(0)

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {/*<Field placeholder={"Email"} name={"email"} validate={[required]} component={Input}/>
             refaktor qilinmoqda */}
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "rememberMe")}
                {/*< div >
                    < Field placeholder={"Password"} name={"password"} type={"password"} validate={[required]} component={Input}/>
                </div>
                <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
                </div>*/}
                {error && <div className={styles.formSummaryError}>
                {error}
                </div>}
                <div><button>LOGIN</button></div>
                </form>
                )};
                const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
                const Login = (props) => {
                const onSubmit = (formData) => {
                props.login(formData.email, formData.password, formData.rememberMe)
                };
                if (props.isAuth) {
                return <Redirect to={"/profile"}/>
                }
                return <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
                </div>
                };

                const mapStateToProps = (state) => ({
                isAuth: state.auth.isAuth
                });

                export default connect(mapStateToProps, {login})(Login)