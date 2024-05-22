import React, { useState } from "react";
import "react-resizable/css/styles.css";
import getRandomColor from "./utills/getRandomColor";
import PartitionNew from "./components/NewPartition";

const App = () => {
  const [partitions, setPartitions] = useState([
    {
      id: "root",
      color: getRandomColor(),
      parentWidth: window.innerWidth,
      parentHeight: window.innerHeight,
    },
  ]);

  const handleSplit = (id, direction) => {
    setPartitions((prev) => {
      const newPartitions = [...prev];
      const index = newPartitions.findIndex((part) => part.id === id);
      const color = newPartitions[index].color;
      const { parentWidth, parentHeight } = newPartitions[index];
      newPartitions.splice(
        index,
        1,
        {
          id: `${id}-1`,
          color: getRandomColor(),
          parentWidth: direction === "V" ? parentWidth / 2 : parentWidth,
          parentHeight: direction === "H" ? parentHeight / 2 : parentHeight,
        },
        {
          id: `${id}-2`,
          color,
          parentWidth: direction === "V" ? parentWidth / 2 : parentWidth,
          parentHeight: direction === "H" ? parentHeight / 2 : parentHeight,
        }
      );
      return newPartitions;
    });
  };

  const handleRemove = (id) => {
    setPartitions((prev) => prev.filter((part) => part.id !== id));
  };

  return (
    <div className="w-full h-full bg-gray-200">
      {partitions.map((partition) => (
        <PartitionNew
          key={partition.id}
          id={partition.id}
          color={partition.color}
          parentWidth={partition.parentWidth}
          parentHeight={partition.parentHeight}
          onSplit={handleSplit}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default App;
