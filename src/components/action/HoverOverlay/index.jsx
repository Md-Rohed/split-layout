export const HoverOverlay = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute bottom-1 right-1 bg-black px-2 py-1 text-white opacity-30">
      Drag me to resize
    </div>
  );
};
