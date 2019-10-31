//const { productsMock } = require('../utils/mocks');
const MongoConnect = require("../lib/mongo");

class ProductService {
  constructor() {
    this.collection = "products";
    this.mongoDB = new MongoConnect();
  }

  async getProducts() {
    const products = await this.mongoDB.getAll(this.collection);
    return products || [];
  }

  async getProduct({ id }){
    const product = await this.mongoDB.get(this.collection, productId);
    return product || {};
  } 

  async createProduct({ product }){
    const createdProductId = await this.mongoDB.create(this.collection, product);
    return createdProductId;
  } 

  async updatePtoduct(id, data) {
    const product = await this.mongoDB.update(
      this.collection, 
      id, 
      data);
    return product || {};
  }

  async deleteProduct({ id }) {
    const deletedProductId = await this.mongoDB.delete(this.collection, id);
    return deletedProductId;
  }
}

module.exports = ProductService;
