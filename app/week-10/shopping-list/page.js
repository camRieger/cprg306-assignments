'use client'

import NavBar from "@/app/components/NavBar";
import {PageHeader} from "@/app/components/PageHeader";
import {NewItem} from "@/app/week-10/shopping-list/NewItem";
import {ItemList} from "@/app/week-10/shopping-list/item-list";
import {useEffect, useState} from "react";
import {GetMealIdeas} from "@/app/week-10/shopping-list/MealIdeas";
import {useUserAuth} from "@/app/contexts/AuthContext";
import {useRouter} from "next/navigation";
import { getUserItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const pageHeaderData = {
    pageTitle: 'Week 10: Firestore Database',
    description: "With authentication in place, its time for user data to be stored in a database.",
    primaryColour: 'bg-sky-900',
    secondaryColour: 'bg-sky-950',
  }
  const bgGradient = '' +
    'bg-linear-to-tr from-slate-200 to-slate-300' +
    'dark:bg-linear-to-tr dark:from-slate-800 dark:to-slate-950';

  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState("Pick an Item!")
  const [refresh, setRefresh] = useState(true);
  const { user, loading } = useUserAuth();
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
  
  const loadItems = async (id) => {
    if (!id) return;
    setItemList(await getUserItems(id));
  }

  const handleAddItem = async (newItem) => {
    if (!user?.uid) return;
    await addItem(user.uid, newItem);
    setRefresh(!refresh);
  }

  const handleItemSelect = (item) => {
    // regex for removing emojis provided by chatgpt
    const itemName = item.name.replace(
      /([\p{Emoji_Presentation}\p{Emoji}\u200d]+)/gu,
      ''
    ).split(",")[0].trim();

    setSelectedItem(itemName);
  }

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace('/');
      } else {
        loadItems(user.uid);
      }
    }
  }, [user, router, refresh]);

  return (
    <main className={`min-h-screen w-full flex flex-col ${bgGradient}`}>
      <NavBar/>
      {
        user ?

          <div>
            <PageHeader {...pageHeaderData}/>
            <div className={`flex flex-row justify-center`}>
              <div className='m-6 mr-10 flex-1 flex flex-col sticky top-2 self-start h-full'>
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