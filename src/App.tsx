import { useContext } from 'react'
import Layout from './components/fn_components/Layout'
import { ThemeContext } from './context/ThemeProvider'

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  console.log(theme)
  return (
    <>
      <Layout >
        <button onClick={()=>toggleTheme()}>
          <h1 className={`${theme === "dark" ? "text-red-500" : "text-green-500"}`}>Layout</h1>
        </button>
      </Layout>
    </>
  )
}

export default App
