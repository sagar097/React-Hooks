import React,{useContext} from 'react';
import ComponentF from './ComponentF';
import {UserContext,UserData} from './MainContext';

export default function ComponentE() {
    const firstContext = useContext(UserContext);
    const secContext = useContext(UserData);
    return (
        <div>
            <ComponentF/>
            {firstContext }-{secContext}
        </div>
    )
}
