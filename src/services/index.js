
//const { productsMock } = require('../utils/mocks');
const MongoLib = require('../lib/mongo');

class ProductService {
  constructor() {
    this.collection = 'products';
    this.mongoDB = new MongoLib();
  }

  async getProducts() {
    const products = await this.mongoDB.getAll(this.collection, query);
    return products|| [];
  }

  async getProduct({ id }) {
    const product = await this.mongoDB.get(this.collection, id);
    return product || {};
  }

  async createProduct({ product }) {
    const createMovieId = await this.mongoDB.create(this.collection, movie);
    return createMovieId;
  }

  async updateProduct({ productId, product}) {
    const updatedProductId = await this.mongoDB.update(
      this.collection,
      productId,
      product
    );
  
    return updatedProductId;
  }

  async deleteProduct({ productId}) {
    const deletedProductId = await this.mongoDB.delete(this.collection, productId);
    return deletedProductId;
  }
}

module.exports = ProductService;
