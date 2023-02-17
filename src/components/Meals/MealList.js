import styles from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Philadelphia with salmon",
    description: "salmon, nori, cucumber, rice, cream cheese",
    price: 9.99,
  },
  {
    id: "m2",
    name: "Enigma",
    description:
      "nori, rice, cream cheese, unagi sauce, tuna, avocado, mango, japanese tamago omelette, japanese mayonnaise",
    price: 7.99,
  },
  {
    id: "m3",
    name: "Fukuro",
    description:
      "salmon, nori, rice, unagi sauce, avocado, snow crab, pistachios, goose pate, cane sugar",
    price: 5.99,
  },
  {
    id: "m4",
    name: "Green Dragon",
    description:
      "nori, rice, cream cheese, unagi sauce, avocado, shrimp, mango, mango-pineapple sauce",
    price: 8.99,
  },
];

const MealList = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealList;
