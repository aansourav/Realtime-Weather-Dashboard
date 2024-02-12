import { useContext } from "react";
import pinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import convertTimestamp from "../../utils/timeDate-util";

const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);
  const { temperature, climateIcon, time, location } = weatherData;

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={`http://openweathermap.org/img/w/${climateIcon}.png`} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°C
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinIcon} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg"> {convertTimestamp(time)} </p>
    </div>
  );
};

export default WeatherHeadline;
