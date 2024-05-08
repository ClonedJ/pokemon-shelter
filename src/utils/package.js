export const packages = [
  {
    name: "Basic Care",
    description:
      "Provides essential care including shelter, food, exercise, and grooming for Pokémon in need of a safe and nurturing environment.",
    img: "/src/assets/images/packages/basic.png",
    services: [
      "Standard shelter accommodation",
      "Feed with balanced diet",
      "Regular exercise session",
      "Basic grooming",
    ],
    tasks: [
      "Feed pokemon with standard meal",
      "Exercise with pokemon",
      "Groom pokemon with brush",
      "Let pokemon sleep",
    ],
  },
  {
    name: "Deluxe Care",
    description:
      "Offers upgraded accommodations, premium food options, tailored exercise routines, and enhanced grooming services for Pokémon looking for extra comfort and luxury.",
    img: "/src/assets/images/packages/deluxe.png",
    services: [
      "Premium shelter accommodation",
      "Feed with premium meals",
      "Regular exercise session",
      "Deluxe grooming",
      "Access to play area",
      "Access to pool area",
    ],
    tasks: [
      "Feed pokemon with premium meal",
      "Exercise with pokemon",
      "Groom pokemon with fancy brush",
      "Put pokemon in the play area",
      "Put pokemon in the pool area",
      "Let pokemon sleep",
    ],
  },
  {
    name: "Rehabilitation",
    description:
      "Tailored for injured or sick Pokémon, offering specialized medical treatment, physical therapy, nutritional supplements, and round-the-clock monitoring to aid in recovery.",
    img: "/src/assets/images/packages/rehabilitation.webp",
    services: [
      "Standard shelter accommodation",
      "Feed with nutritional meals",
      "Access to nutritional suppliments",
      "Physical therapy session",
    ],
    tasks: [
      "Feed pokemon with nutritional meal",
      "Give pokemon with nutritional suppliments",
      "Give pokemon physical theraphy",
      "Let pokemon sleep",
    ],
  },
  {
    name: "Training",
    description:
      "Focuses on enhancing Pokémon skills and intelligence through personalized training sessions, skill development, mental stimulation exercises, and regular progress assessments.",
    img: "/src/assets/images/packages/training.jpg",
    services: [
      "Gym accommodation",
      "Feed with booster meals",
      "Access to nutritional suppliments",
      "Personalized training session",
    ],
    tasks: [
      "Feed pokemon with booster meal",
      "Give pokemon with nutritional suppliments",
      "Give pokemon personalized training",
      "Let pokemon rest",
    ],
  },
  {
    name: "Vacation",
    description:
      "Offers a luxurious getaway for Pokémon with gourmet meals, spa treatments, recreational activities, personalized attention, and relaxation in a resort-like setting.",
    img: "/src/assets/images/packages/vacation.png",
    services: [
      "Luxurious shelter accommodation",
      "Feed with gourmet meals",
      "Deluxe grooming",
      "Access to spa",
      "Access to play area",
      "Access to pool area",
    ],
    tasks: [
      "Feed pokemon with gourmet meal",
      "Groom pokemon with fancy brush",
      "Put pokemon in the spa area",
      "Put pokemon in the play area",
      "Put pokemon in the pool area",
      "Let pokemon sleep",
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
