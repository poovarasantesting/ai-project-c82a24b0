import { useState } from "react";
import { VegetableCard } from "./VegetableCard";

// Vegetable data with names and image URLs
const vegetables = [
  {
    id: 1,
    name: "Broccoli",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=500&auto=format&fit=crop",
    description: "Rich in vitamins C and K, fiber, and antioxidants."
  },
  {
    id: 2,
    name: "Carrots",
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=500&auto=format&fit=crop",
    description: "High in beta-carotene, fiber, and vitamin K."
  },
  {
    id: 3,
    name: "Bell Peppers",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=500&auto=format&fit=crop",
    description: "Excellent source of vitamins A, C, and potassium."
  },
  {
    id: 4,
    name: "Tomatoes",
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=500&auto=format&fit=crop",
    description: "Rich in vitamin C, potassium, and lycopene."
  },
  {
    id: 5,
    name: "Spinach",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=500&auto=format&fit=crop",
    description: "Packed with iron, vitamins A and C, and antioxidants."
  },
  {
    id: 6,
    name: "Eggplant",
    image: "https://images.unsplash.com/photo-1638172411075-43f49468a411?q=80&w=500&auto=format&fit=crop",
    description: "Contains fiber, potassium, and various antioxidants."
  },
  {
    id: 7,
    name: "Cucumber",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=500&auto=format&fit=crop",
    description: "High water content with vitamins K, C, and potassium."
  },
  {
    id: 8,
    name: "Onions",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=500&auto=format&fit=crop",
    description: "Contains antioxidants, vitamin C, and fiber."
  }
];

export function VegetableGallery() {
  const [selectedVegetable, setSelectedVegetable] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {vegetables.map((vegetable) => (
        <VegetableCard 
          key={vegetable.id}
          vegetable={vegetable}
          isSelected={selectedVegetable === vegetable.id}
          onClick={() => setSelectedVegetable(vegetable.id === selectedVegetable ? null : vegetable.id)}
        />
      ))}
    </div>
  );
}