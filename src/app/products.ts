
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images:string[];
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    images: ['phoneXL.jpg']
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A large phone with one of the best screens',
    images: ['phonemini.jpg']
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 500,
    description: 'A large phone with one of the best screens',
    images: ['phoneStandard.jpg']
  },
  {
    id: 4,
    name: 'Teclado Mecanico 60%',
    price: 999,
    description: 'A large phone with one of the best screens',
    images: ['tecladoMecanico.jpg']
  }

]