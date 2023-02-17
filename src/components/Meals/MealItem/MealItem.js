import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CardContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cardContext = useContext(CardContext);
  const formatedPrice = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cardContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
