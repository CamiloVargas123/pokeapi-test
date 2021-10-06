import {createContext, useState} from "react"

export const SearchContext = createContext();

export default function SearchPoke(props) {
  const {children} = props;
  const [namePoke, setNamePoke] = useState("");

  return <SearchContext.Provider value={{namePoke, setNamePoke}} >{children}</SearchContext.Provider>
}