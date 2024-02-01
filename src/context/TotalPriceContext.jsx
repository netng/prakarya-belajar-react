import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext(null);

const TotalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
    switch(action.type) {
        case "UPDATE": {
            console.log("ACTION: ", action);
            return {
                total: action.payload.total,
            };
        }

        default: {
            throw Error("Unknown action: " + action.type);
        }

    }

}

export const TotalPriceProvider = ({children}) => {
    const [totalPrice, dispatch] = useReducer(totalPriceReducer, {total: 0});

    return (
        <TotalPriceContext.Provider value={totalPrice}>
            <TotalPriceDispatchContext.Provider value={dispatch}>
                {children}
            </TotalPriceDispatchContext.Provider>
        </TotalPriceContext.Provider>
    )

}



export const useTotalPrice = () => {
    return useContext(TotalPriceContext);
}

export const useTotalDispatch = () => {
    return useContext(TotalPriceDispatchContext);
}