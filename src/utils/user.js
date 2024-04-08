import users from "../assets/data/userData.json";

export const validateUserCred = (creds) => {
  for (const userObj of users.data) {
    if (
      userObj.creds.username == creds.username &&
      userObj.creds.password == creds.password
    ) {
      return userObj;
    }
  }
  return null;
};
