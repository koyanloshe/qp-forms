const patterns = {
  text: "[a-zA-Z]+",
  number: "[0-9]+",
  email: "[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+",
  password: "[a-zA-Z0-9]+",
  tel: "^[0-9]+$",
  url: "^(http|https|ftp)://[a-zA-Z0-9-.]+.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?/?([a-zA-Z0-9-._?,'/\\+&amp;%$#=~])*$",
  date: "[0-9]+",
  time: "[0-9]+",
  datetime: "[0-9]+",
  month: "[0-9]+",
  week: "[0-9]+",
  color: "[a-zA-Z]+",
  range: "[0-9]+",
  search: "[a-zA-Z0-9]+",
  textarea: "[a-zA-Z]+",
  select: "[a-zA-Z]+",
  radio: "[a-zA-Z]+",
  checkbox: "[a-zA-Z]+",
  file: "[a-zA-Z]+",
  hidden: "[a-zA-Z]+",
  image: "[a-zA-Z]+",
};

export default patterns;
