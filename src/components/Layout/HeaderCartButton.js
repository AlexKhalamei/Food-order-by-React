import CartIcon from "../Cart/CartIcon";
import CardContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isButtonAnimated, setIsButtonAnimted] = useState(false);
  const cartContext = useContext(CardContext);

  const cartItemsNumbers = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${
    isButtonAnimated ? styles.bump : ""
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }

    setIsButtonAnimted(true);

    const timer = setTimeout(() => {
      setIsButtonAnimted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumbers}</span>
    </button>
  );
};

export default HeaderCartButton;
