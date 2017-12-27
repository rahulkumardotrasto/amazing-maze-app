import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import Maze from '../containers/Maze'
import Profile from '../containers/Profile'

const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
    >
      <IndexRoute
        component={Maze}
      />
      <Route
        path='/profile'
        component={Profile}
      />
    </Route>
  )
}
const Routes = createRoutes()

export default Routes
