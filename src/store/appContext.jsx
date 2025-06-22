import { createContext, useState } from "react";

export const appContext = createContext({
  courses: [],
  setCourses: ()=>{},
  filtered: [],
  setFiltered: ()=>{},
  display: [],
  setDisplay: ()=>{},
  isLoading: Boolean,
  setLoading: ()=>{},
});


export const AppContextProvider = ({children}) => {

  const [view, setView] = useState({}); 
  const [isLoading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [display, setDisplay] = useState([]);
  const [year, setYear] = useState();
  const [semester, setSemester] = useState();
  
  return(
    <appContext.Provider value={{
      courses, setCourses, isLoading, setLoading, year, setYear, semester, setSemester, filtered, setFiltered, display, setDisplay, setView, view
    }}>
    {children}
    </appContext.Provider>
  )
}