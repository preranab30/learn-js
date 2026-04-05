class Animal {
    sleep(){
        console.log("slepping");
    }

    eat() {
        console.log("animal eating");
    }
}
class Tiger extends Animal {
    sleep(){
        console.log("Tiger is sleeping");

    }
    eat() {
        console.log("Tiger is eating");
    }
}

class dog extends Animal {
    sleep() {
        console.log("ddog is sleeping");
    }
    eat() {
        console.log("Dog is eating");
    }

}
function accsesClas(an) {
    an.sleep();
    an.eat();
}

a = new Animal();
t = new Tiger();
d = new dog();

accsesClas(a);
accsesClas(t);
accsesClas(d);
