# Bool.js API Core

API Core is a Bool.js module designed for implementing the API of framework bootstraping.

## Components and Bootstraping Process

Definition and order of components to be loaded into the process of bool.js bootstraping.

| Component    | 0    | 1      | 2       | 3          |
| ------------ | ---- | ------ | ------- | ---------- |
| Core         | API  |        |         |            |
| Loader       | `->` | Config |         |            |
|              | `->` | DBConn |         |            |
| Code         |      | `->`   | Models  |            |
|              |      | `->`   | B.Logic |            |
|              |      | `->`   | Ctrls   |            |
|              |      | `->`   | Routes  |            |
|              |      | `->`   | Views   |            |
| Config       |      |        | `->`    | Middleware |
| Listen       |      |        | `->`    | Mountpoint |

## App
In charge of loading the namespace schema, and serving as a point for global access to the applications pool.
