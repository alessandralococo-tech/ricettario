import { Recipe } from '../models/recipe-model';

export const MOCK_RECIPES: Recipe[] = [
  {
    id: '52982',
    title: 'Spaghetti alla Carbonara',
    category: 'Pasta',
    area: 'Italian',
    thumbnail: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg',
    instructions:
      'Portare a ebollizione una pentola grande di acqua salata. Cuocere gli spaghetti al dente. Nel frattempo, rosolare la pancetta o il guanciale in padella finché non diventa croccante. Sbattere le uova con il pecorino e abbondante pepe nero. Scolare la pasta (conservando un po\' di acqua di cottura) e unirla alla pancetta a fuoco spento. Aggiungere il mix di uova mescolando rapidamente per creare una crema senza cuocere l\'uovo.',
    ingredients: [
      { ingredient: 'Spaghetti', measure: '400g' },
      { ingredient: 'Guanciale', measure: '200g' },
      { ingredient: 'Uova', measure: '4 grandi' },
      { ingredient: 'Pecorino Romano', measure: '100g' },
      { ingredient: 'Pepe Nero', measure: 'q.b.' },
    ],
  },
  {
    id: '52820',
    title: 'Pollo Katsu al Curry',
    category: 'Chicken',
    area: 'Japanese',
    thumbnail: 'https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg',
    instructions:
      'Appiattire i petti di pollo, passarli nella farina, nell\'uovo sbattuto e infine nel panko. Friggere fino a doratura. Per la salsa: soffriggere cipolla, aglio e carote. Aggiungere la polvere di curry e il brodo, cuocere finché le verdure sono tenere, poi frullare per ottenere una salsa liscia. Servire il pollo tagliato a strisce con riso bianco e la salsa curry sopra.',
    ingredients: [
      { ingredient: 'Petto di Pollo', measure: '2 pezzi' },
      { ingredient: 'Panko', measure: '1 tazza' },
      { ingredient: 'Uova', measure: '1' },
      { ingredient: 'Farina', measure: 'q.b.' },
      { ingredient: 'Polvere di Curry', measure: '2 cucchiai' },
      { ingredient: 'Riso Basmati', measure: '2 tazze' },
    ],
  },
  {
    id: '52934',
    title: 'Zuppa di Funghi Cremosa',
    category: 'Vegetarian',
    area: 'French',
    thumbnail: 'https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg', // Link corretto
    instructions:
      'Rosolare cipolla e aglio nel burro. Aggiungere i funghi affettati e cuocere finché non rilasciano l\'acqua. Spolverare con un po\' di farina e mescolare. Versare il brodo vegetale e portare a ebollizione. Ridurre la fiamma e cuocere per 20 minuti. Aggiungere la panna da cucina, aggiustare di sale e pepe, e frullare una parte della zuppa per renderla cremosa.',
    ingredients: [
      { ingredient: 'Funghi Champignon', measure: '500g' },
      { ingredient: 'Brodo Vegetale', measure: '1 litro' },
      { ingredient: 'Panna da Cucina', measure: '200ml' },
      { ingredient: 'Cipolla', measure: '1 media' },
      { ingredient: 'Aglio', measure: '2 spicchi' },
      { ingredient: 'Burro', measure: '50g' },
      { ingredient: 'Timo', measure: '1 rametto' },
    ],
  },
  {
    id: '52804',
    title: 'Poutine',
    category: 'Side',
    area: 'Canadian',
    thumbnail: 'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg',
    instructions:
      'Friggere le patate tagliate a bastoncino fino a doratura e croccantezza. Nel frattempo, preparare la salsa gravy scaldando il brodo di manzo addensato con un roux (burro e farina). Mettere le patatine fritte in una ciotola, aggiungere i pezzi di formaggio fresco (cheese curds) e versare sopra la salsa gravy bollente per sciogliere leggermente il formaggio.',
    ingredients: [
      { ingredient: 'Patate', measure: '5 medie' },
      { ingredient: 'Olio per friggere', measure: 'q.b.' },
      { ingredient: 'Brodo di Manzo', measure: '2 tazze' },
      { ingredient: 'Farina', measure: '2 cucchiai' },
      { ingredient: 'Burro', measure: '2 cucchiai' },
      { ingredient: 'Formaggio (Curds)', measure: '2 tazze' },
    ],
  },
  {
    id: '52834',
    title: 'Tacos di Manzo',
    category: 'Beef',
    area: 'Mexican',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/800px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg', // Link Wikipedia (stabile)
    instructions:
      'Rosolare la carne macinata in padella. Aggiungere mix di spezie per tacos e un po\' d\'acqua. Cuocere finché l\'acqua evapora. Scaldare le tortillas di mais. Comporre i tacos mettendo la carne, poi lattuga, formaggio grattugiato e salsa a piacere (pico de gallo o panna acida).',
    ingredients: [
      { ingredient: 'Macinato di Manzo', measure: '500g' },
      { ingredient: 'Tortillas di Mais', measure: '8' },
      { ingredient: 'Spezie Tacos', measure: '1 bustina' },
      { ingredient: 'Lattuga', measure: '1/2 cespo' },
      { ingredient: 'Formaggio Cheddar', measure: '1 tazza' },
      { ingredient: 'Pomodori', measure: '2 a cubetti' },
    ],
  },
  {
    id: '52854',
    title: 'Pancakes ai Mirtilli',
    category: 'Dessert',
    area: 'American',
    thumbnail: 'https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg',
    instructions:
      'Mescolare farina, zucchero, lievito e sale. In un\'altra ciotola sbattere latte, uova e burro fuso. Unire i due composti senza mescolare troppo. Aggiungere delicatamente i mirtilli. Versare un mestolo di impasto su una padella calda imburrata. Girare quando si formano le bolle. Servire con sciroppo d\'acero.',
    ingredients: [
      { ingredient: 'Farina 00', measure: '200g' },
      { ingredient: 'Latte', measure: '250ml' },
      { ingredient: 'Uova', measure: '1' },
      { ingredient: 'Mirtilli freschi', measure: '100g' },
      { ingredient: 'Lievito per dolci', measure: '1 bustina' },
      { ingredient: 'Sciroppo d\'Acero', measure: 'q.b.' },
    ],
  },
  {
    id: '52959',
    title: 'Gamberi al Forno con Aglio',
    category: 'Seafood',
    area: 'Mediterranean',
    thumbnail: 'https://www.themealdb.com/images/media/meals/1529445434.jpg',
    instructions:
      'Preriscaldare il forno a 200°C. Pulire i gamberi lasciando la coda. Mescolare in una ciotolina olio d\'oliva, aglio tritato, succo di limone, prezzemolo e paprika. Disporre i gamberi su una teglia e versare sopra la marinatura. Cuocere per 8-10 minuti finché diventano rosa e opachi.',
    ingredients: [
      { ingredient: 'Gamberi', measure: '500g' },
      { ingredient: 'Aglio', measure: '4 spicchi' },
      { ingredient: 'Olio d\'Oliva', measure: '4 cucchiai' },
      { ingredient: 'Limone', measure: 'succo di 1/2' },
      { ingredient: 'Paprika dolce', measure: '1 cucchiaino' },
      { ingredient: 'Prezzemolo', measure: 'tritato' },
    ],
  },
  {
    id: '53013',
    title: 'Big Mac Fatto in Casa',
    category: 'Beef',
    area: 'American',
    thumbnail: 'https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg',
    instructions:
      'Preparare la salsa speciale mescolando maionese, senape, cetriolini tritati e paprika. Formare due polpette di carne sottili e cuocerle in padella. Tostare il pane (tagliato in 3 parti). Assemblare: base, salsa, lattuga, formaggio, carne, strato centrale di pane, salsa, lattuga, cetrioli, carne, coperchio.',
    ingredients: [
      { ingredient: 'Macinato Scelto', measure: '200g' },
      { ingredient: 'Pane per Burger', measure: '1 (con sesamo)' },
      { ingredient: 'Lattuga Iceberg', measure: 'tritata' },
      { ingredient: 'Formaggio Americano', measure: '2 fette' },
      { ingredient: 'Cetriolini', measure: '2 fette' },
      { ingredient: 'Maionese', measure: '2 cucchiai' },
      { ingredient: 'Senape', measure: '1 cucchiaino' },
    ],
  },
];