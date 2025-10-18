"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PromptCard({ prompt }: { prompt: any }) {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition"
    >
      <Image
        src={prompt.image}
        alt={prompt.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{prompt.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{prompt.prompt}</p>
        <p className="text-xs text-gray-400 mt-2">{prompt.category}</p>
      </div>
    </motion.div>
  );
}
