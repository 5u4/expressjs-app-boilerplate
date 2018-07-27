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
