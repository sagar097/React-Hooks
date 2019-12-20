import React from 'react'
import { UserContext, UserData } from './App'
export default function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (<UserData.Consumer>
                            {contextData => {
                                return <div>Data From UserContext is: {user}  Data from Second contextData is:{contextData}</div>
                            }
                            }
                        </UserData.Consumer>)
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
