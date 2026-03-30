'use client'

import {Item} from "@/app/week-10/shopping-list/item.js";
import {useState} from "react";

export function ItemList( { items, categories, onItemSelect } ) {

  const [sortBy, setSortBy] = useState('name');
  const [groupBy, setGroupBy] = useState(false);

  const sortedItems = [...items].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  const sortedCategories = [...categories].sort((a, b) => a.localeCompare(b));

  const toggleGroupBy = () => {setGroupBy(!groupBy);};

  return (
    <div className={`flex flex-col h-full min-h-150 w-full m-4 rounded-xl bg-[url('/notebookPage.jpg')] bg-cover bg-center`}>
      <div className="flex justify-center">
        <h1 className="font-bold text-black pt-6 text-3xl">Shopping List</h1>
      </div>
      <div className="flex justify-center pt-8">
        <button
          className="mr-6 bg-sky-900 hover:bg-sky-800 cursor-pointer px-10 py-2 rounded-2xl font-bold text-lg"
          onClick={() => setSortBy('name')}
        >
          Sort By Name
        </button>
        <button
          className="mr-6 bg-sky-900 hover:bg-sky-800 cursor-pointer px-10 py-2 rounded-2xl font-bold text-lg"
          onClick={() => setSortBy('category')}
        >
          Sort By Category
        </button>
        <button
          className="bg-sky-900 hover:bg-sky-800 cursor-pointer px-10 py-2 rounded-2xl font-bold text-lg"
          onClick={toggleGroupBy}
        >
          Group By Category
        </button>
      </div>
      {!groupBy && sortedItems.map((item, index) => (
          <div className="px-10 my-4" key={index}>
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item)} />
          </div>
      ))}

      {groupBy && sortedCategories.map((cat) => (
        <section key={cat}>
          <h2 className="font-bold text-black pl-13 pt-6 text-2xl underline">{cat}</h2>
          {sortedItems.filter((item) => item.category === cat.toLowerCase()).map((item, index) => (
            <div className="px-10 my-4" key={index}>
              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)} />
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}