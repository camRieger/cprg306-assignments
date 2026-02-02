import items from "@/app/week-4/items.json";
import {Item} from "@/app/week-4/item.js";

export function ItemList() {

  return (
    <div className={`flex flex-col h-full w-full m-4 rounded-lg bg-[url('/notebookPage.jpg')]  bg-cover bg-center`}>
      <section>
        <h2 className="font-bold text-black pl-13 pt-6 text-2xl underline">Dairy</h2>
        {items.filter((item) => item.category === 'dairy' ) .map((item, index) => (
          <div className="pl-10" key={index}>
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </div>
        ))}
      </section>

      <section>
        <h2 className="font-bold text-black pl-13 pt-6 text-2xl underline">Produce</h2>
        {items.filter((item) => item.category === 'produce' ) .map((item, index) => (
          <div className="pl-10" key={index}>
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </div>
        ))}
      </section>

      <section>
        <h2 className="font-bold text-black pl-13 pt-6 text-2xl underline">Bakery</h2>
        {items.filter((item) => item.category === 'bakery' ) .map((item, index) => (
          <div className="pl-10" key={index}>
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </div>
        ))}
      </section>

      <section>
        <h2 className="font-bold text-black pl-13 pt-6 text-2xl underline">Meat</h2>
        {items.filter((item) => item.category === 'meat' ) .map((item, index) => (
          <div className="pl-10" key={index}>
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </div>
        ))}
      </section>

      <section>
        <h2 className="font-bold text-black pl-13 pt-6 text-2xl underline">Canned Goods</h2>
        {items.filter((item) => item.category === 'canned goods' ) .map((item, index) => (
          <div className="pl-10" key={index}>
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </div>
        ))}
      </section>

      <section>
        <h2 className="font-bold text-black pl-13 pt-6 text-2xl underline">Dry Goods</h2>
        {items.filter((item) => item.category === 'dry goods' ) .map((item, index) => (
          <div className="pl-10" key={index}>
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </div>
        ))}
      </section>

      <section>
        <h2 className="font-bold text-black pl-13 pt-6 text-2xl underline">Household</h2>
        {items.filter((item) => item.category === 'household' ) .map((item, index) => (
          <div className="pl-10" key={index}>
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </div>
        ))}
      </section>
    </div>
  )
}