# Eat
By Harry Ghazni
```
          _          _
                           (c)___c____(c)
                            \ ........../
                             |.........|
                              |.......|
                              |.......|
                              |=======|
                              |=======|
                             __o)""""::?
                            C__    c)::;
                               >--   ::     /\
                               (____/      /__\
                               } /""|      |##|
                    __/       (|V ^ )\     |##|
                    o | _____/ |#/ / |     |##|
           @        o_|}|_____/|/ /  |     |##|
                          _____/ /   |     ~!!~
              ======ooo}{|______)#   |     /`'\
          ~~~~ ;    ;          ###---|8     ""
        ____;_____;____        ###====     /:|\
       (///0///@///@///)       ###@@@@|
       |~~~~~~~~~~~~~~~|       ###@@@@|
        \             /        ###@@@@|               +
         \___________/         ###xxxxx      /\      //
           H H   H  H          ###|| |      /  \    //
           H H   H  H           | || |     /____\  /~_^_
           H H   H  H           C |C |     _|@@|_ /__|#|_
           H H   H  H            || ||    /_|@@|_/___|#|/|
 v    \/   H(o) (o) H            || ::   |:::::::::::::|#|
 ~    ~~  (o)      (o)        Ccc__)__)  |ROMAN CANDLES|#|
  \|/      ~   @* & ~                    |:::::::::::::|/  \|/
   ~           \|/        !!        \ !/  ~~~~~~~~~~~~~    ~~~
               ~~~        ~~         ~~           ~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```
Helping users find places to eat near them.

Visit the demo
https://eat.netlify.com/


Run the following to start the project

```
cb start
```
## Storybook
To run Storybook
```
npm run storybook
```

## Build
To build it use

```
cb build
```

### GraphQL
To view the graphql endpoint run `cb graphql` and go to `localhost:4000/graphql` which will open up apollo playground.

To mutate the DB

>Add user
```
mutation {
  addUser(id: "1", name: "Harry Ghazni", email: "harry@barry.com") {
    id
    name
    email
  }
}
```

>Add eatery
```
mutation {
  addUser(id: "1", name: "Delboys Rat Burgers", address: "Behind the spoons", foodType: "Burgers") {
    id
    name
    address
    foodType
  }
}
```

>Delete User
```
mutation {
  deleteUser(name: "Hannibal Barca", email: "hanibobo69@carthage.com") {
    id
    name
    email
  }
}
```

>Edit user
```
mutation {
  editUser(id: "1", name: "Leeroy Jenkins", email: "dan@dan.com") {
    id
    name
    email
  }
}
```

>Query
```
query {
  users {
    id
    name
    email
  }
}
```

>Specific Query (for user)
```
query {
  user(id: "2"){
    id
    name
    email
  }
}
```
