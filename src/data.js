export const API_KEY = "AIzaSyBY98kYN3_O2wH2LJka3_CbMjbIzVaFj7s";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
