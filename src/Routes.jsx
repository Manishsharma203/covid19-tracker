import React from 'react'
import { Route, Switch } from 'react-router-dom'
import StateDetails from './components/StateDetails'
import Statewise from './components/Statewise'
import Overview from './components/Overview'
import News from './components/News'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={()=><Overview/>}/>
                <Route exact path='/statewise' render={()=><Statewise/>}/>
                <Route exact path='/statedetails' render={()=><StateDetails/>}/>
                <Route exact path='/statedetails/:state' render={(props)=><StateDetails {...props} />}/>
                <Route exact path='/news' render={()=><News/>}/>
            </Switch>
        </div>
    )
}
