const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
];

export default function Stats() {
  const totalItems = initialItems.length;
  const packedItems = initialItems.filter(item => item.packed).length;
  const packedPercentage = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        🎒 You have {totalItems} items on your list, and you already packed {packedItems} ({packedPercentage}%)
      </em>
    </footer>
  );
}