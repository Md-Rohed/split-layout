import React, { useState } from "react";
import { ResizableBox } from "react-resizable";
import { SplitButton } from "./action/SplitButton";
import getRandomColor from "../utills/getRandomColor";

const PartitionContent = ({ color, onSplit, onRemove }) => (
  <div
    className="absolute inset-0 flex items-center justify-center"
    style={{ backgroundColor: color }}
  >
    <SplitButton direction="V" onClick={onSplit} />
    <SplitButton direction="H" onClick={onSplit} />
    <button onClick={onRemove} className="bg-white p-4 w-[3.75rem]">
      -
    </button>
  </div>
);

const PartitionNew = ({
  id,
  color,
  onSplit,
  onRemove,
  parentWidth,
  parentHeight,
}) => {
  const [split, setSplit] = useState(null);

  const handleSplit = (direction) => {
    setSplit(direction);
    onSplit(id, direction);
  };

  const renderSplit = (isHorizontal) => {
    const SplitPartition = ({ childId }) => (
      <PartitionNew
        id={childId}
        color={getRandomColor()}
        onSplit={onSplit}
        onRemove={onRemove}
        parentWidth={isHorizontal ? parentWidth : parentWidth / 2}
        parentHeight={isHorizontal ? parentHeight / 2 : parentHeight}
      />
    );

    return (
      <div
        className={
          isHorizontal
            ? "flex flex-col w-full h-full"
            : "flex w-full h-full border "
        }
      >
        <SplitPartition childId={`${id}-1`} />
        <SplitPartition childId={`${id}-2`} />
      </div>
    );
  };

  if (split === "V") return renderSplit(false);
  if (split === "H") return renderSplit(true);

  return (
    <ResizableBox
      width={parentWidth}
      height={parentHeight}
      minConstraints={[100, 100]}
      maxConstraints={[parentWidth, parentHeight]}
      className="relative border"
    >
      <PartitionContent
        color={color}
        onSplit={handleSplit}
        onRemove={() => onRemove(id)}
      />
      {/* <HoverOverlay isVisible={isHover} /> */}
    </ResizableBox>
  );
};

export default PartitionNew;
