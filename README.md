# Sample GraphQL API

Example api build with typescript exrepss and graphql

## Dvelopment

```shell
yarn
yarn start
```

Once the api is running, navigate to http://localhost:4000/graphql

## GraphQL

Query the api:

```grapqhl
{
  rooms(filter: "capacity > 4 and phone") {
    name
    capacity
    floor
    phone
    projector
  }
}
```

Result:

```json
{
  "data": {
    "rooms": [
      {
        "name": "Satchel",
        "capacity": 5,
        "floor": 0,
        "phone": true,
        "projector": false
      },
      {
        "name": "Mazo",
        "capacity": 7,
        "floor": 1,
        "phone": true,
        "projector": true
      }
    ]
  }
}
```