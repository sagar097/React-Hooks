import React from 'react'
import ComponentC from './ComponentC';
export const UserContext = React.createContext();
export const UserData = React.createContext();
function MainContext() {
    
    return (
        <div>
            <UserContext.Provider value={'First_Context_Data'}>
                <UserData.Provider value={'Second_Context_Data'}>
                    <ComponentC />
                </UserData.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default MainContext
