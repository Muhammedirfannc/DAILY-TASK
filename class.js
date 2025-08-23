class Rectangle{
    area(){
        return this.width * this.height;
    }
    
    perimeter(){
        return 2*(this.width+this.height);
    }
}

const value=new Rectangle();
value.width=10;
value.height=5;

console.log(value.area());
console.log(value.perimeter());