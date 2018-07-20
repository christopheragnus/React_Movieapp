import React from 'react'
import {
    Route
} from 'react-router-dom'

import {
    pageWithoutLayout
} from './containers/page'

import Home from './views/Home/Home'
import About from './views/About/About'

export const Routes = props => (
    <div className='app'>
        <Route 
        exact path='/' 
        component={Home} />
        <Route 
        path='/about' 
        component={(renderProps) => (
            <About {...props} {...renderProps} />
        )} 
    />
    </div>
)

export default pageWithoutLayout(Routes)