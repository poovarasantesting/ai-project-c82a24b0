import { useState } from "react";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

// Sample product data
const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "clothing"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "electronics"
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "accessories"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "electronics"
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "footwear"
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "accessories"
  }
];

// Get unique categories
const categories = ["all", ...new Set(products.map(product => product.category))];

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const { toast } = useToast();

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0; // default
  });

  const addToCart = (product) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Shop Our Products</h1>
      
      {/* Filters and Search */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        
        <Select onValueChange={(value) => setSelectedCategory(value)} defaultValue="all">
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select onValueChange={(value) => setSortBy(value)} defaultValue="default">
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden flex flex-col">
            <div className="h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-4 flex-grow">
              <Badge className="mb-2">{product.category}</Badge>
              <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
              <p className="font-semibold text-lg">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button 
                onClick={() => addToCart(product)} 
                className="w-full flex items-center justify-center gap-2"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Empty state */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium">No products found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}