import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import Hourlycast from "./components/Hourlycast";
import DailyCast from "./components/DailyCast";


function App() {

  return (
    <>
      <Header />
      <CurrentWeather />
      <Hourlycast/>
      <DailyCast />
    </>
  )
}

export default App
