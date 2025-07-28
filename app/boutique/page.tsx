'use client'

import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Truck, Shield, CreditCard, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  detailedDescription?: string;
  sizes?: string[];
  category: 'vetements' | 'accessoires' | 'equipement';
  stock: number;
}

interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

const BoutiquePage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 'maillot-domicile',
      name: 'Maillot Domicile Marauders',
      price: 45,
      images: ['/placeholder-jersey.jpg', '/placeholder-jersey-back.jpg', '/placeholder-jersey-detail.jpg'],
      description: 'Maillot officiel des Marauders pour les matchs à domicile',
      detailedDescription: 'Maillot officiel des Marauders confectionné dans un tissu technique respirant. Coupe ajustée avec les couleurs emblématiques du club. Parfait pour supporter votre équipe ou pour jouer.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      category: 'vetements',
      stock: 15
    },
    {
      id: 'casquette',
      name: 'Casquette Marauders',
      price: 25,
      images: ['/placeholder-cap.jpg', '/placeholder-cap-side.jpg'],
      description: 'Casquette officielle avec logo brodé',
      detailedDescription: 'Casquette ajustable avec logo Marauders brodé haute qualité. Tissu résistant et confortable pour toutes les saisons.',
      sizes: undefined,
      category: 'accessoires',
      stock: 30
    },
    {
      id: 'sweat',
      name: 'Sweat à Capuche',
      price: 55,
      images: ['/placeholder-hoodie.jpg', '/placeholder-hoodie-back.jpg', '/placeholder-hoodie-detail.jpg'],
      description: 'Sweat confortable pour supporters',
      detailedDescription: 'Sweat à capuche en coton mélangé, très confortable avec poche kangourou. Logo Marauders imprimé et couleurs du club.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      category: 'vetements',
      stock: 20
    },
    {
      id: 'gourde',
      name: 'Gourde Marauders',
      price: 15,
      images: ['/placeholder-bottle.jpg', '/placeholder-bottle-cap.jpg'],
      description: 'Gourde en acier inoxydable avec logo',
      detailedDescription: 'Gourde en acier inoxydable 500ml, garde les boissons chaudes 12h et froides 24h. Logo Marauders gravé.',
      sizes: undefined,
      category: 'accessoires',
      stock: 50
    },
    {
      id: 'sac',
      name: 'Sac de Sport',
      price: 35,
      images: ['/placeholder-bag.jpg', '/placeholder-bag-open.jpg', '/placeholder-bag-detail.jpg'],
      description: 'Sac de sport aux couleurs du club',
      detailedDescription: 'Sac de sport résistant avec compartiments séparés pour chaussures et vêtements humides. Logo Marauders brodé.',
      sizes: undefined,
      category: 'equipement',
      stock: 25
    },
    {
      id: 'tshirt',
      name: 'T-shirt Supporter',
      price: 20,
      images: ['/placeholder-tshirt.jpg', '/placeholder-tshirt-back.jpg'],
      description: 'T-shirt basique avec logo Marauders',
      detailedDescription: 'T-shirt 100% coton avec logo Marauders. Coupe classique, parfait pour le quotidien ou pour supporter votre équipe.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      category: 'vetements',
      stock: 40
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'vetements', name: 'Vêtements' },
    { id: 'accessoires', name: 'Accessoires' },
    { id: 'equipement', name: 'Équipement' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: Product, selectedSize?: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.id === product.id && item.selectedSize === selectedSize
      );
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1, selectedSize }];
      }
    });
  };

  const removeFromCart = (productId: string, selectedSize?: string) => {
    setCart(prevCart => 
      prevCart.filter(item => 
        !(item.id === productId && item.selectedSize === selectedSize)
      )
    );
  };

  const updateQuantity = (productId: string, newQuantity: number, selectedSize?: string) => {
    if (newQuantity === 0) {
      removeFromCart(productId, selectedSize);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId && item.selectedSize === selectedSize
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#d71f1c] to-black pt-16">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <ShoppingCart className="mx-auto mb-4" size={64} />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Boutique Marauders
            </h1>
            <p className="text-xl md:text-2xl">
              Soutenez votre équipe avec style
            </p>
          </div>
        </div>
      </section>

      {/* Panier flottant */}
      {cart.length > 0 && (
        <div className="fixed top-20 right-4 z-50 bg-white rounded-lg shadow-lg border p-4 max-w-sm">
          <h3 className="font-bold text-lg mb-2 flex items-center">
            <ShoppingCart className="mr-2" size={20} />
            Panier ({getTotalItems()})
          </h3>
          <div className="max-h-40 overflow-y-auto space-y-2 mb-3">
            {cart.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex justify-between items-center text-sm">
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  {item.selectedSize && <p className="text-gray-500">Taille: {item.selectedSize}</p>}
                </div>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                    className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                    className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t pt-2">
            <p className="font-bold text-lg">Total: {getTotalPrice()}€</p>
            <button className="w-full bg-[#d71f1c] text-white py-2 rounded mt-2 hover:bg-[#b91c1c] transition-colors">
              Passer commande
            </button>
          </div>
        </div>
      )}

      {/* Navigation des catégories */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#d71f1c] text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Produits */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Informations de livraison */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Informations pratiques
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#d71f1c] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Livraison</h3>
              <p className="text-gray-600">Livraison gratuite dès 50€ d&apos;achat</p>
            </div>
            <div className="text-center">
              <div className="bg-[#d71f1c] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Garantie</h3>
              <p className="text-gray-600">Échange possible sous 30 jours</p>
            </div>
            <div className="text-center">
              <div className="bg-[#d71f1c] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Paiement</h3>
              <p className="text-gray-600">Paiement sécurisé en ligne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de détail du produit */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, selectedSize?: string) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes?.[0] || '');

  const handleAddToCart = () => {
    onAddToCart(product, product.sizes ? selectedSize : undefined);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div 
        className="relative h-64 bg-gray-200 cursor-pointer flex-shrink-0"
        onClick={() => onViewDetails(product)}
      >
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <span className="text-sm">Image produit</span>
        </div>
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          {product.images.length} photos
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-black mb-2 h-14 flex items-center">{product.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed min-h-[3rem]">{product.description}</p>
        <div className="flex items-center mb-4">
          <span className="text-2xl font-bold text-[#d71f1c]">{product.price}€</span>
          <span className="text-sm text-gray-500 ml-2">Stock: {product.stock}</span>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Taille:
          </label>
          {product.sizes && product.sizes.length > 1 ? (
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d71f1c] h-10"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          ) : (
            <div className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 text-gray-700 h-10 flex items-center">
              Taille unique
            </div>
          )}
        </div>
        
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={`w-full py-3 rounded-lg font-medium transition-colors mt-auto ${
            product.stock === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#d71f1c] text-white hover:bg-[#b91c1c]'
          }`}
        >
          {product.stock === 0 ? 'Rupture de stock' : 'Ajouter au panier'}
        </button>
      </div>
    </div>
  );
};

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, selectedSize?: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes?.[0] || '');

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = () => {
    onAddToCart(product, product.sizes ? selectedSize : undefined);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-black">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Galerie d'images */}
          <div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden mb-4">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-sm">Image {currentImageIndex + 1} sur {product.images.length}</span>
              </div>
              
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
            
            {/* Miniatures */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 bg-gray-200 rounded border-2 ${
                      currentImageIndex === index ? 'border-[#d71f1c]' : 'border-gray-300'
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                      {index + 1}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Informations produit */}
          <div>
            <div className="mb-6">
              <span className="text-3xl font-bold text-[#d71f1c]">{product.price}€</span>
              <span className="text-sm text-gray-500 ml-2">Stock: {product.stock}</span>
            </div>
            
            <p className="text-gray-700 mb-6">{product.detailedDescription || product.description}</p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Taille:
              </label>
              {product.sizes && product.sizes.length > 1 ? (
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d71f1c]"
                >
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              ) : (
                <div className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 text-gray-700">
                  Taille unique
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  product.stock === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#d71f1c] text-white hover:bg-[#b91c1c]'
                }`}
              >
                {product.stock === 0 ? 'Rupture de stock' : 'Ajouter au panier'}
              </button>
              
              <button
                onClick={onClose}
                className="w-full py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Continuer mes achats
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoutiquePage;