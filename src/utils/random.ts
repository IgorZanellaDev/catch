import { Cat } from "app-types/cat";
import { faker } from "@faker-js/faker";

const getRandomAge = () => Math.floor(Math.random() * 18) + 1;

const getRandomCat = (): Cat => ({
  id: faker.random.alpha(10),
  name: faker.name.firstName(),
  age: getRandomAge(),
});

export { getRandomCat };
