'use client'

import {useState} from "react";

export function NewItem( { onAddItem, categories } ) {

  const itemInit = {
    name: "",
    quantity: 0,
    category: categories[0].toLowerCase(),
  }

  const [item, setItem] = useState(itemInit);

  const handleChange = (e) => {
    const {name, value, type} = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const newID = Math.random().toString(36).substring(2, 9);
    const newItem = {...item, id: newID}

    console.log(newItem);
    onAddItem(newItem);

    setItem(itemInit)
  }

  return (
    <div className={`flex flex-col w-full shadow-lg/20 bg-gray-300/30 rounded-2xl items-center p-8 m-4`}>
      <h1 className="text-2xl mb-6 font-bold">New Grocery Item</h1>
      <label htmlFor="itemName" className="sr-only">Item Name</label>
      <input className="w-full bg-gray-300/20 p-2 rounded-md"
             id="itemName"
             name="name"
             value={item.name}
             type={"text"}
             onChange={event => handleChange(event)}
             placeholder={"Enter Item Name"}
             required={true}>
      </input>
      <div className="flex flex-row w-full items-center justify-between py-4">
        <label htmlFor="itemQuantity" className="sr-only">Item Quantity</label>
        <input className="w-1/3 bg-gray-300/20 p-2 rounded-md mr-4"
               id="itemQuantity"
               name="quantity"
               value={item.quantity}
               type="number"
               min={0}
               max={99}
               onChange={event => handleChange(event)}
               required={true}>
        </input>
        <label htmlFor="itemCategory" className="sr-only">Item Category</label>
        <select className="flex-1 bg-gray-300/20 p-2.75 rounded-md text-white"
                id="itemCategory"
                name="category"
                value={item.category}
                onChange={event => handleChange(event)}
                required={true}>
          {categories.map((item) =>
            (
              <option className="bg-gray-700" key={item} value={item.toLowerCase()}>{item}</option>
            )
          )}
        </select>
      </div>
      <button className="mt-4 bg-sky-900 hover:bg-sky-800 cursor-pointer px-10 py-2 rounded-2xl font-bold text-3xl" onClick={handleSubmit}> + </button>
    </div>
  )
}