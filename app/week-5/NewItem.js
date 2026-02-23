'use client'

import {useState} from "react";

export function NewItem() {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("Produce");

  const categoryList =
    [
      "Produce",
      "Dairy",
      "Bakery",
      "Meat",
      "Frozen Foods",
      "Canned Goods",
      "Dry Goods",
      "Beverages",
      "Snacks",
      "Household",
      "Other"
    ];

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
      <label htmlFor="itemName" className="sr-only">Item Name</label>
      <input className="w-full bg-gray-300/20 p-2 rounded-md"
             id="itemName"
             value={name}
             type={"text"}
             onChange={event => setName(event.target.value)}
             placeholder={"Enter Item Name"}
             required={true}>
      </input>
      <div className="flex flex-row w-full items-center justify-between py-4">
        <label htmlFor="itemQuantity" className="sr-only">Item Quantity</label>
        <input className="w-1/3 bg-gray-300/20 p-2 rounded-md mr-4"
               id="itemQuantity"
               value={quantity}
               type={"number"}
               min={0}
               max={99}
               onChange={event => setQuantity(event.target.value)}
               required={true}>
        </input>
        <label htmlFor="itemCategory" className="sr-only">Item Category</label>
        <select className="flex-1 bg-gray-300/20 p-2.75 rounded-md text-white"
                id="itemCategory"
                value={category}
                onChange={event => setCategory(event.target.value)}
                required={true}>
          {categoryList.map((item) =>
            (
              <option className="bg-gray-700" key={item} value={item}>{item}</option>
            )
          )}
        </select>
      </div>
      <button className="mt-4 bg-sky-900 hover:bg-sky-800 cursor-pointer px-10 py-2 rounded-2xl font-bold text-3xl" onClick={handleSubmit}> + </button>
    </div>
  )
}