# Express App Structure

## Description

This repo quickly initializes a Express.js app project. The app structure imitates [Laravel](https://laravel.com/) app structure.

## File structure

```
app/
├── Exceptions/                             # handles all error http responses
│   ├── HttpExceptions/
│   │   ├── HttpException.js
│   │   └── InternalServerErrorException.js
│   └── Handler.js                          # main handler
├── Http/
│   ├── Controllers/
│   │   └── ExampleController.js
│   ├── Middlewares/
│   │   └── ExampleMiddleware.js
│   └── Services/                           # helper functions
│       └── ExampleService.js
└── Validators/
    └── ExampleValidator.js                 # request validators (middlewares)
bootstrap/
└── app.js                                  # bootstrap express.js app
configs/                                    # app configurations
└── app.js
routes/
├── api/                                    # all api routes
│   └── index.js                            # main api route entry
└── web/                                    # all web routes
    ├── Example.js
    └── index.js                            # main web route entry
.env                                        # app configs
main.js                                     # the main entry of the app
package.json
```
## How to use

1. Clone the repo

```bash
$ git clone https://github.com/senhungwong/expressjs-app-structure.git [your-app-name]
```

```bash
$ cd [your-app-name|expressjs-app-structure]
```

2. Add extensions

Add the extensions you want. See more [Extensions](#extensions)

3. Install packages

```bash
$ npm install
```

4. Remove Git and readme

Remove the [expressjs-app-structure](https://github.com/senhungwong/expressjs-app-structure) git folder so you can push it to your own git.

```bash
$ rm -rf .git && readme.md
```

## Extensions

### Clean App

Clean app that does not contain examples

```bash
$ git merge origin/clean
```
