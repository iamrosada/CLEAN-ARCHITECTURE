# On layered architecture 🍰

Layering is not a novel concept. It's been around in the industry for more than a couple of years (some of you reading this document are probably younger than layering) and it's one of the first architectural styles created. In short, layering is nothing more than dividing the concerns of your application into different layers, like in a cake, where the upper layers can talk to the bottom layers but no the other way around.

Layers interact through facades, so as long as the public APIs are honored, a layer doesn't have to know anything about internal implementation details of other layers.

Let's take a look at the following diagram:

![layered_architecture.png](docs/img/layered_architecture.png)

Layered architecture, a diagram.

The most typical layered architecture has three layers: _UI_, _Domain_ and _Infrastructure_. Our systems can have as many layers as needed, it doesn't have to be just 3. It's just that this is the most typical one.

Translating this into a React application, what we would do is have our view components in the top layer. Then our state management solution would go in the layer below. Last but not least we would have an infrastructure layer for talking to external resources, like our backend, a firebase database, pusher, local storage, and any other external source of information.

For a small application this is good enough, and it's probably how we've been writing React applications for a long time. But as applications grow, these layers keep getting fatter and they start doing too much, which makes them harder to reason about.

Before jumping into that mumbo jumbo, let's talk real quick about the benefits of layering and why we want to explore implementing a layered architecture.

### Ease of reasoning

Divide and conquer: the best way of solving a big problem is splitting it into smaller problems that are easier to solve. We can reason about a layer independently without worrying about the implementation of other layers.

### Substitution

Layers can be easily substituted with alternative implementations. It's not like we're switching our http library everyday, but when the time comes, the change is self contained within a layer and it should never leak outside the layer's boundaries. Refactoring becomes easier and less intrusive.

### Evolution

Architectures that scale must have the capacity of evolving as software matures and requirements change. Although we like to do some design upfront, there are things that will only show up after development starts. When using layers, we can delay decisions about implementation details until we have enough information to make a sensible choice.

### Decoupling

Dependencies between layers are controlled since they're one directional. Aiming for low coupling (while maintaining high cohesion, or [colocation](https://kentcdodds.com/blog/colocation)) is a nice way to avoid our application becoming a big ball of mud.

### Testability

Having a layered architecture allows testing each component in isolation easy. Although this is nice, in my opinion it is not the greatest benefit in terms of testability. For me the greatest benefit of layered architectures is that it’s easier to write tests while working on the code. Since each layer should have a well defined responsibility, it's easier to think about what's worth testing during implementation.

All of the things mentioned above help us to write code that's easier to maintain. A maintainable codebase makes us more productive as we spend less time fighting against technical debt and more time working on new features. It also reduces risk when introducing changes. Last but not least, it makes our code easier to test, which ultimately gives us more confidence during development and refactoring.

Now that we know the benefits of layering and layered architectures, let us talk about what type of layered architecture we are proposing for a large React app.

# CLEAN architecture

CLEAN architecture is a type of layered architecture composed by various ideas from other layered architectures, like Onion architecture, Hexagonal architecture and Ports and Adapters architecture among others.

The core idea behind CLEAN is putting the business and the business entities at the center of a software system, and each other layer wrapping the entities. Outer layers are less specific to the business whilst inner layers are all about the business.

We'll describe briefly what each layer does in CLEAN architecture, in order to understand how we can leverage some of these concepts in our React applications.

![diagram.png](docs/img/diagram.png)

CLEAN architecture, a diagram
