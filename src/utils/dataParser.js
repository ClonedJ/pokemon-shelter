// ex. 'Basic Care' turns to 'basic-care'
export const parseString = (string) => {
  return string.toLowerCase().replace(/ /g, "-");
};

// ex. 'basic-care' turns to 'Basic Care'
export const parseUrl = (url) => {
  return url
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
};
