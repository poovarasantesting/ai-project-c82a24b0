import { VegetableGallery } from "./components/VegetableGallery";

function App() {
  return (
    <div className="min-h-screen bg-green-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Fresh Vegetable Gallery</h1>
        <VegetableGallery />
      </div>
    </div>
  );
}

export default App;