import { pokemons } from "./pokemon";
import { reservations } from "./reservation";
import { users } from "./user";

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

export const isForeignKey = (id, key) => {
  const regex = /^[a-zA-Z]{3}\d{5}$/;
  return regex.test(id) && key != "id";
};

const getForeignTable = (foreignId) => {
  const idPrefix = foreignId.substring(0, 3);
  const foreignTable =
    idPrefix == "PKM"
      ? pokemons
      : idPrefix == "RSV"
      ? reservations
      : idPrefix == "USR"
      ? users
      : null;
  return foreignTable;
};

export const getForeignTableRecord = (foreignId) => {
  const table = getForeignTable(foreignId);
  for (const record of table) {
    if (record.id == foreignId) {
      return record;
    }
  }
};
