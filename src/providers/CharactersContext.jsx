import { createContext, useState } from "react";

const CharactersContext = createContext({})

export function CharactersContextProvider({children}) {
    const [selected, setSelected] = useState({char1: 0, char2: 0})

    return (
        <CharactersContext.Provider value={{selected, setSelected}}>
            {children}
        </CharactersContext.Provider>
    )
}

export default CharactersContext