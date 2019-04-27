# Eat app Readme
By Harry Ghazni

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
To view the graphql endpoint run `cb graphql` and go to `localhost:4000/graphql`.

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

>Delete User
```
mutation {
  deleteUser(id: "1", name: "Hannibal Barca", email: "dan@dan.com") {
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