import { createContext } from "react";

export let ExercisesContext = createContext();

export default function ExercisesContextProvider(props){

let x = 10;
    return <ExercisesContext.Provider value={{x}}>
        {props.children}
    </ExercisesContext.Provider>
}