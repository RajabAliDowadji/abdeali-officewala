"use client";

function CustomButton({ title, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-light_primary px-4 py-3 text-black font-sans text-sm font-bold rounded-3xl tracking-wider hover:bg-dark_primary ${className}`}
    >
      {title}
    </button>
  );
}

export default CustomButton;
