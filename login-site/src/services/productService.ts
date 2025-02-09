interface Product {
  id: number;
  name: string;
  price: number;
}

class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Ürün 1', price: 100 },
    { id: 2, name: 'Ürün 2', price: 200 },
    { id: 3, name: 'Ürün 3', price: 300 },
    { id: 4, name: 'Ürün 4', price: 400 },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}

export default ProductService;