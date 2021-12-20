class resturant{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
}

class swiggy extends resturant{
    foodId:number;
    foodName:string
    desc:string;
    constructor(name:string,foodName:string,foodId:number,desc:string){
        super(name);
        this.foodName = foodName;
        this.foodId = foodId;
        this.desc = desc;
    }

    display(){
        var str = `resturant details : Name : ${this.name} FoodID: ${this.foodId} Food-Items: ${this.foodName} desc:${this.desc}`;
        console.log(str);
    }
}

var obj = new swiggy ('Green Chilly','Panner Chilly',101,'Awesome Resturant');
obj.display();
