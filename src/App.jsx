import Footer from "./Component/Footer/Footer";
import Page from "./Page";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>

          <Page />
          <Footer />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
