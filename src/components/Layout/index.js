import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <Fragment>
      <Helmet>
        { title && <title>{title} | Petgram</title> }
        { subtitle && <meta name='decription' content={subtitle} />}
      </Helmet>
      <div>
        { title && <h1>{ title }</h1> }
        { subtitle && <h2>{ subtitle }</h2> }
        { children }
      </div>
    </Fragment>
  )
}
