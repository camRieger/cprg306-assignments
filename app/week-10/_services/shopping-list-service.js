import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

export async function addItem(userID, item) {
  const docRef = await addDoc(collection(db, "users", userID, "items"), {
    ...item
  });

  return docRef.id;
}

export async function getUserItems(user_id) {
  const itemArray = [];

  const q = query(
    collection(db, "users", user_id, "items"),
    where("quantity", ">", 1)
    );

  const items = await getDocs(q);
  items.forEach(item => {
    itemArray.push({
      id: item.id,
      ...item.data()
    });
  });

  return itemArray;
}