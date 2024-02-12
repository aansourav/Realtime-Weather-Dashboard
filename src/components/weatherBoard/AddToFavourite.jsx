import { useContext, useState } from "react";
import redHeartIcon from "../../assets/heart-red.svg";
import heartIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";
const AddToFavourite = () => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = () => {
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    setIsFavourite(!isFavourite);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? redHeartIcon : heartIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
