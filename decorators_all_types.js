
function Log1(target:Function){
    console.log('CLASS-LEVEL-LOGGER');
    console.log(target);
}

function Log2(target:any,propertyName:string){
    console.log('PROPERTY-LEVEL-LOGGER');
    console.log(target)
    console.log(propertyName)
}

function Log3s(target:any,name:string,desc:PropertyDescriptor){
    console.log('ACCESSOR-LEVEL-LOGGER');
    console.log(target)
    console.log(name)
    console.log(desc)
}

function Log3g(target:any,name:string,desc:PropertyDescriptor){
    console.log('ACCESSOR-LEVEL-LOGGER');
    console.log(target)
    console.log(name)
    console.log(desc)
}

function Log4(target:any,name:string,desc:PropertyDescriptor){
    console.log('METHOD-DECORATOR')
    console.log(target)
    console.log(name)
    console.log(desc)
}

function Log5(target:any,name:string,pos:number){
    console.log('PARAMETER-DECORATOR');
    console.log(target)
    console.log(name)
    console.log(pos)
}

@Log1
class Product{
    @Log2
    name:string;
    _price:number;

    @Log3s
    set price(newPrice:number){
        console.log('Setting');
        this._price = newPrice;
    }

    //@Log3g
    get price(){
        console.log('Getting')
        return this._price;
    }

    @Log4
    getFinalPrice(@Log5 tax:number){
        return this._price+tax;
    }

    constructor(name:string,price:number){
        this.name = name;
        this._price = price;
    }

}
