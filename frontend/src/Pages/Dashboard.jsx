import React from 'react'
import { AppBar } from '../components/AppBar'
import { Users } from '../components/Users'
import User from '../components/Users'
import { Balance } from '../components/Balance'


export function Dashboard(props) {
        

        return (
                <div>
                <AppBar/>
                <div>
                <Balance value={Users.Balance}/>
                <Users/>
                <User/>
                </div>
                
                
                </div>
        )
}
