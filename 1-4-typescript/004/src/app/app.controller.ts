//7/ Changing function to classes
export class AppController {
  public products: any[]

  constructor(AppService: any) {
    this.products = AppService.products
  }
}
