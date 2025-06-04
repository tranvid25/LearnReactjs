import { useReducer } from "react";
import { TodoContext } from "./context"
import { todoReducer } from "./reducer";

const TodoProvider=({children})=>{
    const [state,dispath]=useReducer(todoReducer,initialState);
    console.log(state);
    return <TodoContext.Provider>{children}</TodoContext.Provider>
};
export{TodoProvider};
