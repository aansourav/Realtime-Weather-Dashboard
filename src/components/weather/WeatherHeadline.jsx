import { useContext } from "react";

import PinIcon from "../../assets/pin.svg";

import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";

function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);

  const { climateIcon, location, temperature, time } = weatherData;

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={`http://openweathermap.org/img/w/${climateIcon}.png`} alt="climate" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinIcon} alt="pin" />
            <h2 className="text-2xl text-wrap leading-tight lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} - {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
}

export default WeatherHeadline;
