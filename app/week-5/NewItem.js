'use client'

import {useState} from "react";

export function NewItem() {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("Produce");

  async function handleSubmit(event) {
    event.preventDefault()

    const item = {
      name,
      quantity,
      category,
    }

    console.log(item);

    alert(`Added: ${name}\nCategory: ${category}\nQuantity: ${quantity}`);

    setName("");
    setQuantity(0);
    setCategory("Produce");

  }

  return (
    <div className={`flex flex-col w-full shadow-lg/20 bg-gray-300/30 rounded-2xl items-center p-8 m-4 sticky top-38`}>
      <h1 className="text-2xl mb-6 font-bold">New Grocery Item</h1>
      <input className="w-full bg-gray-300/20 p-2 rounded-md"
             value={name}
             type={"text"}
             onChange={event => setName(event.target.value)}
             placeholder={"Enter Item Name"}
             required={true}>
      </input>
      <div className="flex flex-row w-full items-center justify-between py-4">
        <input className="w-1/3 bg-gray-300/20 p-2 rounded-md mr-4"
               value={quantity}
               type={"number"}
               min={0}
               max={99}
               onChange={event => setQuantity(event.target.value)}
               required={true}>
        </input>
        <select className="flex-1 bg-gray-300/20 p-2.75 rounded-md text-white"
               value={category}
               onChange={event => setCategory(event.target.value)}
               required={true}>
          <option className="bg-gray-700" value="Produce">Produce</option>
          <option className="bg-gray-700" value="Dairy">Dairy</option>
          <option className="bg-gray-700" value="Bakery">Bakery</option>
          <option className="bg-gray-700" value="Meat">Meat</option>
          <option className="bg-gray-700" value="Frozen Foods">Frozen Foods</option>
          <option className="bg-gray-700" value="Canned Goods">Canned Goods</option>
          <option className="bg-gray-700" value="Dry Goods">Dry Goods</option>
          <option className="bg-gray-700" value="Beverages">Beverages</option>
          <option className="bg-gray-700" value="Snacks">Snacks</option>
          <option className="bg-gray-700" value="Household">Household</option>
          <option className="bg-gray-700" value="Other">Other</option>
        </select>
      </div>
      <button className="mt-4 bg-sky-900 hover:bg-sky-800 cursor-pointer px-10 py-2 rounded-2xl font-bold text-3xl" onClick={handleSubmit}> + </button>
    </div>
  )
}