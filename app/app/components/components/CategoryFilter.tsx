"use client";

export default function CategoryFilter({
  categories,
  current,
  onChange,
}: {
  categories: string[];
  current: string;
  onChange: (cat: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            cat === current
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
