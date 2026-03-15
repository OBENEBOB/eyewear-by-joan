// products.js - All 40 products (23 female + 17 male)
const products = [
  // ==================== FEMALE FRAMES (23) ====================
  // CHUMMY JC041
  {
    id: "chummy-jc041",
    name: "CHUMMY",
    fullName: "CHUMMY - Round Photochromic",
    subtitle: "Round Pink Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 9000,
    rating: 4.7,
    reviewCount: 22,
    colors: [
      { name: "Pink", code: "pink", hex: "#FFB6C1", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" },
      { name: "Purple", code: "purple", hex: "#A020F0", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Square", "Heart"],
    features: ["Photochromic", "Blue Light Blocking", "UV Protection"],
    specs: { frameShape: "Round", material: "Acetate/Metal", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: true, newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"
    ],
    description: "CHUMMY is a stylish round frame for women with advanced photochromic lenses.",
    whatsIncluded: ["Photochromic lenses", "Anti-reflective coating", "Blue light protection", "100% UV protection", "Free pouch"]
  },
  
  // BECKY JC040
  {
    id: "becky-jc040",
    name: "BECKY",
    fullName: "BECKY - Square Photochromic",
    subtitle: "Square Brown Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 8500,
    rating: 4.8,
    reviewCount: 20,
    colors: [
      { name: "Brown", code: "brown", hex: "#8B4513", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" },
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Small-Medium",
    fit: "Women",
    faceShapes: ["Oval", "Heart", "Round"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Square", material: "Acetate", rimType: "Full Rim", weight: "15g", springHinge: "Yes", frameWidth: "130mm", lensWidth: "50mm", lensHeight: "45mm", bridge: "18mm", templeLength: "140mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"
    ],
    description: "BECKY offers a bold look for everyday wear with adaptive photochromic lenses.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // LUMERA JC039
  {
    id: "lumera-jc039",
    name: "LUMERA",
    fullName: "LUMERA - Cat Eye Photochromic",
    subtitle: "Cat Eye Purple Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 9800,
    rating: 4.9,
    reviewCount: 18,
    colors: [
      { name: "Purple", code: "purple", hex: "#A020F0", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" },
      { name: "Pink", code: "pink", hex: "#FFB6C1", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Heart", "Round"],
    features: ["Photochromic", "Blue Light Blocking", "UV Protection"],
    specs: { frameShape: "Cat Eye", material: "Acetate/Metal", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: true, newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop"
    ],
    description: "LUMERA cat eye frames add elegance and style with protective lenses indoors and outdoors.",
    whatsIncluded: ["Photochromic lenses", "Anti-reflective coating", "Blue light protection", "100% UV protection", "Free pouch"]
  },
  
  // SOLIEL JC038
  {
    id: "soliel-jc038",
    name: "SOLIEL",
    fullName: "SOLIEL - Round Photochromic",
    subtitle: "Round Gold Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 9200,
    rating: 4.6,
    reviewCount: 17,
    colors: [
      { name: "Gold", code: "gold", hex: "#D4AF37", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" },
      { name: "Brown", code: "brown", hex: "#8B4513", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Heart", "Round"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Round", material: "Acetate/Metal", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
    ],
    description: "SOLIEL is stylish and protective, perfect for daily wear and outdoor activities.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // YUYU JC038
  {
    id: "yuyu-jc038",
    name: "YUYU",
    fullName: "YUYU - Round Photochromic",
    subtitle: "Round Pink Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 8500,
    rating: 4.8,
    reviewCount: 47,
    colors: [
      { name: "Pink", code: "pink", hex: "#FFB6C1", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" },
      { name: "Purple", code: "purple", hex: "#A020F0", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" },
      { name: "Brown", code: "brown", hex: "#8B4513", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" },
      { name: "Oxblood", code: "oxblood", hex: "#4A0404", image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Square", "Heart"],
    features: ["Photochromic", "Anti-Reflective", "Blue Light Blocking", "UV Protection"],
    specs: { frameShape: "Round", material: "Mixed (Acetate/Metal)", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: true, newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591076482166-42dae771f495?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=800&auto=format&fit=crop"
    ],
    description: "YUYU is our best-selling photochromic frame. Clear indoors, dark outdoors – perfect for all-day wear.",
    whatsIncluded: ["Photochromic lenses", "Anti-reflective coating", "Blue light protection", "100% UV protection", "Free pouch"]
  },
  
  // LENE JC037
  {
    id: "lene-jc037",
    name: "LENE",
    fullName: "LENE - Round Photochromic",
    subtitle: "Round Pink Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 7500,
    rating: 4.7,
    reviewCount: 24,
    colors: [
      { name: "Pink", code: "pink", hex: "#FFB6C1", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" },
      { name: "Brown", code: "brown", hex: "#8B4513", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Small-Medium",
    fit: "Women",
    faceShapes: ["Oval", "Heart", "Round"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Round", material: "Acetate", rimType: "Full Rim", weight: "14g", springHinge: "Yes", frameWidth: "128mm", lensWidth: "50mm", lensHeight: "44mm", bridge: "18mm", templeLength: "138mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop"
    ],
    description: "LENE offers a classic round design with essential photochromic protection.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // KIRA JC036
  {
    id: "kira-jc036",
    name: "KIRA",
    fullName: "KIRA - Cat Eye Photochromic",
    subtitle: "Cat Eye Pink Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 12500,
    rating: 4.9,
    reviewCount: 26,
    colors: [
      { name: "Pink", code: "pink", hex: "#FFB6C1", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" },
      { name: "Purple", code: "purple", hex: "#A020F0", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Heart", "Round"],
    features: ["Photochromic", "Anti-Reflective", "Blue Light Blocking", "UV Protection"],
    specs: { frameShape: "Cat Eye", material: "Acetate/Metal", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: true, newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop"
    ],
    description: "KIRA cat eye frames combine elegance with advanced photochromic technology.",
    whatsIncluded: ["Photochromic lenses", "Anti-reflective coating", "Blue light protection", "100% UV protection", "Free pouch"]
  },
  
  // GORGEOUS JC035
  {
    id: "gorgeous-jc035",
    name: "GORGEOUS",
    fullName: "GORGEOUS - Square Photochromic",
    subtitle: "Square Pink Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 12500,
    rating: 4.8,
    reviewCount: 24,
    colors: [
      { name: "Pink", code: "pink", hex: "#FFB6C1", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" },
      { name: "Gold", code: "gold", hex: "#D4AF37", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Square", "Heart"],
    features: ["Photochromic", "Anti-Reflective", "Blue Light Blocking", "UV Protection"],
    specs: { frameShape: "Square", material: "Mixed (Acetate/Metal)", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: true, newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"
    ],
    description: "GORGEOUS square frames offer a bold, stylish look with premium photochromic lenses.",
    whatsIncluded: ["Photochromic lenses", "Anti-reflective coating", "Blue light protection", "100% UV protection", "Free pouch"]
  },
  
  // PRETTY JC034
  {
    id: "pretty-jc034",
    name: "PRETTY",
    fullName: "PRETTY - Round Photochromic",
    subtitle: "Round Pink Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 8500,
    rating: 4.7,
    reviewCount: 22,
    colors: [
      { name: "Pink", code: "pink", hex: "#FFB6C1", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" },
      { name: "Purple", code: "purple", hex: "#A020F0", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Small-Medium",
    fit: "Women",
    faceShapes: ["Oval", "Heart", "Round"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Round", material: "Acetate", rimType: "Full Rim", weight: "14g", springHinge: "Yes", frameWidth: "128mm", lensWidth: "50mm", lensHeight: "44mm", bridge: "18mm", templeLength: "138mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop"
    ],
    description: "PRETTY round frames offer a feminine look with essential photochromic protection.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // MIMI JC033
  {
    id: "mimi-jc033",
    name: "MIMI",
    fullName: "MIMI - Cat Eye Photochromic",
    subtitle: "Cat Eye Purple Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 10000,
    rating: 4.9,
    reviewCount: 31,
    colors: [
      { name: "Purple", code: "purple", hex: "#A020F0", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" },
      { name: "Pink", code: "pink", hex: "#FFB6C1", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" },
      { name: "Tortoise", code: "tortoise", hex: "#8B5A2B", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Heart", "Round"],
    features: ["Photochromic", "Anti-Reflective", "Blue Light Blocking", "UV Protection"],
    specs: { frameShape: "Cat Eye", material: "Acetate/Metal", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: true, newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop"
    ],
    description: "MIMI cat eye frames add a touch of elegance to any outfit with advanced photochromic lenses.",
    whatsIncluded: ["Photochromic lenses", "Anti-reflective coating", "Blue light protection", "100% UV protection", "Free pouch"]
  },
  
  // JANE JC032
  {
    id: "jane-jc032",
    name: "JANE",
    fullName: "JANE - Round Photochromic",
    subtitle: "Round Brown Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 8500,
    rating: 4.6,
    reviewCount: 19,
    colors: [
      { name: "Brown", code: "brown", hex: "#8B4513", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" },
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Square", "Heart"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Round", material: "Acetate/Metal", rimType: "Full Rim", weight: "15g", springHinge: "Yes", frameWidth: "132mm", lensWidth: "52mm", lensHeight: "46mm", bridge: "18mm", templeLength: "142mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
    ],
    description: "JANE classic round frames with photochromic lenses for everyday protection.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // GEO JC031
  {
    id: "geo-jc031",
    name: "GEO",
    fullName: "GEO - Square Photochromic",
    subtitle: "Square Gold Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 8500,
    rating: 4.7,
    reviewCount: 21,
    colors: [
      { name: "Gold", code: "gold", hex: "#D4AF37", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" },
      { name: "Silver", code: "silver", hex: "#C0C0C0", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Square", "Heart"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Square", material: "Metal", rimType: "Full Rim", weight: "15g", springHinge: "Yes", frameWidth: "132mm", lensWidth: "52mm", lensHeight: "46mm", bridge: "18mm", templeLength: "142mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
    ],
    description: "GEO geometric square frames with photochromic lenses for modern women.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // SKYE JC030
  {
    id: "skye-jc030",
    name: "SKYE",
    fullName: "SKYE - Round Photochromic",
    subtitle: "Round Blue Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 10000,
    rating: 4.8,
    reviewCount: 23,
    colors: [
      { name: "Blue", code: "blue", hex: "#2B6C94", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" },
      { name: "Pink", code: "pink", hex: "#FFB6C1", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Heart", "Round"],
    features: ["Photochromic", "Anti-Reflective", "Blue Light Blocking", "UV Protection"],
    specs: { frameShape: "Round", material: "Acetate/Metal", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: true, newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"
    ],
    description: "SKYE round frames with premium photochromic lenses for the modern woman.",
    whatsIncluded: ["Photochromic lenses", "Anti-reflective coating", "Blue light protection", "100% UV protection", "Free pouch"]
  },
  
  // ELITE JC029
  {
    id: "elite-jc029",
    name: "ELITE",
    fullName: "ELITE - Square Photochromic",
    subtitle: "Square Black Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 8500,
    rating: 4.6,
    reviewCount: 18,
    colors: [
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" },
      { name: "Gold", code: "gold", hex: "#D4AF37", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Square", "Rectangle"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Square", material: "Metal", rimType: "Full Rim", weight: "15g", springHinge: "Yes", frameWidth: "132mm", lensWidth: "52mm", lensHeight: "46mm", bridge: "18mm", templeLength: "142mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"
    ],
    description: "ELITE square frames with photochromic lenses for a professional look.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // QUEEN JC027
  {
    id: "queen-jc027",
    name: "QUEEN",
    fullName: "QUEEN - Cat Eye Photochromic",
    subtitle: "Cat Eye Pink Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 8500,
    rating: 4.7,
    reviewCount: 22,
    colors: [
      { name: "Pink", code: "pink", hex: "#FFB6C1", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" },
      { name: "Purple", code: "purple", hex: "#A020F0", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Heart", "Round"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Cat Eye", material: "Acetate", rimType: "Full Rim", weight: "15g", springHinge: "Yes", frameWidth: "132mm", lensWidth: "52mm", lensHeight: "46mm", bridge: "18mm", templeLength: "142mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop"
    ],
    description: "QUEEN cat eye frames with photochromic lenses for a regal look.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // LUNA JC024
  {
    id: "luna-jc024",
    name: "LUNA",
    fullName: "LUNA - Round Photochromic",
    subtitle: "Round Gold Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 8500,
    rating: 4.8,
    reviewCount: 26,
    colors: [
      { name: "Gold", code: "gold", hex: "#D4AF37", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" },
      { name: "Silver", code: "silver", hex: "#C0C0C0", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Round", "Heart"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Round", material: "Metal", rimType: "Full Rim", weight: "14g", springHinge: "Yes", frameWidth: "130mm", lensWidth: "51mm", lensHeight: "45mm", bridge: "18mm", templeLength: "140mm" },
    inStock: true, bestSeller: true, newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
    ],
    description: "LUNA round frames with photochromic lenses for everyday elegance.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // OPAL JC023
  {
    id: "opal-jc023",
    name: "OPAL",
    fullName: "OPAL - Round Photochromic",
    subtitle: "Round Pink Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 7500,
    rating: 4.6,
    reviewCount: 17,
    colors: [
      { name: "Pink", code: "pink", hex: "#FFB6C1", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" },
      { name: "White", code: "white", hex: "#FFFFFF", image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Small-Medium",
    fit: "Women",
    faceShapes: ["Oval", "Heart", "Round"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Round", material: "Acetate", rimType: "Full Rim", weight: "14g", springHinge: "Yes", frameWidth: "128mm", lensWidth: "50mm", lensHeight: "44mm", bridge: "18mm", templeLength: "138mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop"
    ],
    description: "OPAL round frames offer a soft, feminine look with photochromic protection.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // ELARA JC022
  {
    id: "elara-jc022",
    name: "ELARA",
    fullName: "ELARA - Square Photochromic",
    subtitle: "Square Brown Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 8500,
    rating: 4.7,
    reviewCount: 20,
    colors: [
      { name: "Brown", code: "brown", hex: "#8B4513", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" },
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Square", "Heart"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Square", material: "Acetate", rimType: "Full Rim", weight: "15g", springHinge: "Yes", frameWidth: "132mm", lensWidth: "52mm", lensHeight: "46mm", bridge: "18mm", templeLength: "142mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
    ],
    description: "ELARA square frames with photochromic lenses for everyday style.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // IVY JC021
  {
    id: "ivy-jc021",
    name: "IVY",
    fullName: "IVY - Round Photochromic",
    subtitle: "Round Green Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 7500,
    rating: 4.5,
    reviewCount: 15,
    colors: [
      { name: "Green", code: "green", hex: "#4C8B4C", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" },
      { name: "Brown", code: "brown", hex: "#8B4513", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Small-Medium",
    fit: "Women",
    faceShapes: ["Oval", "Round", "Heart"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Round", material: "Acetate", rimType: "Full Rim", weight: "14g", springHinge: "Yes", frameWidth: "128mm", lensWidth: "50mm", lensHeight: "44mm", bridge: "18mm", templeLength: "138mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"
    ],
    description: "IVY round frames with photochromic lenses for a fresh, natural look.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // SIENNA JC020
  {
    id: "sienna-jc020",
    name: "SIENNA",
    fullName: "SIENNA - Round Photochromic",
    subtitle: "Round Brown Photochromic Glasses",
    type: "photochromic",
    category: "women",
    price: 7500,
    rating: 4.6,
    reviewCount: 18,
    colors: [
      { name: "Brown", code: "brown", hex: "#8B4513", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" },
      { name: "Tortoise", code: "tortoise", hex: "#8B5A2B", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Round", "Heart"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Round", material: "Acetate", rimType: "Full Rim", weight: "15g", springHinge: "Yes", frameWidth: "132mm", lensWidth: "52mm", lensHeight: "46mm", bridge: "18mm", templeLength: "142mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
    ],
    description: "SIENNA round frames with photochromic lenses for a classic, earthy look.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // PEARL JC019 - Anti-Blue Light
  {
    id: "pearl-jc019",
    name: "PEARL",
    fullName: "PEARL - Round Anti-Blue Light",
    subtitle: "Round White Blue Light Glasses",
    type: "bluelight",
    category: "women",
    price: 7500,
    rating: 4.7,
    reviewCount: 22,
    colors: [
      { name: "White", code: "white", hex: "#FFFFFF", image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=800&auto=format&fit=crop" },
      { name: "Pink", code: "pink", hex: "#FFB6C1", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Round", "Heart"],
    features: ["Blue Light Blocking", "Anti-Reflective"],
    specs: { frameShape: "Round", material: "Acetate", rimType: "Full Rim", weight: "14g", springHinge: "Yes", frameWidth: "130mm", lensWidth: "51mm", lensHeight: "45mm", bridge: "18mm", templeLength: "140mm" },
    inStock: true, bestSeller: true, newArrival: false,
    images: [
      "https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=800&auto=format&fit=crop"
    ],
    description: "PEARL round frames with blue light protection for long screen hours.",
    whatsIncluded: ["Blue light blocking lenses", "Anti-reflective coating", "Free pouch"]
  },
  
  // OS JC012 - Anti-Blue Light
  {
    id: "os-jc012",
    name: "OS",
    fullName: "OS - Square Anti-Blue Light",
    subtitle: "Square Black Blue Light Glasses",
    type: "bluelight",
    category: "women",
    price: 7500,
    rating: 4.5,
    reviewCount: 16,
    colors: [
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" },
      { name: "Silver", code: "silver", hex: "#C0C0C0", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Women",
    faceShapes: ["Oval", "Square", "Rectangle"],
    features: ["Blue Light Blocking"],
    specs: { frameShape: "Square", material: "Metal", rimType: "Full Rim", weight: "15g", springHinge: "Yes", frameWidth: "132mm", lensWidth: "52mm", lensHeight: "46mm", bridge: "18mm", templeLength: "142mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: [
      "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"
    ],
    description: "OS square frames with blue light protection for everyday screen use.",
    whatsIncluded: ["Blue light blocking lenses", "Free pouch"]
  },
  
  // ==================== MALE FRAMES (17) ====================
  
  // STONE JC018
  {
    id: "stone-jc018",
    name: "STONE",
    fullName: "STONE - Square Photochromic",
    subtitle: "Square Black Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 8500,
    rating: 4.6,
    reviewCount: 25,
    colors: [
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" },
      { name: "Gunmetal", code: "gunmetal", hex: "#2C3539", image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Square", "Oval", "Rectangle"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Square", material: "Metal", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: false, newArrival: false,
    images: ["https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"],
    description: "STONE offers a bold, masculine look with photochromic lenses that adapt to lighting.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // RAY JC017 - Blue Light
  {
    id: "ray-jc017",
    name: "RAY",
    fullName: "RAY - Aviator Blue Light",
    subtitle: "Aviator Silver Blue Light Glasses",
    type: "bluelight",
    category: "men",
    price: 8900,
    rating: 4.7,
    reviewCount: 18,
    colors: [
      { name: "Silver", code: "silver", hex: "#C0C0C0", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" },
      { name: "Gold", code: "gold", hex: "#D4AF37", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Oval", "Square"],
    features: ["Blue Light Blocking", "Anti-Reflective"],
    specs: { frameShape: "Aviator", material: "Metal", rimType: "Full Rim", weight: "17g", springHinge: "Yes", frameWidth: "140mm", lensWidth: "55mm", lensHeight: "50mm", bridge: "20mm", templeLength: "145mm" },
    inStock: true, bestSeller: true, newArrival: false,
    images: ["https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop"],
    description: "RAY aviator frames with blue light protection, ideal for men working long hours on screens.",
    whatsIncluded: ["Blue light blocking lenses", "Anti-reflective coating", "Free pouch"]
  },
  
  // EDEN JC016
  {
    id: "eden-jc016",
    name: "EDEN",
    fullName: "EDEN - Square Photochromic",
    subtitle: "Square Brown Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 9000,
    rating: 4.7,
    reviewCount: 20,
    colors: [
      { name: "Brown", code: "brown", hex: "#8B4513", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" },
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Square", "Oval", "Rectangle"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Square", material: "Acetate", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"],
    description: "EDEN square frames with photochromic lenses for the modern man.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // NEO JC015
  {
    id: "neo-jc015",
    name: "NEO",
    fullName: "NEO - Round Photochromic",
    subtitle: "Round Gunmetal Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 9000,
    rating: 4.6,
    reviewCount: 19,
    colors: [
      { name: "Gunmetal", code: "gunmetal", hex: "#2C3539", image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=800&auto=format&fit=crop" },
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Oval", "Round", "Square"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Round", material: "Metal", rimType: "Full Rim", weight: "15g", springHinge: "Yes", frameWidth: "132mm", lensWidth: "52mm", lensHeight: "46mm", bridge: "18mm", templeLength: "142mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: ["https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=800&auto=format&fit=crop"],
    description: "NEO round frames with photochromic lenses for a modern, minimalist look.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // TITAN JC014
  {
    id: "titan-jc014",
    name: "TITAN",
    fullName: "TITAN - Square Photochromic",
    subtitle: "Square Black Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 9000,
    rating: 4.8,
    reviewCount: 24,
    colors: [
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" },
      { name: "Gunmetal", code: "gunmetal", hex: "#2C3539", image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Large",
    fit: "Men",
    faceShapes: ["Square", "Rectangle", "Oval"],
    features: ["Photochromic", "Blue Light Blocking", "UV Protection"],
    specs: { frameShape: "Square", material: "Metal", rimType: "Full Rim", weight: "17g", springHinge: "Yes", frameWidth: "140mm", lensWidth: "55mm", lensHeight: "48mm", bridge: "20mm", templeLength: "148mm" },
    inStock: true, bestSeller: true, newArrival: false,
    images: ["https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"],
    description: "TITAN bold square frames with premium photochromic lenses for the confident man.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "UV protection", "Free pouch"]
  },
  
  // VIBE JC013
  {
    id: "vibe-jc013",
    name: "VIBE",
    fullName: "VIBE - Square Photochromic",
    subtitle: "Square Gold Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 9000,
    rating: 4.6,
    reviewCount: 18,
    colors: [
      { name: "Gold", code: "gold", hex: "#D4AF37", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" },
      { name: "Silver", code: "silver", hex: "#C0C0C0", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Oval", "Square", "Rectangle"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Square", material: "Metal", rimType: "Full Rim", weight: "15g", springHinge: "Yes", frameWidth: "132mm", lensWidth: "52mm", lensHeight: "46mm", bridge: "18mm", templeLength: "142mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"],
    description: "VIBE square frames with photochromic lenses for a stylish, modern look.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // AVIATOR JC012 - Photochromic
  {
    id: "aviator-jc012",
    name: "AVIATOR",
    fullName: "AVIATOR - Classic Aviator Photochromic",
    subtitle: "Aviator Silver Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 8500,
    rating: 4.7,
    reviewCount: 23,
    colors: [
      { name: "Silver", code: "silver", hex: "#C0C0C0", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" },
      { name: "Gold", code: "gold", hex: "#D4AF37", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Oval", "Square"],
    features: ["Photochromic", "Blue Light Blocking", "UV Protection"],
    specs: { frameShape: "Aviator", material: "Metal", rimType: "Full Rim", weight: "17g", springHinge: "Yes", frameWidth: "138mm", lensWidth: "54mm", lensHeight: "48mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: true, newArrival: false,
    images: ["https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop"],
    description: "AVIATOR classic frames with photochromic lenses for timeless style.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "UV protection", "Free pouch"]
  },
  
  // ORION JC011
  {
    id: "orion-jc011",
    name: "ORION",
    fullName: "ORION - Square Photochromic",
    subtitle: "Square Black Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 7500,
    rating: 4.5,
    reviewCount: 16,
    colors: [
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Square", "Oval", "Rectangle"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Square", material: "Acetate", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: ["https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"],
    description: "ORION square frames with photochromic lenses for everyday wear.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // URBAN JC009
  {
    id: "urban-jc009",
    name: "URBAN",
    fullName: "URBAN - Rectangle Photochromic",
    subtitle: "Rectangle Black Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 7500,
    rating: 4.5,
    reviewCount: 17,
    colors: [
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" },
      { name: "Brown", code: "brown", hex: "#8B4513", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Square", "Rectangle", "Oval"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Rectangle", material: "Acetate", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "136mm", lensWidth: "54mm", lensHeight: "46mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: ["https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"],
    description: "URBAN rectangular frames with photochromic lenses for city style.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // CLOUD JC008
  {
    id: "cloud-jc008",
    name: "CLOUD",
    fullName: "CLOUD - Round Photochromic",
    subtitle: "Round Silver Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 7500,
    rating: 4.4,
    reviewCount: 15,
    colors: [
      { name: "Silver", code: "silver", hex: "#C0C0C0", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Oval", "Round", "Square"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Round", material: "Metal", rimType: "Full Rim", weight: "15g", springHinge: "Yes", frameWidth: "132mm", lensWidth: "52mm", lensHeight: "46mm", bridge: "18mm", templeLength: "142mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: ["https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop"],
    description: "CLOUD round frames with photochromic lenses for a lightweight feel.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // AURA JC007 - Photochromic
  {
    id: "aura-007p",
    name: "AURA",
    fullName: "AURA - Square Photochromic",
    subtitle: "Square Black Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 8500,
    rating: 4.6,
    reviewCount: 21,
    colors: [
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" },
      { name: "Gunmetal", code: "gunmetal", hex: "#2C3539", image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Square", "Oval", "Rectangle"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Square", material: "Metal", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: false, newArrival: false,
    images: ["https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"],
    description: "AURA square frames with photochromic lenses for everyday protection.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // AURA JC007 - Anti-Blue Light
  {
    id: "aura-007b",
    name: "AURA",
    fullName: "AURA - Square Anti-Blue Light",
    subtitle: "Square Black Blue Light Glasses",
    type: "bluelight",
    category: "men",
    price: 7500,
    rating: 4.5,
    reviewCount: 19,
    colors: [
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Square", "Oval", "Rectangle"],
    features: ["Blue Light Blocking"],
    specs: { frameShape: "Square", material: "Metal", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: ["https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"],
    description: "AURA square frames with blue light protection for screen-heavy days.",
    whatsIncluded: ["Blue light blocking lenses", "Free pouch"]
  },
  
  // PURE JC006
  {
    id: "pure-jc006",
    name: "PURE",
    fullName: "PURE - Rectangle Photochromic",
    subtitle: "Rectangle Black Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 7500,
    rating: 4.5,
    reviewCount: 16,
    colors: [
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Square", "Rectangle", "Oval"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Rectangle", material: "Acetate", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "136mm", lensWidth: "54mm", lensHeight: "46mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: ["https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"],
    description: "PURE rectangular frames with photochromic lenses for a clean, minimalist look.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // SOLAR JC005
  {
    id: "solar-jc005",
    name: "SOLAR",
    fullName: "SOLAR - Aviator Photochromic",
    subtitle: "Aviator Gold Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 7500,
    rating: 4.5,
    reviewCount: 17,
    colors: [
      { name: "Gold", code: "gold", hex: "#D4AF37", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Oval", "Square"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Aviator", material: "Metal", rimType: "Full Rim", weight: "17g", springHinge: "Yes", frameWidth: "138mm", lensWidth: "54mm", lensHeight: "48mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"],
    description: "SOLAR aviator frames with photochromic lenses for a classic, sun-ready look.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // FLARE JC004
  {
    id: "flare-jc004",
    name: "FLARE",
    fullName: "FLARE - Square Photochromic",
    subtitle: "Square Black Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 10000,
    rating: 4.8,
    reviewCount: 22,
    colors: [
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" },
      { name: "Gunmetal", code: "gunmetal", hex: "#2C3539", image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Large",
    fit: "Men",
    faceShapes: ["Square", "Rectangle", "Oval"],
    features: ["Photochromic", "Blue Light Blocking", "UV Protection"],
    specs: { frameShape: "Square", material: "Metal", rimType: "Full Rim", weight: "17g", springHinge: "Yes", frameWidth: "140mm", lensWidth: "55mm", lensHeight: "48mm", bridge: "20mm", templeLength: "148mm" },
    inStock: true, bestSeller: true, newArrival: false,
    images: ["https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"],
    description: "FLARE bold square frames with premium photochromic lenses for standout style.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "UV protection", "Free pouch"]
  },
  
  // APEX JC003
  {
    id: "apex-jc003",
    name: "APEX",
    fullName: "APEX - Square Photochromic",
    subtitle: "Square Black Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 7500,
    rating: 4.5,
    reviewCount: 16,
    colors: [
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Square", "Oval", "Rectangle"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Square", material: "Acetate", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: ["https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"],
    description: "APEX square frames with photochromic lenses for everyday performance.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // STORM JC001
  {
    id: "storm-jc001",
    name: "STORM",
    fullName: "STORM - Rectangle Photochromic",
    subtitle: "Rectangle Black Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 6500,
    rating: 4.4,
    reviewCount: 15,
    colors: [
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Square", "Rectangle", "Oval"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Rectangle", material: "Acetate", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "136mm", lensWidth: "54mm", lensHeight: "46mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: ["https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"],
    description: "STORM rectangular frames with photochromic lenses for everyday wear.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },
  
  // ZENITH JC002
  {
    id: "zenith-jc002",
    name: "ZENITH",
    fullName: "ZENITH - Square Photochromic",
    subtitle: "Square Black Photochromic Glasses",
    type: "photochromic",
    category: "men",
    price: 7500,
    rating: 4.5,
    reviewCount: 17,
    colors: [
      { name: "Black", code: "black", hex: "#1E1E1E", image: "https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop" },
      { name: "Brown", code: "brown", hex: "#8B4513", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop" }
    ],
    size: "Medium",
    fit: "Men",
    faceShapes: ["Square", "Oval", "Rectangle"],
    features: ["Photochromic", "Blue Light Blocking"],
    specs: { frameShape: "Square", material: "Acetate", rimType: "Full Rim", weight: "16g", springHinge: "Yes", frameWidth: "135mm", lensWidth: "53mm", lensHeight: "47mm", bridge: "19mm", templeLength: "145mm" },
    inStock: true, bestSeller: false, newArrival: true,
    images: ["https://images.unsplash.com/photo-1556306535-38febf6783e7?q=80&w=800&auto=format&fit=crop"],
    description: "ZENITH square frames with photochromic lenses for peak performance.",
    whatsIncluded: ["Photochromic lenses", "Blue light protection", "Free pouch"]
  },


    // CASES (18 products)
    {
        id: 'acc-case-001',
        name: 'Premium Hard Shell Case',
        type: 'accessory',
        category: 'case',
        price: 3500,
        image: 'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.8,
        bestSeller: true,
        newArrival: false,
        description: 'Hard-shell case with soft velvet interior for maximum protection.',
        colors: []
    },
    {
        id: 'acc-case-002',
        name: 'Luxury Folding Case',
        type: 'accessory',
        category: 'case',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.7,
        bestSeller: false,
        newArrival: true,
        description: 'Elegant folding case that fits easily in pocket or bag.',
        colors: []
    },
    {
        id: 'acc-case-003',
        name: 'Classic Rigid Case',
        type: 'accessory',
        category: 'case',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.6,
        bestSeller: false,
        newArrival: false,
        description: 'Durable rigid case with secure snap closure.',
        colors: []
    },
    {
        id: 'acc-case-004',
        name: 'Eco-Friendly Bamboo Case',
        type: 'accessory',
        category: 'case',
        price: 5500,
        image: 'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.9,
        bestSeller: true,
        newArrival: true,
        description: 'Sustainable bamboo case, eco-friendly and stylish.',
        colors: []
    },
    {
        id: 'acc-case-005',
        name: 'Soft Velvet Pouch',
        type: 'accessory',
        category: 'case',
        price: 1800,
        image: 'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.5,
        bestSeller: false,
        newArrival: false,
        description: 'Soft velvet pouch, perfect for lightweight storage.',
        colors: []
    },
    {
        id: 'acc-case-006',
        name: 'Leatherette Travel Case',
        type: 'accessory',
        category: 'case',
        price: 4200,
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.7,
        bestSeller: true,
        newArrival: false,
        description: 'Premium leatherette case, ideal for travel protection.',
        colors: []
    },
    {
        id: 'acc-case-007',
        name: 'Ultra-Slim Compact Case',
        type: 'accessory',
        category: 'case',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.4,
        bestSeller: false,
        newArrival: true,
        description: 'Slim profile case, fits easily in any bag.',
        colors: []
    },
    {
        id: 'acc-case-008',
        name: 'Vintage Style Case',
        type: 'accessory',
        category: 'case',
        price: 4800,
        image: 'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.8,
        bestSeller: true,
        newArrival: false,
        description: 'Vintage design case with modern protection.',
        colors: []
    },
    {
        id: 'acc-case-009',
        name: 'Magnetic Snap Case',
        type: 'accessory',
        category: 'case',
        price: 3900,
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.6,
        bestSeller: false,
        newArrival: true,
        description: 'Case with magnetic snap closure for easy access.',
        colors: []
    },
    {
        id: 'acc-case-010',
        name: 'Water-Resistant Pouch',
        type: 'accessory',
        category: 'case',
        price: 2200,
        image: 'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.3,
        bestSeller: false,
        newArrival: false,
        description: 'Water-resistant pouch, protects from moisture.',
        colors: []
    },
    {
        id: 'acc-case-011',
        name: 'Carbon Fiber Pattern Case',
        type: 'accessory',
        category: 'case',
        price: 3800,
        image: 'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.5,
        bestSeller: true,
        newArrival: false,
        description: 'Sporty carbon fiber pattern case.',
        colors: []
    },
    {
        id: 'acc-case-012',
        name: 'Floral Print Pouch',
        type: 'accessory',
        category: 'case',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.4,
        bestSeller: false,
        newArrival: true,
        description: 'Beautiful floral print pouch for stylish storage.',
        colors: []
    },
    {
        id: 'acc-case-013',
        name: 'Minimalist Sleeve',
        type: 'accessory',
        category: 'case',
        price: 2100,
        image: 'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.2,
        bestSeller: false,
        newArrival: false,
        description: 'Clean minimalist sleeve for simple protection.',
        colors: []
    },
    {
        id: 'acc-case-014',
        name: 'Leather Grain Case',
        type: 'accessory',
        category: 'case',
        price: 4600,
        image: 'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.7,
        bestSeller: true,
        newArrival: false,
        description: 'Premium leather grain finish case.',
        colors: []
    },
    {
        id: 'acc-case-015',
        name: 'Crystal Clear Case',
        type: 'accessory',
        category: 'case',
        price: 2900,
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.3,
        bestSeller: false,
        newArrival: true,
        description: 'Transparent crystal clear case, shows off your glasses.',
        colors: []
    },
    {
        id: 'acc-case-016',
        name: 'Double Compartment Case',
        type: 'accessory',
        category: 'case',
        price: 6500,
        image: 'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.9,
        bestSeller: true,
        newArrival: false,
        description: 'Case with two compartments, holds two pairs.',
        colors: []
    },
    {
        id: 'acc-case-017',
        name: 'Hard Shell Travel Case',
        type: 'accessory',
        category: 'case',
        price: 3800,
        image: 'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1603219450209-4187c5e5d5a2?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.6,
        bestSeller: false,
        newArrival: true,
        description: 'Durable hard shell case for travel protection.',
        colors: []
    },
    {
        id: 'acc-case-018',
        name: 'Soft Microfiber Pouch',
        type: 'accessory',
        category: 'case',
        price: 1500,
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1588176642088-53fc5c7c3a6a?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.4,
        bestSeller: true,
        newArrival: false,
        description: 'Soft microfiber pouch, gentle on lenses.',
        colors: []
    },

    // EYEGLASS CHAINS (10 products)
    {
        id: 'acc-chain-001',
        name: 'Stylish Star Gold Chain',
        type: 'accessory',
        category: 'chain',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.5,
        bestSeller: true,
        newArrival: false,
        description: 'Gold star design chain, adds sparkle to any frame.',
        colors: []
    },
    {
        id: 'acc-chain-002',
        name: 'Elegant Pearl Beaded Chain',
        type: 'accessory',
        category: 'chain',
        price: 3800,
        image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.7,
        bestSeller: true,
        newArrival: true,
        description: 'Elegant pearl beaded chain for a sophisticated look.',
        colors: []
    },
    {
        id: 'acc-chain-003',
        name: 'Classic Silver Link Chain',
        type: 'accessory',
        category: 'chain',
        price: 2300,
        image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.4,
        bestSeller: false,
        newArrival: false,
        description: 'Classic silver link chain, versatile and stylish.',
        colors: []
    },
    {
        id: 'acc-chain-004',
        name: 'Vintage Tortoise Chain',
        type: 'accessory',
        category: 'chain',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.6,
        bestSeller: true,
        newArrival: false,
        description: 'Vintage tortoise shell pattern chain.',
        colors: []
    },
    {
        id: 'acc-chain-005',
        name: 'Minimalist Black Cord Chain',
        type: 'accessory',
        category: 'chain',
        price: 2000,
        image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.3,
        bestSeller: false,
        newArrival: true,
        description: 'Simple black cord chain, minimal and modern.',
        colors: []
    },
    {
        id: 'acc-chain-006',
        name: 'Bohemian Colorful Beads Chain',
        type: 'accessory',
        category: 'chain',
        price: 3500,
        image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.8,
        bestSeller: true,
        newArrival: false,
        description: 'Colorful bohemian beads chain, fun and vibrant.',
        colors: []
    },
    {
        id: 'acc-chain-007',
        name: 'Luxury Crystal Accent Chain',
        type: 'accessory',
        category: 'chain',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.9,
        bestSeller: true,
        newArrival: true,
        description: 'Luxury chain with crystal accents, elegant and eye-catching.',
        colors: []
    },
    {
        id: 'acc-chain-008',
        name: 'Retro Resin Bead Chain',
        type: 'accessory',
        category: 'chain',
        price: 2900,
        image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.5,
        bestSeller: false,
        newArrival: false,
        description: 'Retro style resin bead chain, unique and stylish.',
        colors: []
    },
    {
        id: 'acc-chain-009',
        name: 'Modern Geometric Chain',
        type: 'accessory',
        category: 'chain',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.6,
        bestSeller: true,
        newArrival: true,
        description: 'Modern geometric design chain, contemporary and cool.',
        colors: []
    },
    {
        id: 'acc-chain-010',
        name: 'Romantic Rose Gold Chain',
        type: 'accessory',
        category: 'chain',
        price: 3600,
        image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.7,
        bestSeller: true,
        newArrival: false,
        description: 'Romantic rose gold chain, perfect for a feminine touch.',
        colors: []
    },

    // CLEANING SPRAYS (2 products)
    {
        id: 'acc-spray-001',
        name: 'Premium Lens Cleaning Spray',
        type: 'accessory',
        category: 'spray',
        price: 1500,
        image: 'https://images.unsplash.com/photo-1581092335871-4c7ff2f3b5a5?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1581092335871-4c7ff2f3b5a5?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.8,
        bestSeller: true,
        newArrival: false,
        description: 'Alcohol-free lens cleaning spray, safe for all coatings.',
        colors: []
    },
    {
        id: 'acc-spray-002',
        name: 'Anti-Fog Lens Cleaner',
        type: 'accessory',
        category: 'spray',
        price: 1800,
        image: 'https://images.unsplash.com/photo-1581092335871-4c7ff2f3b5a5?q=80&w=500&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1581092335871-4c7ff2f3b5a5?q=80&w=500&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500&auto=format&fit=crop'
        ],
        rating: 4.7,
        bestSeller: true,
        newArrival: true,
        description: 'Anti-fog formula, keeps lenses clear in all conditions.',
        colors: []
    }
];

// ============================================
// CART FUNCTIONALITY - SHARED ACROSS ALL PAGES
// ============================================

// Cart functions - make them globally available
window.cartFunctions = {
    // Get cart from localStorage
    getCart: function() {
        return JSON.parse(localStorage.getItem('ebj_cart')) || [];
    },
    
    // Save cart to localStorage
    saveCart: function(cart) {
        localStorage.setItem('ebj_cart', JSON.stringify(cart));
        this.updateCartCount();
    },
    
    // Add item to cart
    addToCart: function(product, quantity = 1, selectedColor = null) {
        let cart = this.getCart();
        
        // Create cart item
        const cartItem = {
            id: product.id,
            name: product.fullName || product.name,
            code: product.id.split('-')[1]?.toUpperCase() || product.id.substring(0, 6).toUpperCase(),
            price: product.price,
            quantity: quantity,
            image: product.images ? product.images[0] : product.image,
            type: product.type || 'accessory',
            category: product.category || null
        };
        
        // Add color if selected (for glasses)
        if (selectedColor && product.colors) {
            const colorObj = product.colors.find(c => c.name === selectedColor || c.code === selectedColor);
            if (colorObj) {
                cartItem.color = colorObj.name;
                cartItem.colorCode = colorObj.code;
                cartItem.colorImage = colorObj.image;
            }
        }
        
        // Check if item already exists in cart
        const existingItemIndex = cart.findIndex(item => 
            item.id === cartItem.id && 
            (item.color === cartItem.color || (!item.color && !cartItem.color))
        );
        
        if (existingItemIndex > -1) {
            // Update quantity
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Add new item
            cart.push(cartItem);
        }
        
        this.saveCart(cart);
        this.showNotification(`${product.name} added to cart!`);
        
        // Optional: redirect to cart page
        // window.location.href = 'cart.html';
        return cart;
    },
    
    // Show notification
    showNotification: function(message) {
        const notif = document.createElement('div');
        notif.className = 'cart-notification';
        notif.innerHTML = `<i class="fas fa-check-circle" style="color:#4CAF50;"></i><span>${message}</span> <a href="cart.html" style="color:var(--black); font-weight:600; margin-left:10px;">View Cart</a>`;
        notif.style.cssText = `
            position: fixed;
            top: 80px;
            right: 15px;
            background: var(--pink-soft);
            color: var(--black);
            padding: 12px 20px;
            border-radius: 50px;
            box-shadow: var(--shadow-hover);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 500;
            animation: slideInRight 0.3s;
            font-size: 0.9rem;
        `;
        document.body.appendChild(notif);
        setTimeout(() => {
            notif.style.animation = 'slideOutRight 0.3s';
            setTimeout(() => notif.remove(), 300);
        }, 3000);
    },
    
    // Update cart count in header
    updateCartCount: function() {
        const cart = this.getCart();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = totalItems;
        });
    }
};

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    window.cartFunctions.updateCartCount();
});

// ============================================
// GLOBAL CART FUNCTIONS - Available on all pages
// ============================================

// Make cart functions globally available
window.EyewearCart = {
    // Get cart from localStorage
    getCart: function() {
        return JSON.parse(localStorage.getItem('ebj_cart')) || [];
    },
    
    // Save cart to localStorage
    saveCart: function(cart) {
        localStorage.setItem('ebj_cart', JSON.stringify(cart));
        this.updateCartCount();
    },
    
    // Update cart count in header
    updateCartCount: function() {
        const cart = this.getCart();
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = totalItems;
        });
    },
    
    // Add item to cart
    addToCart: function(product, quantity = 1, selectedColor = null, selectedColorImage = null) {
        let cart = this.getCart();
        
        // Create cart item
        const cartItem = {
            id: product.id,
            name: product.fullName || product.name,
            code: this.getProductCode(product.id),
            price: product.price,
            quantity: quantity,
            image: selectedColorImage || (product.images ? product.images[0] : product.image),
            type: product.type || 'accessory',
            category: product.category || null
        };
        
        // Add color if selected (for glasses)
        if (selectedColor && product.colors) {
            const colorObj = product.colors.find(c => c.name === selectedColor || c.code === selectedColor);
            if (colorObj) {
                cartItem.color = colorObj.name;
                cartItem.colorCode = colorObj.code;
            }
        }
        
        // Check if item already exists in cart (same id and same color)
        const existingItemIndex = cart.findIndex(item => 
            item.id === cartItem.id && 
            (item.color === cartItem.color || (!item.color && !cartItem.color))
        );
        
        if (existingItemIndex > -1) {
            // Update quantity
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Add new item
            cart.push(cartItem);
        }
        
        this.saveCart(cart);
        this.showNotification(`${product.name} added to cart!`);
        
        return cart;
    },
    
    // Get product code from ID
    getProductCode: function(id) {
        if (id.includes('acc-')) {
            // Accessory codes
            const accessoryCodes = [
                'EJG158327-01', 'EJG245671-02', 'EJG334589-03', 'EJG412345-04',
                'EJG567890-05', 'EJG678901-06', 'EJG789012-07', 'EJG890123-08',
                'EJG901234-09', 'EJG012345-10', 'EJG123456-11', 'EJG234567-12',
                'EJC158327-01', 'EJC245671-02', 'EJC334589-03', 'EJC412345-04',
                'EJC567890-05', 'EJC678901-06', 'EJC789012-07', 'EJC890123-08',
                'EJC901234-09', 'EJC012345-10', 'EJC123456-11', 'EJC234567-12',
                'EJK158327-01', 'EJK245671-02', 'EJK334589-03', 'EJK412345-04',
                'EJK567890-05', 'EJK678901-06'
            ];
            const index = Math.abs(id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % accessoryCodes.length;
            return accessoryCodes[index];
        } else {
            // Glasses codes
            const match = id.match(/jc(\d+)/i);
            return match ? `JC${match[1]}` : id.split('-')[1]?.toUpperCase() || id.substring(0, 6).toUpperCase();
        }
    },
    
    // Show notification
    showNotification: function(message) {
        // Remove any existing notification
        const existingNotif = document.querySelector('.cart-notification');
        if (existingNotif) existingNotif.remove();
        
        const notif = document.createElement('div');
        notif.className = 'cart-notification';
        notif.innerHTML = `
            <i class="fas fa-check-circle" style="color:#4CAF50;"></i>
            <span>${message}</span>
            <a href="cart.html" style="color:var(--black); font-weight:600; margin-left:10px; text-decoration:none;">View Cart</a>
        `;
        notif.style.cssText = `
            position: fixed;
            top: 80px;
            right: 15px;
            background: var(--pink-soft);
            color: var(--black);
            padding: 12px 20px;
            border-radius: 50px;
            box-shadow: var(--shadow-hover);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 500;
            animation: slideInRight 0.3s;
            font-size: 0.9rem;
        `;
        document.body.appendChild(notif);
        
        setTimeout(() => {
            notif.style.animation = 'slideOutRight 0.3s';
            setTimeout(() => notif.remove(), 300);
        }, 3000);
    }
};

// ============================================
// WISHLIST FUNCTIONALITY - SHARED ACROSS ALL PAGES
// ============================================

// Make wishlist functions globally available
window.EyewearWishlist = {
    // Get wishlist from localStorage
    getWishlist: function() {
        return JSON.parse(localStorage.getItem('ebj_wishlist')) || [];
    },
    
    // Save wishlist to localStorage
    saveWishlist: function(wishlist) {
        localStorage.setItem('ebj_wishlist', JSON.stringify(wishlist));
        this.updateWishlistCount();
    },
    
    // Update wishlist count in header
    updateWishlistCount: function() {
        const wishlist = this.getWishlist();
        document.querySelectorAll('.wishlist-count').forEach(el => {
            if (el) el.textContent = wishlist.length;
        });
    },
    
    // Check if product is in wishlist
    isInWishlist: function(productId) {
        const wishlist = this.getWishlist();
        return wishlist.some(item => item.id === productId);
    },
    
    // Get product by ID from products array
    getProductById: function(productId) {
        return products.find(p => p.id === productId);
    },
    
    // Add item to wishlist
    addToWishlist: function(productId, selectedColor = null, selectedColorImage = null) {
        let wishlist = this.getWishlist();
        const product = this.getProductById(productId);
        
        if (!product) return false;
        
        // Check if already in wishlist
        if (this.isInWishlist(productId)) {
            this.showNotification(`${product.name} is already in your wishlist`, 'warning');
            return false;
        }
        
        // Create wishlist item
        const wishlistItem = {
            id: product.id,
            name: product.fullName || product.name,
            code: window.EyewearCart ? window.EyewearCart.getProductCode(product.id) : product.id,
            price: product.price,
            oldPrice: product.oldPrice || null,
            image: selectedColorImage || (product.images ? product.images[0] : product.image),
            category: product.category || null,
            type: product.type || 'glasses',
            rating: product.rating || 0,
            reviews: product.reviewCount || 0,
            inStock: product.inStock !== undefined ? product.inStock : true,
            addedAt: new Date().toISOString()
        };
        
        // Add color if selected (for glasses)
        if (selectedColor && product.colors) {
            const colorObj = product.colors.find(c => c.name === selectedColor || c.code === selectedColor);
            if (colorObj) {
                wishlistItem.color = colorObj.name;
                wishlistItem.colorCode = colorObj.code;
            }
        }
        
        wishlist.push(wishlistItem);
        this.saveWishlist(wishlist);
        this.showNotification(`${product.name} added to wishlist!`, 'success');
        
        return true;
    },
    
    // Remove item from wishlist
    removeFromWishlist: function(productId) {
        let wishlist = this.getWishlist();
        const product = this.getProductById(productId);
        wishlist = wishlist.filter(item => item.id !== productId);
        this.saveWishlist(wishlist);
        this.showNotification(product ? `${product.name} removed from wishlist` : 'Item removed from wishlist', 'success');
    },
    
    // Toggle wishlist (add/remove)
    toggleWishlist: function(productId, selectedColor = null, selectedColorImage = null) {
        if (this.isInWishlist(productId)) {
            this.removeFromWishlist(productId);
            return false;
        } else {
            this.addToWishlist(productId, selectedColor, selectedColorImage);
            return true;
        }
    },
    
    // Update wishlist icons on page (call this after page loads)
    updateWishlistIcons: function() {
        const wishlist = this.getWishlist();
        document.querySelectorAll('.wishlist-icon').forEach(btn => {
            const productId = btn.dataset.productId;
            const heartIcon = btn.querySelector('i');
            
            if (productId && wishlist.some(item => item.id === productId)) {
                if (heartIcon) {
                    heartIcon.classList.remove('far');
                    heartIcon.classList.add('fas');
                }
                btn.classList.add('active');
            } else {
                if (heartIcon) {
                    heartIcon.classList.remove('fas');
                    heartIcon.classList.add('far');
                }
                btn.classList.remove('active');
            }
        });
    },
    
    // Show notification
    showNotification: function(message, type = 'success') {
        // Remove any existing notification
        const existingNotif = document.querySelector('.wishlist-notification');
        if (existingNotif) existingNotif.remove();
        
        const notif = document.createElement('div');
        notif.className = 'wishlist-notification';
        
        const icon = type === 'success' ? 'fa-heart' : 'fa-exclamation-circle';
        const iconColor = type === 'success' ? '#ff4757' : '#FF9800';
        const bgColor = type === 'success' ? 'var(--pink-soft)' : '#fff3e0';
        
        notif.innerHTML = `
            <i class="fas ${icon}" style="color:${iconColor};"></i>
            <span>${message}</span>
            <a href="wishlist.html" style="color:var(--black); font-weight:600; margin-left:10px; text-decoration:none;">View Wishlist</a>
        `;
        
        notif.style.cssText = `
            position: fixed;
            top: 130px;
            right: 15px;
            background: ${bgColor};
            color: var(--black);
            padding: 12px 20px;
            border-radius: 50px;
            box-shadow: var(--shadow-hover);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 500;
            animation: slideInRight 0.3s;
            font-size: 0.9rem;
            border-left: 4px solid ${iconColor};
        `;
        document.body.appendChild(notif);
        
        setTimeout(() => {
            notif.style.animation = 'slideOutRight 0.3s';
            setTimeout(() => notif.remove(), 300);
        }, 3000);
    }
};

// Initialize wishlist count and icons on page load
document.addEventListener('DOMContentLoaded', function() {
    if (window.EyewearWishlist) {
        window.EyewearWishlist.updateWishlistCount();
        window.EyewearWishlist.updateWishlistIcons();
    }
    
    if (window.EyewearCart) {
        window.EyewearCart.updateCartCount();
    }
});

// Add animation styles if not already present
if (!document.getElementById('cart-animation-styles')) {
    const style = document.createElement('style');
    style.id = 'cart-animation-styles';
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}
// Make products globally available
window.products = products;

