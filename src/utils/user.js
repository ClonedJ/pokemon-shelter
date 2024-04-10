const users = [
  {
    type: "employee",
    creds: {
      username: "emp1",
      password: "abcd1234",
    },
    profile: {
      firstName: "Haru",
      lastName: "Fukuhara",
      email: "haru@gmail.com",
      phoneNum: "09123456789",
      street: "unknown",
      city: "unknown",
      region: "unknown",
    },
  },
  {
    type: "trainer",
    creds: {
      username: "user1",
      password: "abcd1234",
    },
    profile: {
      firstName: "Ash",
      lastName: "Ketchum",
      email: "ashketchum@gmail.com",
      phoneNum: "09123456788",
      street: "Numbus St.",
      city: "Pallet Town",
      region: "Kanto Region",
    },
  },
];

export var currentUser = { type: "guest" };

export const validateUserCred = (creds) => {
  for (const userObj of users) {
    if (
      userObj.creds.username == creds.username &&
      userObj.creds.password == creds.password
    ) {
      return userObj;
    }
  }
  return null;
};

export const login = (newUser) => {
  currentUser = newUser;
};

export const logout = () => {
  currentUser = { type: "guest" };
};
