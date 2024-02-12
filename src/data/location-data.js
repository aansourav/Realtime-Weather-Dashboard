const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "Chittagong",
    latitude: 22.3569,
    longitude: 91.7832,
  },
  {
    location: "Khulna",
    latitude: 22.8456,
    longitude: 89.5403,
  },
  {
    location: "Rajshahi",
    latitude: 24.3636,
    longitude: 88.6241,
  },
  {
    location: "Sylhet",
    latitude: 24.8949,
    longitude: 91.8687,
  },
  {
    location: "Barisal",
    latitude: 22.701,
    longitude: 90.3535,
  },
  {
    location: "Rangpur",
    latitude: 25.7439,
    longitude: 89.2752,
  },
  {
    location: "Narayanganj",
    latitude: 23.6137,
    longitude: 90.5038,
  },
  {
    location: "Gazipur",
    latitude: 23.9981,
    longitude: 90.4265,
  },
  {
    location: "Comilla",
    latitude: 23.4683,
    longitude: 91.1782,
  },
  {
    location: "Mymensingh",
    latitude: 24.7467,
    longitude: 90.4025,
  },
  {
    location: "Jessore",
    latitude: 23.1695,
    longitude: 89.2132,
  },
  {
    location: "Bogra",
    latitude: 24.8465,
    longitude: 89.3773,
  },
  {
    location: "Nawabganj",
    latitude: 24.5965,
    longitude: 88.2775,
  },
  {
    location: "Dinajpur",
    latitude: 25.6275,
    longitude: 88.6375,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: "Sydney",
    latitude: -33.8688197,
    longitude: 151.2092955,
  },
  {
    location: "Tokyo",
    latitude: 35.6894875,
    longitude: 139.6917064,
  },
  {
    location: "Paris",
    latitude: 48.8566969,
    longitude: 2.3514616,
  },
  {
    location: "Dubai",
    latitude: 25.276987,
    longitude: 55.296249,
  },
  {
    location: "Moscow",
    latitude: 55.755825,
    longitude: 37.617298,
  },
  {
    location: "Beijing",
    latitude: 39.9041999,
    longitude: 116.4073963,
  },
  {
    location: "Mumbai",
    latitude: 19.0761917,
    longitude: 72.875877,
  },
  {
    location: "Los Angeles",
    latitude: 34.052235,
    longitude: -118.243683,
  },
  {
    location: "Mexico City",
    latitude: 19.4326077,
    longitude: -99.133208,
  },
  {
    location: "São Paulo",
    latitude: -23.5505199,
    longitude: -46.6333094,
  },
  {
    location: "Istanbul",
    latitude: 41.0082376,
    longitude: 28.9783589,
  },
  {
    location: "Cairo",
    latitude: 30.0444196,
    longitude: 31.2357116,
  },
  {
    location: "Rome",
    latitude: 41.9027835,
    longitude: 12.4963655,
  },
  {
    location: "Berlin",
    latitude: 52.5200066,
    longitude: 13.404954,
  },
  {
    location: "Bangkok",
    latitude: 13.7563309,
    longitude: 100.5017651,
  },
  {
    location: "Madrid",
    latitude: 40.4167754,
    longitude: -3.7037902,
  },
  {
    location: "Lagos",
    latitude: 6.5243793,
    longitude: 3.3792057,
  },
  {
    location: "Seoul",
    latitude: 37.566535,
    longitude: 126.9779692,
  },
  {
    location: "Jakarta",
    latitude: -6.2087634,
    longitude: 106.845599,
  },
  {
    location: "Osaka",
    latitude: 34.693724,
    longitude: 135.5022535,
  },
  {
    location: "Cairo",
    latitude: 30.0444196,
    longitude: 31.2357116,
  },
  {
    location: "Manila",
    latitude: 14.5995124,
    longitude: 120.9842195,
  },
  {
    location: "Hong Kong",
    latitude: 22.3193039,
    longitude: 114.1693611,
  },
  {
    location: "Lima",
    latitude: -12.0463731,
    longitude: -77.042754,
  },
  {
    location: "Rio de Janeiro",
    latitude: -22.9068467,
    longitude: -43.1728965,
  },
  {
    location: "Shanghai",
    latitude: 31.2303904,
    longitude: 121.4737021,
  },
  {
    location: "Sydney",
    latitude: -33.8688197,
    longitude: 151.2092955,
  },
  {
    location: "Chicago",
    latitude: 41.8781136,
    longitude: -87.6297982,
  },
  {
    location: "Bangalore",
    latitude: 12.9715987,
    longitude: 77.5945627,
  },
  {
    location: "Rio de Janeiro",
    latitude: -22.9068467,
    longitude: -43.1728965,
  },
  {
    location: "Nairobi",
    latitude: -1.286389,
    longitude: 36.817223,
  },
  {
    location: "Cape Town",
    latitude: -33.9248685,
    longitude: 18.4240553,
  },
  {
    location: "Amsterdam",
    latitude: 52.3675734,
    longitude: 4.9041388,
  },
  {
    location: "Vienna",
    latitude: 48.2083537,
    longitude: 16.3725042,
  },
  {
    location: "Athens",
    latitude: 37.9838096,
    longitude: 23.7275388,
  },
  {
    location: "Stockholm",
    latitude: 59.3293235,
    longitude: 18.0685808,
  },
  {
    location: "Brussels",
    latitude: 50.8503463,
    longitude: 4.3517211,
  },
  {
    location: "San Francisco",
    latitude: 37.7749295,
    longitude: -122.4194155,
  },
  {
    location: "Dublin",
    latitude: 53.3498053,
    longitude: -6.2603097,
  },
  {
    location: "Zurich",
    latitude: 47.3768866,
    longitude: 8.541694,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: "Warsaw",
    latitude: 52.2296756,
    longitude: 21.0122287,
  },
  {
    location: "Munich",
    latitude: 48.1351253,
    longitude: 11.5819806,
  },
  {
    location: "Prague",
    latitude: 50.0755381,
    longitude: 14.4378005,
  },
  {
    location: "Milan",
    latitude: 45.4642035,
    longitude: 9.189982,
  },
  {
    location: "Barcelona",
    latitude: 41.3850639,
    longitude: 2.1734035,
  },
  {
    location: "Vancouver",
    latitude: 49.2827291,
    longitude: -123.1207375,
  },
];

const getLocations = () => {
  return data;
};
const getLocationByName = (location) => {
  if (!location) return null;

  const filteredLocation = data.find((city) => city.location.toLowerCase() === location.toLowerCase());
  if (filteredLocation) {
    return filteredLocation;
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };

    return defaultLocation;
  }
};

export { getLocationByName, getLocations };
