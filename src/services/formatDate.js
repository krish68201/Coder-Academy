export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const hour = date.getHours();
  const minutes = date.getMinutes();
  const period = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // Adjusted line
  const formattedTime = `${formattedHour}:${minutes.toString().padStart(2, "0")} ${period}`; // Adjusted line

  return `${formattedDate} | ${formattedTime}`;
};