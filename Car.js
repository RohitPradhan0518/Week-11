class car{
    constructor(){
        // properties - varbible inside teh object 
        this.speed = 10;
        this.position = 10;
    }
    // mthod - funation inside the object
    iterate(){
        this.position += this.speed;
    }
}
let c1 = new car();

console.log(c1.position)

c1.iterate()
c1.iterate()
c1.iterate()
c1.iterate()

console.log(c1.position) //50