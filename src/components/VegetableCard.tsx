import { useState } from "react";

interface Vegetable {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface VegetableCardProps {
  vegetable: Vegetable;
  isSelected: boolean;
  onClick: () => void;
}

export function VegetableCard({ vegetable, isSelected, onClick }: VegetableCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
        isSelected ? 'scale-105 shadow-xl ring-2 ring-green-500' : ''
      } ${isHovered ? 'shadow-lg' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={vegetable.image} 
          alt={vegetable.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800">{vegetable.name}</h3>
        {isSelected && (
          <p className="mt-2 text-sm text-gray-600">{vegetable.description}</p>
        )}
      </div>
    </div>
  );
}