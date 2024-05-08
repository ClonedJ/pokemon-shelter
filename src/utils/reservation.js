import { reactive } from "vue";
import { getPackageData } from "./package";
import { addPokemon } from "./pokemon";

export const reservations = reactive([
  {
    id: "RSV00001",
    user: {
      id: "USR00001",
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
    state: "Pending",
    package: "Basic Care",
    pokemon: {
      id: "PKM00001",
      name: "Pikachuchu",
      specie: "Pikachu",
      age: 13,
    },
    reservation: {
      checkInDate: "2024-04-10",
      checkInTime: "12:00",
      checkOutDate: "2024-04-20",
      checkOutTime: "12:00",
    },
  },
  {
    id: "RSV00002",
    user: {
      id: "USR00002",
      type: "trainer",
      creds: {
        username: "user2",
        password: "abcd1234",
      },
      profile: {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        phoneNum: "09123456787",
        street: "Kalye St.",
        city: "Pallet Town",
        region: "Kanto Region",
      },
    },
    state: "Pending",
    package: "Basic Care",
    pokemon: {
      id: "PKM00002",
      name: "Pikaaa",
      specie: "Pikachu",
      age: 15,
    },
    reservation: {
      checkInDate: "2024-04-10",
      checkInTime: "12:00",
      checkOutDate: "2024-04-20",
      checkOutTime: "12:00",
    },
  },
  {
    id: "RSV00003",
    user: {
      id: "USR00001",
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
    state: "Pending",
    package: "Basic Care",
    pokemon: {
      id: "PKM00003",
      name: "Snorlachuchu",
      specie: "Snorlax",
      age: 13,
    },
    reservation: {
      checkInDate: "2024-04-10",
      checkInTime: "12:00",
      checkOutDate: "2024-04-20",
      checkOutTime: "12:00",
    },
  },
  {
    id: "RSV00004",
    user: {
      id: "USR00001",
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
    state: "Pending",
    package: "Basic Care",
    pokemon: {
      id: "PKM00004",
      name: "Muuuuck",
      specie: "Muk",
      age: 13,
    },
    reservation: {
      checkInDate: "2024-04-10",
      checkInTime: "12:00",
      checkOutDate: "2024-04-20",
      checkOutTime: "12:00",
    },
  },
]);

const generateNewId = () => {
  const maxId = parseInt(
    reservations[reservations.length - 1].id.replace("RSV", ""),
    10
  );
  const newId = "RSV" + String(maxId + 1).padStart(5, "0");
  return newId;
};

export const fileReservation = (form) => {
  const pokemonId = addPokemon(form.pokemon);

  form.id = generateNewId();
  form.state = "Pending";
  form.pokemon.id = pokemonId;
  reservations.push(JSON.parse(JSON.stringify(form)));
  console.log(JSON.stringify(reservations, null, 2));
};

export const acceptReservation = (reservation) => {
  const packageData = getPackageData(reservation.package);
  reservation.state = "Reserved";
  reservation.tasks = packageData.tasks;
};

export const rejectReservation = (reservation) => {
  reservation.state = "Rejected";
};

export const completeReservation = (reservation) => {
  reservation.state = "Completed";
};

export const getUserActiveReservationsCount = (userId) => {
  return reservations.filter(
    (record) => record.user.id == userId && record.state == "Reserved"
  ).length;
};

export const getStateReservationsCount = (state) => {
  return reservations.filter((record) => record.state == state).length;
};
