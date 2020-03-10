import React from 'react'
import { Switch, Route  } from 'react-router-dom'
import Login from '../pages/login'
import Home from '../pages/home'
import MovieRecommendation from '../pages/movie-recommendation'
import ClassifyImage from '../pages/classify-image'

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/movie-recommender' component={MovieRecommendation}/>
            <Route path='/classification' component={ClassifyImage}/>
        </Switch>
    )
}