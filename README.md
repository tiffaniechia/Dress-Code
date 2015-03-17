##Contents
1. Architectural Design Decisions
2. Domain Design Decisions
3. Application Design Decisions
4. Acceptance Criteria Decisions
5. How to run this application
---
### 1. Architecture Design
 I have chosen a MEAN stack to build this application. While I have not used 3/4 of the technology stack, I believed in using the right tools for the job. My main concerns when I was choosing the tech stack were of extensibility (I wanted technologies that made scaling up a lot easier), accessibility (how easy it is for other developers to step in and build it up), and efficiency (ramping up on given stack should be fast given current knowledge resources).

 #### a. Angular JS (Client side)
 The decision for this stack was guided by Angular. Given that Angular provides powerful two way bindings, it makes this a great framework for applications with a lot of user interactions such as this app. The verbose nature of the framework would also allow client side development to be a lot faster, which is a huge consideration for this given task.

 #### b. Node.js + Express.js (Server side)
 Knowing that my client side was going to be written in Javascript, I sought to find a similar language for the server side as well. The reason behind this was because I wanted handovers, onboarding, and extension of this code base to be a lot swifter - a developer with knowledge in Javascript can write both frond and back end code, as opposed to having to find a developer proficient in two different languages if both ends were in different languages. This would make ramping up and hiring for this code base to be a lot easier.

 The reason why I chose Express.js as opposed to other frameworks was because of its flexibility, only the basics knowledge of node is required to ramp up on this stack an start building the server side code.

 #### c. MongoDB
 After researching on other databases, MongoDB stood out because of its schemaless approach. This meant that easy scalability and better performance when the databases needs to be improved upon which would definitely be in the forseeable future as this is a v0.0.1 of an app things are just starting to take shape.

Having had to extend a relational DB taught me that schemaless databases were definitely less costly in both time, effort, and resources to maintain for both the short run and long run.

---
### 2.  Domain Design Descisions

I built the application with the SOLID principles in mind. Each domain was taught out to reflect single responsibility, and as much abstraction was made as long as it still made sense both business wise and development wise.Each domain should be easily extended or removed if need be. I took upmost care in making sure that appropriate encapsulation was in place.

---

### 3. Application Design Decisions

I took strict care in ensuring that the models, services, and controllers contained the appropriate type of logic -wherein controllers were views/business logic, services strictly fetched from APIs.

- APIs are implemented in a RESTFUL manner.

- A big concern was definitely database fetching, as that is both costly and time consuming. I tried to minimize calling the database as much as possible preferring to transform data with Angular than get/post to the database

- The current struggle given how data has been wired together meant that models were very thin and not used. As the controllers were able to parse the data given straight from the services. Given this, I created the models for 1. documentation of how the db works, and for future requirements of posting to the databases.

- One of the biggest design decisions was the handling of shopping cart data. I have taken the decision to pass shopping cart data around instead of on rootscope
a. post to a temporary database
b. emiting/ broadcasting data
c. passing through state params
d. writing it to a service

  While writing to the rootscope is often a bad idea, I took into consideration how this is an ecommerce site, and cart data would definitely be pertinent to every corner and possible extensions of the site.

  I decided against putting it into a database because of the nature of an ecommerce site, users will continuously add and remove items from their shopping cart. This will happen multiple times in a short period of time. Getting and posting this data from the database would hence be inefficient, slow, and costly.

  Writing it to the rootscope was definitely an easier implementation as opposed to passing state params. passing through state params would require the app to no longer be a single page.

  While writing data to a service is a good practice to share data, a service that purely sends cart data around was not a preferrable domain design.

- Another major decision was to put the vouchers in a database. The reason for this was for extensibility reasons (writing/ changing/ updating said data would be more efficient on the database). And the responsibility of updating and maintaing such data should definitely be separated from the code base. Any change to voucher logic (given it follows basic paramters of having a discount and a requirement) would not affect the code base, and changes can be easily extended via the domain.

- I have taken an active decision to not minify and uglify the js files on production as I wanted you to be able to inspect the code easily.

- The front end structure was created to mimic the domain design as close as possible.

  The concerns I have taken with front end was definitely to make it reponsive.

  Simple colour and text differences were used to call out to important information & associated colours (pink) with call to action

---
###   4. Acceptance Criteria Decisions

I have implemented all of the acceptance criteria with a slight ammendment to #6. Instead of an alert, I want to exercise my duty as a consultant to advise on this. I have hence implemented a solution that results in the same end (users not able to add non eligible vouchers) but instead of showing it to them, i do not display the information in the first place. This would definitely improve user experience and smoothen the user journey.
