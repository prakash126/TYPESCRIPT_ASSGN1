class employee{
    protected id:number;
    protected name:string;
    constructor(id:number,name:string){
        this.id = id;
        this.name = name
    }
    
}

class regularEmp extends employee{
    nofDays:number;
    constructor(id:number,name:string,nofDays:number,){
        super(id,name);
        this.nofDays = nofDays;
    }

    display(){
        
        var str = `Employee detail : EmpID : ${this.id} , EmpName: ${this.name} , No_of_Days_Worked : ${this.nofDays}`;
        console.log(str);
    }
}

var obj = new regularEmp (101,"Prince",50);
obj.display();
