import React from 'react'
import { UserContext, UserData } from './MainContext'
export default function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (<UserData.Consumer>
                            {contextData => {
                                return <div>Data From UserContext is: {user} <br/> Data from Second contextData is:{contextData}</div>
                            }
                            }
                        </UserData.Consumer>)
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
