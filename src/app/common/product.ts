export class Product {

  constructor(
              //properties that are from the product
              public sku: string,
              public name: string,
              public description: string,
              public unitPrice: string,
              public imageUrl: string,
              public active: boolean,
              public unitsInStock: string,
              public dateCreated: Date,
              public lastUpdated: Date

    ){

  }
}
