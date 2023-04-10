const getDate = () => {
  const two = -2;
  const now = new Date();
  const year = now.getFullYear();
  const month = (`0${now.getMonth() + 1}`).slice(two);
  const day = (`0${now.getDate()}`).slice(two);
  const hours = (`0${now.getHours()}`).slice(two);
  const minutes = (`0${now.getMinutes()}`).slice(two);
  const seconds = (`0${now.getSeconds()}`).slice(two);
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
};

module.exports = { getDate };
