import { Product } from './product.dto';

export interface ApiResponse {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}
