export function Item({name, quantity, category}) {
  return (
    <div className="w-full h-full p-4 rounded-2xl">
      <h3 className={`text-black text-2xl font-serif`}>{name}</h3>
      <ul className="list-disc list-inside">
        <li className="text-lg text-black font-serif">
          Quantity: {quantity}
        </li>
        <li className="text-lg text-black font-serif">
          Category: {category}
        </li>
      </ul>
    </div>
  )
}