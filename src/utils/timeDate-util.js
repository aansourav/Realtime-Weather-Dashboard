export default function convertTimestamp(timestamp) {
  let date = new Date(timestamp * 1000);

  // Define an array to store the abbreviated names of days
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Define an array to store the abbreviated names of months
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Get the day, month, and year
  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear() % 100; // Extract the last two digits of the year

  // Get the day of the week
  let dayOfWeek = days[date.getDay()];

  // Get the hours, minutes, and AM/PM indicator
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  // Add leading zeros if needed
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Format the date and time string
  let formattedDate = `${hours}:${minutes} ${ampm} - ${dayOfWeek}, ${day} ${month} ‘${year}`;

  return formattedDate;
}
