import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <Fragment>
            <UserForm title={'Registro'} />
            <UserForm title={'Iniciar sesion'} />
          </Fragment>
        )
      }
    }
  </Context.Consumer>
)
