export default function Bill({ price, onPrice }) {
  return (
    <div>
      How much was the bill?{" "}
      <input type="number" value={price} onChange={onPrice} />
    </div>
  );
}
