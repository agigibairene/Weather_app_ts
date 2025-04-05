import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import Hourlycast from "./components/Hourlycast";


function App() {

  return (
    <>
      <Header />
      <CurrentWeather />
      <Hourlycast/>
    </>
  )
}

export default App
