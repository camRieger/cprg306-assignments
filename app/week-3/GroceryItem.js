export function Item({name, quantity, category}) {
  return (
    <div className="w-full h-full p-4 rounded-2xl bg-amber-950">
      <h3>{name}</h3>
      <ul className="list-disc list-inside">
        <li className="text-lg">
          Quantity: {quantity}
        </li>
        <li className="text-lg">
          Category: {category}
        </li>
      </ul>
    </div>
  )
}