import React, { Fragment, useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import {useRegisterMutation} from "../hooks/useRegisterMutation"
import { useLoginMutation } from "../hooks/useLoginMutation";
import { Helmet } from 'react-helmet'

export const NotRegisterUser = () => {
    const { activateAuth } = useContext(Context);
    const {
        registerMutation,
        loading: loadingReg,
        error: errorReg,
    } = useRegisterMutation();
    const {
        loginMutation,
        loading: loadingLog,
        error: errorLog,
    } = useLoginMutation();
    
    const onSubmitReg = ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        registerMutation({ variables }).then((data) => {
            const { signup } = data.data;
            activateAuth(signup);
        });
    };

    const onSubmitLog = ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        loginMutation({ variables }).then((data) => {
            const { login } = data.data;
            activateAuth(login);
        });
    };

    const errorMsgReg = errorReg && "ha ocurrido un error";
    const errorMsgLog =
        errorLog &&
        "el usuario o contraseña no son correctos o el usuario no existe";

    return (
        <Fragment>
          <Helmet>
            <title>Petgram - Usuario no registrado</title>
            <meta name="description" content="Vista protegida para usuarios no registrados" />
          </Helmet>
          <UserForm
              error={errorMsgReg}
              loading={loadingReg}
              title="Registrarse"
              onSubmit={onSubmitReg}
          />
          <UserForm
              error={errorMsgLog}
              loading={loadingLog}
              title="Iniciar sesión"
              onSubmit={onSubmitLog}
            />
        </Fragment>
    );
};
