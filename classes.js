class Rabbit {
    constructor (name, breed, ears, size) {
        this.name = name;
        this.breed = breed;
        this.ears = ears;
        this.size = size;
    }
}

class RabbitBuilder {
    constructor() {

        this.setName = function(name)
        {
            this.name = name;
            return this;
        }
        this.setBreed = function(breed)
        {
            this.breed = breed;
            return this;
        }

        this.setEars = function(ears)
        {
            this.ears = ears;
            return this;
        }

        this.setSize = function(size)
        {
            this.size = size;
            return this;
        }

        this.build = function ()
        {
            return new Rabbit(this.name, this.breed, this.ears, this.size)
        }

    }
}