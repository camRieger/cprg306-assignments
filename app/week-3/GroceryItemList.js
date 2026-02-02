import {GroceryItem} from "@/app/week-3/GroceryItem";

export function GroceryItemList() {
  const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };

  const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  };

  const item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  };

  const item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  };

  const item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  };

  const item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  };

  const item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  };

  const item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  };

  const item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  };

  const item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  };

  const item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  };

  const item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  };

  return (
    <div className={`flex flex-col h-full w-full rounded-lg bg-[url('/notebookPage.jpg')]  bg-cover bg-center`}>
      <div className="pl-10">
        <GroceryItem {...item1}/>
      </div>
      <div className="pl-10">
        <GroceryItem {...item2}/>
      </div>
      <div className="pl-10">
        <GroceryItem {...item3}/>
      </div>
      <div className="pl-10">
        <GroceryItem {...item4}/>
      </div>
      <div className="pl-10">
        <GroceryItem {...item5}/>
      </div>
      <div className="pl-10">
        <GroceryItem {...item6}/>
      </div>
      <div className="pl-10">
        <GroceryItem {...item7}/>
      </div>
      <div className="pl-10">
        <GroceryItem {...item8}/>
      </div>
      <div className="pl-10">
        <GroceryItem {...item9}/>
      </div>
      <div className="pl-10">
        <GroceryItem {...item10}/>
      </div>
      <div className="pl-10">
        <GroceryItem {...item11}/>
      </div>
      <div className="pl-10">
        <GroceryItem {...item12}/>
      </div>
    </div>
  )
}