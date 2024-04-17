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

const isTableId = (id) => {
  const regex = /^[a-zA-Z]{3}\d{5}$/;
  return regex.test(id);
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

const getForeignTableRecord = (foreignId) => {
  const table = getForeignTable(foreignId);
  for (const record of table) {
    if (record.id == foreignId) {
      return record;
    }
  }
};

export const parseTable = (table) => {
  table.forEach((record) => {
    Object.keys(record).forEach((property) => {
      if (property != "id" && isTableId(record[property])) {
        const foreignKey = record[property];
        const foreignRecord = getForeignTableRecord(foreignKey);
        record[property] = foreignRecord;
      }
    });
  });
  return table;
};
