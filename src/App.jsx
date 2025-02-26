import { useEffect, useState } from "react";
import Card from "./components/card";
import Toggle from "./components/toggle";
import { ThemeProvider } from "./context/themecontext";
function App() {
  const [themeMode,setthememode]=useState("light")
  const lighttheme=()=>{
    setthememode("light")
  }
  const darktheme=()=>{
    setthememode("dark")
  }
  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])
  return (
    <>
      <ThemeProvider value={{themeMode,lighttheme,darktheme}}>
        <div className="flex h-screen flex-col gap-2 w-full justify-center items-center">
          <Card />
          <Toggle />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
