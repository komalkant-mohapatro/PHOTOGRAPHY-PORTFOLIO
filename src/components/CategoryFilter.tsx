import React from 'react';
import { Category, CATEGORIES } from '../data/photos';

interface CategoryFilterProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full py-12 md:py-16 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-start md:justify-center space-x-8 md:space-x-12 min-w-max">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`text-[11px] md:text-xs tracking-[0.3em] font-sans transition-all duration-500 relative py-2 uppercase focus:outline-none whitespace-nowrap ${
                isActive
                  ? 'text-white font-medium scale-105'
                  : 'text-zinc-500 hover:text-zinc-300 font-normal'
              }`}
            >
              <span className="flex items-center space-x-2">
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-white inline-block animate-fade-in" />
                )}
                <span>{category}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
