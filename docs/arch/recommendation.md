Patterns recommendation and operation
=====================================

As stated in folder structure, the boilerplate follows and architecture inspired by DDD and Clean Architecture. It implies in some patterns and methodologies having to be followed to ensure separation of concerns and make the codebase more maintainable, I will list of them here and suggest some links in the end with further info of patterns and practices that work well with this architecture.

Separation of concerns
----------------------

Separation of concerns is ensured in ths codebase in two ways:

1. Separating the source code in layer, each layer with a different responsibility that should be followed;
2. Each layer is also separated by actual concerns. When we talk about concerns in software development it is no about functionality, like `controllers` or `models`, but about concepts or context, like `users`, `logging`, `persistence` and so on.

All the patterns below have direct relation with separation of concerns.

Repository pattern
------------------

Inside the use cases you should also not touch the database directly, it is not the responsibility of the application layer to know how to work with data persistence. So we implement repositories that handle the persistence internally and inject them on the operations instances.

⚠️ Attention for this point: the repositories interfaces belongs to the `domain` layer, and their implementations belongs to the `infra` layer, but since we don't have interfaces in JavaScript we just implement on the `infra`
layer and inject it with the name of the imaginary interface.

e.g., the `UserRepository` it is use in the operation like `userRepository`, but what we are really injecting is the `SequelizeUserRepository` that communicate internally with the SQL database. The takeaway is: _the operation doesn't know how the repository works internally, it just knows the `UserRepository` methods and the parameters it expects_


The repository implementations should also return something that the `domain` and the app layers can have access, so that is why we use mappers for that, that receives stuff from the database and convert it to objects from the `domain` layer.

e.g., The `Transformer` that knows how to convert a record from the `users` table of the database to an instance of the `User` domain class and _vice versa_.

Separating the persistence from the app layer like this make it easier to test the app layer with different simulated responses from the database, including error.
