Airport challenge
=================

```
        ______
        _\____\___
=  = ==(____MA____)
          \_____\___________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

#### Challenge - model the flow of planes at various airports:

* The weather is either randomly sunny or not
* Planes can land and take off provided the weather is sunny
* Planes can only take off from the airport they're parked in (naturally)
* Airports have a maximum capacity, and can only accept planes if there's space

##### Built with node modules. 

There are separate modules for the airport & airplane classes, as well as for the takeoff, landing and weather methods.

There's a command line interface built with Inquirer.

The takeoff and landing methods are tested with mocha chai. 

The weather is mocked so it's always "sunny". I've used the Arrange, Assert, Act paradigm to organise the tests.

> npm start - starts the CLI
> npm test - run the tests
