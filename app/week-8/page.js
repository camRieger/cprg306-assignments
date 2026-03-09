'use client'

import NavBar from "@/app/components/NavBar";
import Items from "@/app/week-8/items.json";
import {PageHeader} from "@/app/components/PageHeader";
import {NewItem} from "@/app/week-8/NewItem";
import {ItemList} from "@/app/week-8/item-list";
import {useState} from "react";
import {GetMealIdeas} from "@/app/week-8/MealIdeas";

export default function Page() {
  const pageHeaderData = {
    pageTitle: 'Week 8: Fetching Data from APIs',
    description: "With the shopping list now working as intended, this week's exercise aims to add additional features. " +
      "It will use the TheMealDB API to provide meal ideas that include specified ingredients.",
    primaryColour: 'bg-sky-900',
    secondaryColour: 'bg-sky-950',
  }
  const bgGradient = '' +
    'bg-linear-to-tr from-slate-200 to-slate-300' +
    'dark:bg-linear-to-tr dark:from-slate-800 dark:to-slate-950';

  const [itemList, setItemList] = useState(Items);
  const [selectedItem, setSelectedItem] = useState("Pick an Item!")

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

  const handleAddItem = (newItem) => {
    setItemList((prev) => [...prev, newItem]);
  }

  const handleItemSelect = (item) => {
    // regex for removing emojis provided by chatgpt
    const itemName = item.name.replace(
      /([\p{Emoji_Presentation}\p{Emoji}\u200d]+)/gu,
      ''
    ).split(",")[0].trim();

    setSelectedItem(itemName);
    console.log(itemName);
  }

  return (
    <main className={`min-h-screen w-full ${bgGradient}`}>
      <NavBar/>
      <PageHeader {...pageHeaderData}/>
      <div className={`flex flex-row justify-center`}>
        <div className='m-6 mr-10 flex-1 flex flex-col sticky top-2 self-start h-[58vh]'>
          <NewItem onAddItem={handleAddItem} categories={categoryList} />
          <GetMealIdeas ingredient={selectedItem}/>
        </div>
        <div className="flex flex-2 align-center items-center h-full w-1/2 mr-6 my-6">
          <ItemList items={itemList} categories={categoryList} onItemSelect={handleItemSelect} />
        </div>
      </div>
    </main>
  )
}