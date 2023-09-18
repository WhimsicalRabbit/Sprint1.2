# Sprint1.2

DESING PATTERNS

For what I could understand, design pattern are models of patterns use to solve a wide arrange of coding problems. This patterns are usually presented in an abstract way so they can be shifted to perform in different ways to solve a type of problem that comes in a wide arrange of ways, these patters can vary to solve the most common and usual problems in coding to more complicated and specific types of problems, sometimes they can even be combined with other patterns to enchange their productivity and problem solving capacities.

BUILDER PATTERN

The Builed pattern, from what I could understand, it's a pattern that allows to separate the construnction of an object from its representation, what does this mean?

When we usually create an object we do it this way:

new Rabbit(Uni, 4, 4,3, full flop) 

The problem that this have is that, when looking from outside without looking at the specific class and its builder, we probably won't have any clue of what does parameters mean, that is the construction of an object, and its representarion would be the finished object, for example:

Name: Uni
Age: 4
Weigh: 4,3
Ears: full flop

This pattern objective is to make more readable the process to making an object, this is made by creating another classe that will act as the constructor, aka, a builder. This clase is build only to create the instances of another object, making it more readable at the moment of writing the code, making it look something like this.

new RabbitBuilder().setName(varName).
    setAge(varBreed).
    setWeight(varEars).
    setEars(varSize).
    build()

And the last method "build()" is the one that is in charge of creating the instances for an specific class, this also lets create object with only specific instances, for example:

new RabbitBuilder().setName(varName).
    setAge(varBreed).
    build()

This is a better alternative to the usual and more prone-confusion form. Also the diffence between this an a setter is that, a builder is a way to create a complex object, on the other hand, a setter is a way to access an instance of a class when it's hideen from the user.
