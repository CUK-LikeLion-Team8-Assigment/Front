import React, { useEffect, useState } from "react";
import axios from "axios";

const ItemComponent = () => {
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://f6227c41-ad14-49d4-8e8d-6179ca749e9a.mock.pstmn.io/item"
        );
        const { id } = response.data;
        setItemId(id);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Item ID: {itemId}</h1>
    </div>
  );
};

export default ItemComponent;
