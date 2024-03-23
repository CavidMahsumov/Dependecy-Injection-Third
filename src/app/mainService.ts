
export class MainService{
  getProducts():Fruit[]{

    return [
      {name:"Apple",quantity:3},
    {name:"Banana",quantity:5},
    {name:"Lemon",quantity:2}];
  }
}

export class Fruit{
  name:string;
  quantity:number;
}
