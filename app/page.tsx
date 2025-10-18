"use client";

import { prompts } from "@/data/prompts";
import PromptCard from "@/components/PromptCard";
import CategoryFilter from "@/components/CategoryFilter";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [category, setCategory] = useState<string>("Все");

  const categories = ["Все", ...new Set(prompts.map((p) => p.category))];

  const filteredPrompts =
    category === "Все"
      ? prompts
      : prompts.filter((p) => p.category === category);

  return (
    <div>
      <CategoryFilter
        categories={categories}
        current={category}
        onChange={setCategory}
      />

      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
      >
        {filteredPrompts.map((p) => (
          <PromptCard key={p.id} prompt={p} />
        ))}
      </motion.div>
    </div>
  );
}
