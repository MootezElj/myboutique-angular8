# My-Boutique-Angular 1.0

My-boutique is an angular 8 app, it is the front-end of the [my-boutique-microservice](https://github.com/MootezElj/my-boutique-microservice-back-end) spring-boot app based on Nebras Lammouchi's book Playing with ... . In this documentation we will run the microservices and the angular application. microservice repo [here]().



### <a name="features"></a> Features:

An online shopping app that lets users navigate through products in different departments, give reviews and add them to their carts before ordering them and updating their billing information.

### <a name="covered-functionalities"></a> Covered functionalities:

* Users login/register.

* Secure route navigation (via role based routing).

* Huge range of existing departments, categories and products lets you have a clear idea of the application's aspects.

* Users can add products to their carts and update their billing informations (Country, Address, Postal code ...).

* Logged-in users can add review on any product.

* Anonymous cart: When you are navigating the app without being logged in and you add a product to your cart, a jwt-token containing the id of your newly created cart will be stored in your browser's application scope and after logging-in you will have your customer-id updated in the cart that you had created with all the products in it.

  

> #### Note
>
> Payment procedure is not included in the app. which means the client only gets to update his billing information without the actual payment being processed.



### Table of contents

------

* ##### [Features](#features)

* ##### [Covered functionalities](#covered-functionalities)

* ##### [Requirements](#requirements)

* ##### [Installation](#Installation)

  ##### [I. Back-End environment setup:](#back-end-environment-setup)

  ###### 		[1. Create database schema and insert data](#db-setup)

  ###### 		[2. Run microservices](#run-ms)

  ##### [II. Run angular app](#run-angular) 

* ##### [Important notes](#important)

* ##### [License](#license)

------



### <a name="requirements"></a>Requirements

* Java 8.

* Mysql.

* Node.Js (*10.x or 12.x which I'm using* )

* Git.

  

------

### <a name="installation"></a> Installation

First you have to clone the app. Go to your projects's folder or create one and run the following commands:

``` bash
$ git clone https://github.com/MootezElj/my-boutique-angular-with-spring-microservices.git
$ cd myboutique-angular8
```

#### <a name="back-end-environment-setup"></a> I. Back-End environment setup:

We need to make our environment suitable for running our application. I wont show you how to install java or Mysql (you can check google and it's not our goal for this project).

However since we have an angular application I decided to integrate some fundamental parts of installations.

##### <a name="db-setup"></a> 1. Create database schema and insert data:

We are going to create the following databases with all the data needed to test the app:

* jwt-service-db
* order-service-db
* product-service-db
* customer-service-db

Login to mysql with the root profile:

```bash
$ mysql -u root
```

for me the root  user I have no password if you have password just add ``` -p yourPassword``` to the previous command and replace 'yourPassword' with your password.



> ###### Important ! 
>
> Make sure you are in the main folder (**my-boutique-angular-with-spring-microservices**) when logging-in. running the following scripts in the wrong location will make errors. 



After successfully logging we must execute the sql scripts for each database (4).

```mysql
> source sql/product-service-db.sql
> source sql/customer-service-db.sql
> source sql/product-service-db.sql
> source sql/jwt-service-db.sql
```



##### <a name="run-ms"></a>2. Run microservices:

We have to run the spring microservices in order to make our operations on the database with our application.

For the config and discovery service run them in the following order:

1. ``` bash
   $ java -jar my-boutique-microservices/config-server-1.0.jar
   ```

   Wait for the config server to finish the execution so that the discovery-service can fetch its config. Then run this:

2. ``` bash
   $ java -jar my-boutique-microservices/discovery-service-1.0.jar
   ```

   For the rest the order of execution doesn't really matter. Just run the following:

   ``` bash
   $ java -jar my-boutique-microservices/product-service-1.0.jar
   ```

   ``` bash
   $ java -jar my-boutique-microservices/jwt-zuul-service-1.0.jar
   ```

   ```bash
   $ java -jar my-boutique-microservices/order-service-1.0.jar
   ```

   ``` bash
   $ java -jar my-boutique-microservices/customer-service-1.0.jar
   ```


Open your browser and navigate to http://localhost:8761/, you should see all the microservices running except the config-server and the discovery-service itself.

> If there is a missing service you have surely made a mistake running or downloading the service.

#### <a name="run-angular"></a>II. Run angular app:

The next step is to install angular command line interface.

``` bash
$ npm install -g @angular/cli 
```

Then navigate to the angular app:

```  bash
$ cd ../myboutique-angular8
```

Then just locally update the project's dependencies using this command:

``` bash
$ npm install
```

Finally run the app and wait for it to be opened in your browser.

``` bash
$ ng serve --open
```

The app should run in your default browser and you are now able to use it.



------

### <a name="important"></a>Important notes:

1. In this app I focused on implementing the functionalities of the back-end. Since I'm not familiar with security in angular apps I have to note that **There are probably security vulnerabilities** that can be used by people to steal informations from users or hack the application if deployed. So be careful on how to use the app.

2. I want to re-mention that you have to run the back-end application in order for this application to run.

   

------

### <a name="License"></a>License:

This code (images included) is open-source, you may use it as you like but I'm not responsible of the way you use the code.
