import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function FirestoreItems() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        const snapshot = await getDocs(itemsCollection);
        const itemsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(itemsList);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchItems();
  }, []);

  return { items, error };
}

export default FirestoreItems;
