import { reactive } from "vue";

export const reservations = reactive([
  {
    id: "RSV00001",
    user: "user1",
    state: "Pending",
    package: "Basic Care",
    pokemon: {
      name: "Pikachu",
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
]);

const getNewId = () => {
  const maxId = parseInt(
    reservations[reservations.length - 1].id.replace("RSV", ""),
    10
  );
  const newId = "RSV" + String(maxId + 1).padStart(5, "0");
  return newId;
};

export const fileReservation = (form) => {
  form.id = getNewId();
  form.state = "Pending";
  reservations.push(form);
};

export const acceptReservation = (reservation) => {
  reservation.state = "Reserved";
};

export const rejectReservation = (reservation) => {
  reservation.state = "Rejected";
};
