export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <p>start adding some items to your packing list 🚀</p>
      </footer>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? (
          <p>you got everything! ready to go ✈</p>
        ) : (
          <p>
            💼 you have {numItems} items on your list, and you already packed{" "}
            {packedItems}({percentage}%)
          </p>
        )}
      </em>
    </footer>
  );
}
