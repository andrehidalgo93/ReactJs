import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import fakeAuth from '../helpers/fake-auth';

//function PrivateRoute{
//
//}
const PrivateRoute = (props) => {
  //passando tudo que esta dentro do objeto props menos o component
  //Component --> variavel -- qualquer nome;
  const { component: Component, ...others } = props;
  return (
    <Route
      {...others} 
      render={(routeProps) => {
        return fakeAuth.getAuthenticated()
        //se usuario estiver logado 
          ? <Component {...routeProps} />
        //senão
          : <Redirect
              to = {{
                pathname: '/login',
                state: { from: routeProps.location }
              }}
            />
      }}
    />
  )
}

export default PrivateRoute;