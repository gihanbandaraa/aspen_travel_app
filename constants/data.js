import images from "./images";

export const CATEGORIES = [
  { title: "Location" },
  { title: "Hotels" },
  { title: "Food" },
  { title: "Adventure" },
  { title: "Sports" },
  { title: "Beaches" },
];

export const LOCATIONS = [
  { title: "Zürich", ratings: "4.1", imageUrl: images.location1, isFavourite: true },
  { title: "Geneva", ratings: "4.4", imageUrl: images.location2, isFavourite: false },
  { title: "Bern", ratings: "4.6", imageUrl: images.location3, isFavourite: false },
];

export const HOTELS = [
  { title: "Alley Palace", ratings: "4.1", imageUrl: images.hotel1, isFavourite: true },
  { title: "Swiss Diamond", ratings: "4.6", imageUrl: images.hotel2, isFavourite: true },
  { title: "Coeurdes Alpes", ratings: "4.5", imageUrl: images.hotel3, isFavourite: false },
];
