class car{
    public color:string;
    constructor(color:string){
        this.color = color
    }
}

class Audi extends car{
    price:number;
    features:string;
    constructor(color:string,price:number,features:string){
        super(color);
        this.price = price;
        this.features = features;
    }

    display(){
        var str = `Car details : color : ${this.color} features: ${this.features} price:${this.price}`;
        console.log(str);
    }
}

var obj = new Audi ('Yellow',2500000,'power windows and power glasses');
obj.display();
