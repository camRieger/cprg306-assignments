'use client'

import NavBar from "@/app/components/NavBar";
import Items from "@/app/week-9/shopping-list/items.json";
import {PageHeader} from "@/app/components/PageHeader";
import {NewItem} from "@/app/week-9/shopping-list/NewItem";
import {ItemList} from "@/app/week-9/shopping-list/item-list";
import {useEffect, useState} from "react";
import {GetMealIdeas} from "@/app/week-9/shopping-list/MealIdeas";
import {useUserAuth} from "@/app/contexts/AuthContext";
import {router} from "next/client";
import {useRouter} from "next/navigation";

export default function Page() {
  const pageHeaderData = {
    pageTitle: 'Week 9: Firebase Authentication',
    description: "Using the previous iteration of the shopping list as a base, this week requires user authentication in order to access the page.",
    primaryColour: 'bg-sky-900',
    secondaryColour: 'bg-sky-950',
  }
  const bgGradient = '' +
    'bg-linear-to-tr from-slate-200 to-slate-300' +
    'dark:bg-linear-to-tr dark:from-slate-800 dark:to-slate-950';

  const [itemList, setItemList] = useState(Items);
  const [selectedItem, setSelectedItem] = useState("Pick an Item!")
  const { user } = useUserAuth();
  const router = useRouter();

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

  useEffect(() => {
    if (!user) {
      router.replace('/');
    }
  }, [user, router]);

  return (
    <main className={`min-h-screen w-full ${bgGradient}`}>
      <NavBar/>
      {
        user ?

          <div>
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
          </div>
          :
          null
      }
    </main>
  )
}