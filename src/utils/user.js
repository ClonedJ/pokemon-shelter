import { reactive } from "vue";

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

export const currentUser = reactive({
  type: "guest",
});

export const validateUserCred = (creds) => {
  for (const user of users) {
    if (
      user.creds.username == creds.username &&
      user.creds.password == creds.password
    ) {
      return user;
    }
  }
  return null;
};

export const login = (newUser) => {
  Object.assign(currentUser, newUser);
};

export const logout = () => {
  Object.assign(currentUser, { type: "guest" });
};
