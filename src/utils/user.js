import { reactive } from "vue";
import { getUserActiveReservationsCount } from "./reservation";

export const users = [
  {
    id: "USR00000",
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
    id: "USR00001",
    type: "trainer",
    creds: {
      username: "user1",
      password: "abcd1234",
    },
    profile: {
      firstName: "Nao",
      lastName: "Matsuda",
      displayName: "Nao Matsuda",
      email: "naomatsuda@gmail.com",
      phoneNum: "09123456788",
      street: "Numbus St.",
      city: "Pallet Town",
      region: "Kanto Region",
      pic: "/src/assets/images/trainers/Nao_PFP.png",
    },
    state: "Inactive",
    noOfPokemon: 0,
  },
  {
    id: "USR00002",
    type: "trainer",
    creds: {
      username: "user2",
      password: "abcd1234",
    },
    profile: {
      firstName: "John",
      lastName: "Doe",
      displayName: "John Doe",
      email: "johndoe@gmail.com",
      phoneNum: "09123456787",
      street: "Kalye St.",
      city: "Pallet Town",
      region: "Kanto Region",
      pic: "/src/assets/images/trainers/Default_PFP.png",
    },
    state: "Inactive",
    noOfPokemon: 0,
  },
  {
    id: "USR00003",
    type: "trainer",
    creds: {
      username: "user3",
      password: "abcd1234",
    },
    profile: {
      firstName: "Jane",
      lastName: "Doe",
      displayName: "Jane Doe",
      email: "janedoe@gmail.com",
      phoneNum: "09123456786",
      street: "Kalye St.",
      city: "Pallet Town",
      region: "Kanto Region",
      pic: "/src/assets/images/trainers/Default_PFP.png",
    },
    state: "Inactive",
    noOfPokemon: 0,
  },
  {
    id: "USR00004",
    type: "trainer",
    creds: {
      username: "user4",
      password: "abcd1234",
    },
    profile: {
      firstName: "Isamu",
      lastName: "Akai",
      displayName: "Isamu Akai",
      email: "isamuakai@gmail.com",
      phoneNum: "09123456785",
      street: "Numbus St.",
      city: "Pallet Town",
      region: "Kanto Region",
      pic: "/src/assets/images/trainers/Default_PFP.png",
    },
    state: "Inactive",
    noOfPokemon: 0,
  },
  {
    id: "USR00005",
    type: "trainer",
    creds: {
      username: "user5",
      password: "abcd1234",
    },
    profile: {
      firstName: "Vedal",
      lastName: "AI",
      displayName: "Vedal AI",
      email: "vedalai@gmail.com",
      phoneNum: "09123456784",
      street: "Ai St.",
      city: "Pallet Town",
      region: "Kanto Region",
      pic: "/src/assets/images/trainers/Default_PFP.png",
    },
    state: "Inactive",
    noOfPokemon: 0,
  },
];

export const currentUser = reactive({
  type: "guest",
});

const getUser = (userId) => {
  for (const user of users) {
    if (user.id == userId) {
      return user;
    }
  }
  return null;
};

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

export const updateUserData = (userId) => {
  const count = getUserActiveReservationsCount(userId);
  const user = getUser(userId);
  user.noOfPokemon = count;
  user.state = count > 0 ? "Active" : "Inactive";
};
