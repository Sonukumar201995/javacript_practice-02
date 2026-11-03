class Animal{
    sound()
    {
        console.log("animal makes a sound");
    }
}

class dog extends Animal{
    sound()
    {
        console.log("dog barks")
    }
}

class cat extends Animal{
    sound()
    {
        console.log("cat meows")
    }
}

const a1=new dog();
const a2=new cat();
a1.sound();
a2.sound();