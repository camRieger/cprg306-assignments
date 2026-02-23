'use client'

import NavBar from "@/app/components/NavBar";
import Items from "@/app/week-6/items.json";
import {PageHeader} from "@/app/components/PageHeader";
import {NewItem} from "@/app/week-6/NewItem";
import {ItemList} from "@/app/week-6/item-list";
import {useState} from "react";

export default function Page() {
  const pageHeaderData = {
    pageTitle: 'Week 6: Functional Shopping List',
    description: "Fully functional shopping list with the ability to add new items and sort.",
    primaryColour: 'bg-sky-900',
    secondaryColour: 'bg-sky-950',
  }
  const bgGradient = '' +
    'bg-linear-to-tr from-slate-200 to-slate-300' +
    'dark:bg-linear-to-tr dark:from-slate-800 dark:to-slate-950';

  const [itemList, setItemList] = useState(Items);

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

  function handleAddItem(item) {
    setItemList([...itemList, item]);
  }

  return (
    <main className={`min-h-screen w-full ${bgGradient}`}>
      <NavBar/>
      <PageHeader {...pageHeaderData}/>
      <div className={`flex flex-row justify-center`}>
        <div className='m-6 mr-10 flex-1'>
          <NewItem onAddItem={handleAddItem} categories={categoryList} />
        </div>
        <div className="flex flex-2 align-center items-center h-full w-1/2 mr-6 my-6">
          <ItemList items={itemList} categories={categoryList} />
        </div>
      </div>
    </main>
  )
}