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
    tasks: [
      {
        name: "Feed pokemon with standard meal",
        action: "Feeding pokemon with standard meal",
        place: "Standard shelter",
        pokemonState: "Eating yummy meal",
        duration: 3,
      },
      {
        name: "Exercise with pokemon",
        action: "Exercising with pokemon",
        place: "Gym",
        pokemonState: "Exercising",
        duration: 10,
      },
      {
        name: "Groom pokemon with brush",
        action: "Grooming pokemon with brush",
        place: "Standard shelter",
        pokemonState: "Being groomed",
        duration: 3,
      },
      {
        name: "Let pokemon sleep",
        action: "Let pokemon sleep",
        place: "Standard shelter",
        pokemonState: "Zzzz..",
        duration: 60 * 60 * 24,
      },
    ],
  },
  {
    name: "Deluxe Care",
    description:
      "Offers upgraded accommodations, premium food options, tailored exercise routines, and enhanced grooming services for Pokémon looking for extra comfort and luxury.",
    services: [
      "Premium shelter accommodation",
      "Feed with premium meals",
      "Regular exercise session",
      "Deluxe grooming",
      "Access to play area",
      "Access to pool area",
    ],
    tasks: [
      {
        name: "Feed pokemon with premium meal",
        action: "Feeding pokemon with premium meal",
        place: "Premium shelter",
        pokemonState: "Eating fancy meal",
        duration: 3,
      },
      {
        name: "Exercise with pokemon",
        action: "Exercising with pokemon",
        place: "Gym",
        pokemonState: "Exercising",
        duration: 10,
      },
      {
        name: "Groom pokemon with fancy brush",
        action: "Grooming pokemon with fancy brush",
        place: "Premium shelter",
        pokemonState: "Being groomed super comfortably",
        duration: 3,
      },
      {
        name: "Put pokemon in the play area",
        action: "Watch pokemon have fun",
        place: "Play area",
        pokemonState: "Playing with other pokemon",
        duration: 5,
      },
      {
        name: "Put pokemon in the pool area",
        action: "Watch pokemon swim",
        place: "Pool area",
        pokemonState: "Swimming in the pool",
        duration: 5,
      },
      {
        name: "Let pokemon sleep",
        action: "Let pokemon sleep",
        place: "Premium shelter",
        pokemonState: "Zzzzzzzz...",
        duration: 60 * 60 * 24,
      },
    ],
  },
  {
    name: "Rehabilitation",
    description:
      "Tailored for injured or sick Pokémon, offering specialized medical treatment, physical therapy, nutritional supplements, and round-the-clock monitoring to aid in recovery.",
    services: [
      "Standard shelter accommodation",
      "Feed with nutritional meals",
      "Access to nutritional suppliments",
      "Physical therapy session",
    ],
    tasks: [
      {
        name: "Feed pokemon with nutritional meal",
        action: "Feeding pokemon with nutritional meal",
        place: "Standard shelter",
        pokemonState: "Eating balanced meal",
        duration: 3,
      },
      {
        name: "Give pokemon with nutritional suppliments",
        action: "Giving pokemon with nutritional suppliments",
        place: "Standard shelter",
        pokemonState: "Eating nutritional suppliments",
        duration: 3,
      },
      {
        name: "Give pokemon physical theraphy",
        action: "Stiching pokemon",
        place: "Clinic",
        pokemonState: "Being stitched up",
        duration: 10,
      },
      {
        name: "Let pokemon sleep",
        action: "Let pokemon sleep",
        place: "Standard shelter",
        pokemonState: "Zzzz..",
        duration: 60 * 60 * 24,
      },
    ],
  },
  {
    name: "Training",
    description:
      "Focuses on enhancing Pokémon skills and intelligence through personalized training sessions, skill development, mental stimulation exercises, and regular progress assessments.",
    services: [
      "Gym accommodation",
      "Feed with booster meals",
      "Access to nutritional suppliments",
      "Personalized training session",
    ],
    tasks: [
      {
        name: "Feed pokemon with booster meal",
        action: "Feeding pokemon with booster meal",
        place: "Gym",
        pokemonState: "Eating empowering meal",
        duration: 3,
      },
      {
        name: "Give pokemon with nutritional suppliments",
        action: "Giving pokemon with nutritional suppliments",
        place: "Gym",
        pokemonState: "Eating nutritional suppliments",
        duration: 3,
      },
      {
        name: "Give pokemon personalized training",
        action: "Chasing pokemon",
        place: "Gym",
        pokemonState: "Running away from coach",
        duration: 10,
      },
      {
        name: "Let pokemon rest",
        action: "Let pokemon rest",
        place: "Gym",
        pokemonState: "Resting",
        duration: 60 * 60 * 24,
      },
    ],
  },
  {
    name: "Vacation",
    description:
      "Offers a luxurious getaway for Pokémon with gourmet meals, spa treatments, recreational activities, personalized attention, and relaxation in a resort-like setting.",
    services: [
      "Luxurious shelter accommodation",
      "Feed with gourmet meals",
      "Deluxe grooming",
      "Access to spa",
      "Access to play area",
      "Access to pool area",
    ],
    tasks: [
      {
        name: "Feed pokemon with gourmet meal",
        action: "Feeding pokemon with gourmet meal",
        place: "Luxury shelter",
        pokemonState: "Eating gourmet meal",
        duration: 3,
      },
      {
        name: "Groom pokemon with fancy brush",
        action: "Grooming pokemon with fancy brush",
        place: "Luxury shelter",
        pokemonState: "Being groomed super comfortably",
        duration: 3,
      },
      {
        name: "Put pokemon in the spa area",
        action: "Watch pokemon relax",
        place: "Spa area",
        pokemonState: "Relaxing in spa",
        duration: 5,
      },
      {
        name: "Put pokemon in the play area",
        action: "Watch pokemon have fun",
        place: "Play area",
        pokemonState: "Playing with other pokemon",
        duration: 5,
      },
      {
        name: "Put pokemon in the pool area",
        action: "Watch pokemon swim",
        place: "Pool area",
        pokemonState: "Swimming in the pool",
        duration: 5,
      },
      {
        name: "Let pokemon sleep",
        action: "Let pokemon sleep",
        place: "Luxury shelter",
        pokemonState: "Zzzzzzzzzzzz...",
        duration: 60 * 60 * 24,
      },
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
