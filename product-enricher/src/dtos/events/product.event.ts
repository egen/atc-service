class Product {
  id?: string;
  sku: string;
  name: string;
  brand: string;
  description?: string;
  imageUrl?: string;
  price: number;
  createdAt?: string;
  createdBy?: string;
  modifiedAt?: string;
  modifiedBy?: string;
}

export class ProductEvent {
  specversion: string;
  type: string;
  source: string;
  subject: string;
  id: string;
  time: string;
  datacontenttype: string;
  data: Product;
}
