
import Page from "./Page";
import { FavouriteProvider, LocationProvider, WeatherProvider } from "./provider";


function App() {

  return (
    <WeatherProvider>
      <FavouriteProvider>
        <LocationProvider>
          <Page />
        </LocationProvider>
      </FavouriteProvider>
    </WeatherProvider>
  );
}

export default App;
