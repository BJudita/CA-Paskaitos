let userDatabase = [
    {
        id: 1,
        name: "Tadas",
        surname: "Tadauskas",
        age: 25,
      },
      {
        id: 2,
        name: "Jonas",
        surname: "Jonaitis",
        age: 35,
      },
      {
        id: 3,
        name: "Petras",
        surname: "Petraitis",
        age: 45,
      },
    ];

    // rasom naujus controller, kiekvienam rout, get, post ir tt..
    export function getUsers(req, res) {
        res.json(userDatabase); // siunciam respons json formatu
    }

    export function createUser(req, res) {
      const user = req.body; // gauti info
      userDatabase.push(user);

      res.json(user) // graziname user
    }

    export function updateAllUsersAge(req, res) {
      const { age } = req.body;  // lygu const age = body.age

      userDatabase = userDatabase.map((user) => {
      return {
        ...user,
        age,
      }
    });
    res.json(userDatabase);
    }

    export function deleteAllUsers(req, res) {
      userDatabase = [];
      res.json({message: "All users deleted"});
    }