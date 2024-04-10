export const packages = [
  {
    name: "Basic Care",
    description:
      "Provides essential care including shelter, food, exercise, and grooming for Pokémon in need of a safe and nurturing environment.",
    services: [
      "Standard shelter accommodation",
      "Feed with balanced diet",
      "Regular exercise session",
      "Basic grooming",
    ],
  },
  {
    name: "Deluxe Care",
    description:
      "Offers upgraded accommodations, premium food options, tailored exercise routines, and enhanced grooming services for Pokémon looking for extra comfort and luxury.",
    services: [
      "Premium shelter accommodation",
      "Feed with premium meals",
      "Customized exercise session",
      "Deluxe grooming",
      "Access to play area",
      "Access to pool area",
    ],
  },
  {
    name: "Rehabilitation",
    description:
      "Tailored for injured or sick Pokémon, offering specialized medical treatment, physical therapy, nutritional supplements, and round-the-clock monitoring to aid in recovery.",
    services: [
      "Standard shelter accommodation",
      "Feed with nutritional meals",
      "Physical therapy session",
      "Give nutritional suppliments",
    ],
  },
  {
    name: "Training",
    description:
      "Focuses on enhancing Pokémon skills and intelligence through personalized training sessions, skill development, mental stimulation exercises, and regular progress assessments.",
    services: [
      "Gym accommodation",
      "Feed with booster meals",
      "Personalized training session",
      "Give nutritional suppliments",
    ],
  },
  {
    name: "Vacation",
    description:
      "Offers a luxurious getaway for Pokémon with gourmet meals, spa treatments, recreational activities, personalized attention, and relaxation in a resort-like setting.",
    services: [
      "Luxurious shelter accommodation",
      "Feed with gourmet meals",
      "Spa session and therapy",
      "Deluxe grooming",
      "Access to play area",
      "Access to pool area",
    ],
  },
];

export const getPackageData = (key) => {
  for (const packageObj of packages) {
    if (packageObj.name == key) {
      return packageObj;
    }
  }
  return null;
};
