##Tiffanie Chia for Deloitte Digital (London)
http://dress-code-deloitte-digital.herokuapp.com/

##Contents
1. Architectural Design Decisions
2. Domain Design Decisions
3. Application Design Decisions
4. Acceptance Criteria Decisions
5. How to run this application
6. Deloitte Digital Tech Test (For Reference)
---
### 1. Architecture Design
 I have chosen a MEAN stack to build this application. While I have not used 3/4 of the technology stack, I believe in using the right tools for the job. My main concerns when I was choosing the tech stack were of extensibility (I wanted technologies that made scaling up a lot easier), accessibility (how easy it is for other developers to step in and build it up), and efficiency (ramping up on given stack should be fast given current knowledge resources).

 #### a. Angular JS (Client side)
 The decision for this stack was guided by Angular. Given that Angular provides powerful two way bindings, it makes this Angular great choicec for applications with a lot of user interactions. The verbose nature of the framework would also allow client side development to be a lot faster, which is a huge consideration for this given task.

 #### b. Node.js + Express.js (Server side)
 Knowing that my client side was going to be written in Javascript, I sought to find a similar language for the server side as well. The reason behind this was because I wanted handovers, onboarding, and extension of this code base to be a lot swifter - a developer with knowledge in Javascript can write both front and back end code, as opposed to having to find a developer proficient in two different languages if client and server sides were written in different languages. This would make ramping up and hiring a lot easier.

 The reason why I chose Express.js as opposed to other frameworks was because of its of how rudimentary it was, a basic knowledge of node is all that is required to ramp up and start building the server side code.

 #### c. MongoDB
 After researching on other databases, MongoDB stood out because of its schemaless approach. This meant scalability and better performance if the database needs to be improved upon which would definitely be a task in the foreseeable future as the app is at its infancy stages and things are just starting to take shape.

Having had to extend a relational database taught me that schemaless databases were definitely less costly in both time, effort, and resources to maintain for both the short run and the long run.

---
### 2.  Domain Design Descisions

I built the application with the SOLID principles in mind. Each domain was thought out to reflect single responsibility, and as much abstraction was made as long as it made sense both business wise and development wise. Each domain could be easily extended upon or removed if need be. I took upmost care in making sure that appropriate encapsulation was in place.

---

### 3. Application Design Decisions

I took strict care in ensuring that the models, services, and controllers contained the appropriate types of logic - wherein controllers were views/business logic, and services strictly fetched from APIs. The biggest design decisions centered mainly around how to handle and/or create data.

#### Main data handling
APIs are implemented in a RESTFUL manner.

A big concern was definitely in database fetching, as that is both costly and time consuming. I tried to minimize database calling as much as possible, preferring to transform data with Angular.

The current struggle given how data has been wired together meant that models were very thin and were not used as the controllers were able to parse the key data given delivered from the services. Given this, I created the models for 1. documentation of how the db works, and 2. for future requirements of posting to the databases.

#### Shopping cart data
 One of the biggest design decisions was the handling of shopping cart data. I have taken the decision to pass shopping cart data around the rootscope instead of
a. post to a temporary database
b. emiting/ broadcasting data
c. passing through state params
d. writing it to a service

  While writing to the rootscope is often frowned upon, I took into consideration how this is an ecommerce site, and cart data would definitely be pertinent to every corner and possible extensions of the site.

  I decided against putting shopping cart data into a database because of the nature of an ecommerce site- users will continuously add and remove items from their shopping cart. This will happen multiple times in a short period of time. Getting and posting this data from the database in such a frequent manner would be inefficient, slow, and costly. Also, this should not affect the base quantity of a product. Understandably if two users added the same product, there would be a conflict in check out because of the data change isn't available in the database. The idea is that a final post request will be made during checkout to check for the products availability prior to payment.

  Writing shopping cart data to the rootscope was definitely an easier implementation as opposed to passing it as a state param. passing through state params would mean the application is no longer a single page application.

  While writing data to a service is a good practice to share common data across controllers, a service that purely sends shopping cart data around was not a preferable domain design given the current scope of the assignment.

  That being said, when the scope increases, putting the cart information on the service would allow for extensibility of this information - for example storage of that information in the cookies, which would be a good design decision.

#### Vouchers database
Another major decision was to put the vouchers information in a database. The reason for this was for extensibility (writing/ changing/ updating said data would be more efficient on the database). And the responsibility of updating and maintaing such data should definitely be separated from the code base. Any change to voucher logic (given it follows basic parameters of having a discount and requirements) would not affect the code base, and changes can be easily extended via the domain.

#### Front end design
The front end structure was created to mimic the domain design as close as possible.

Good care was taken to make it responsive.

Simple color differences were used to call out to important information (key colour green is associated to call to action).

#### Build decisions
I have taken an active decision to not minify and uglify the js files on production for easier inspection on heroku.  

---
###   4. Acceptance Criteria Decisions

I have implemented all of the acceptance criterias with a slight ammendment to #6. I approached this assignment as a consultant , and have decided to advise against this implementation. I have implemented a solution that results in the same end (users not able to apply non eligible vouchers) but instead of showing invalid vouchers to the users and then retracting them, I simply do not display the invalid information in the first place. This would definitely improve user experience and smoothen the user journey.

---
### 5. How to run this application

This application is available on heroku at http://dress-code-deloitte-digital.herokuapp.com

If you wish to view this locally, make sure you have node, npm, bower, mongodb, karma installed.

Before running the server, ensure mongod is running & install all bower and npm dependencies.

```
node server.js
```

To run tests
```
karma start
```


----

###Deloitte Digital Development Test
You’ve been asked to develop a responsive website for a clothing retailer.
The retailer sells six different categories of clothes: women’s footwear, men’s footwear, women’s casualwear, men’s casualwear, women’s formalwear and man’s formalwear.
The page that you develop should display all of the available products, as well as a shopping cart to which they can be added.
The products available are:

(ommitted)
￼
￼￼￼
There are also discount vouchers available that can be redeemed. The discount vouchers are as follows:
- £5.00 off your order
- £10.00 off when you spend over £50.00
- £15.00 off when you have bought at least one footwear item and spent over £75.00

The prioritised list of user stories is as follows:
As a User I can view the products and their category, price and availability information.
-  As a User I can add a product to my shopping cart.
- As a User I can remove a product from my shopping cart.
-  As a User I can view the total price for the products in my shopping
cart.
- As a User I can apply a voucher to my shopping cart.
- As a User I can view the total price for the products in my shopping cart with discounts applied.
- As a User I am alerted when I apply an invalid voucher to my shopping
cart.
- As a User I am unable to Out of Stock products to the shopping cart.

Test Criteria:
We will use this test to assess how well you write code. There is no right or wrong answer. Functional correctness is important, but we will assess your solution holistically.
You should tackle as many of the user stories as you can in priority order. We expect you to spend approximately three hours on this but there is no strict time limit.
There is no restriction on using third party libraries. You may use any technology you feel is appropriate.
You should also feel free to use mocks as appropriate, e.g. you can store product data in a flat file or in a constant, rather than create a database. Please isolate mocked data or services as appropriate.
You will be assessed on the quality of your code, functional correctness and your approach to quality assurance and testing.
Please provide your code in a format that we can build and run on a Mac, e.g. a zip file with the appropriate HTML, CSS and JavaScript resources.
Please include a README file that describes how to build and run the code, and the code layout at a high level to help us understand where to look. Feel free to also describe your approach and your thinking.
