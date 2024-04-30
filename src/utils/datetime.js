export const convertDateToTime = (date) => {
  const timeString = date.toTimeString();
  const time =
    timeString[1] == ":"
      ? timeString.substring(0, 4)
      : timeString.substring(0, 5);
  return time;
};

const toLocalISOString = (date) => {
  var tzoffset = date.getTimezoneOffset() * 60000;
  var localISOTime = new Date(date.getTime() - tzoffset)
    .toISOString()
    .slice(0, -1);
  return localISOTime;
};

export const addOneDay = (date) => {
  date.setDate(date.getDate() + 1);
  return date;
};

export const convertDateToIDate = (date) => {
  return toLocalISOString(date).substring(0, 10);
};
