export default function Total({ total, price, tip }) {
  console.log(price);
  return (
    <h2>
      You pay {total}€ ({price}€ + {tip}€ Tip)
    </h2>
  );
}
