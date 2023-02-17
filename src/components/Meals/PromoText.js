import styles from "./PromoText.module.css";

const PromoText = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Online Sushi Restaurant "Rolls"</h2>
      <p>
        Rolls - is an online sushi restaurant where your favorite sushi,
        sashimi, rolls and other dishes of Japanese national cuisine is prepared
        by a team of professional chefs.
      </p>
      <p>
        Fast work and quality products, as well as the most real components give
        a good taste to the dishes, give the pleasure of the meal.
      </p>
    </section>
  );
};

export default PromoText;
