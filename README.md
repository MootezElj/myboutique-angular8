# My-Boutique-Angular 1.0

My-boutique is an angular 8 app, it is the front-end of the **[my-boutique-microservice](https://github.com/MootezElj/my-boutique-microservice-back-end)** spring-boot app based on **Nebrass Lamouchi**'s book "**[Playing with Java Microservices on Kubernetes and OpenShift](https://leanpub.com/playing-with-java-microservices-on-k8s-and-ocp)**". In this documentation we will run the microservices and the angular application.

**These are some of the application's pages:**

###### Home Page

------

<img src="https://i.postimg.cc/dV1W1BMw/Home1.png"     alt="Markdown Monster icon"     style="float: left; margin-right: 10px;" />

###### Product List

<img src="https://i.postimg.cc/MKXZmCVB/Product-list4.png"     alt="Markdown Monster icon"     style="float: left; margin-right: 10px;" />


### <a name="features"></a> Features:

An online shopping app that lets users navigate through products in different departments, give reviews and add them to their carts before ordering them and updating their billing information.

### <a name="covered-functionalities"></a> Covered functionalities:

* Users login/register.

* Secure route navigation (via role based routing).

* Huge range of existing departments, categories and products lets you have a clear idea of the application's aspects.

* Users can add products to their carts and update their billing informations (Country, Address, Postal code ...).

* Logged-in users can add review on any product.

* Anonymous cart: When you are navigating through the app without being logged in and you add a product to your cart, a jwt-token containing the id of your newly created cart will be stored in your browser's application scope and after logging-in you will have your customer-id updated in the cart that you had created with all the products in it.

  

> #### Note
>
> Payment procedure is not included in the app. which means the client only gets to update his billing information without the actual payment being processed.



### Table of contents

------

* ##### [Features](#features)

* ##### [Covered functionalities](#covered-functionalities)

* ##### [Requirements](#requirements)

* ##### [Installation](#installation)

  ##### [I. Back-End environment setup:](#back-end-environment-setup)

  ###### 			[1. Create database schema and insert data](#db-setup)

  ###### 			[2. Run microservices](#run-ms)

  ##### [II. Run angular app](#run-angular) 

* ##### [Important notes](#important)

* ###### [Credits](#credits)

* ##### [License](#license)

------



### <a name="requirements"></a>Requirements

* Java 8.

* Mysql server (I'm using v8) and mysql-connector-java8.

* Node.Js (*10.x or 12.x which I'm using* )

* Git.

  

------

### <a name="installation"></a> Installation

First you have to clone the app. Go to your projects's folder or create one and run the following commands:

``` bash
$ git clone https://github.com/MootezElj/my-boutique1.0-angular-with-spring-microservices.git
$ cd my-boutique1.0-angular-with-spring-microservices
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



Since we have a deployed .jar microservices that are configured to use mysql databases with the root account and without a password, we have to make sur that you don't have a password for your root account.

Try login-in to mysql with the root profile and without password:

```bash
$ mysql -u root
```

-----

If you get an error run  this:

``` bash
$ mysql -u root -p
```

type your password and hit enter.

after logging in to mysql run the following:

```mysql
> UPDATE mysql.user SET authentication_string=null WHERE User='root';
> FLUSH PRIVILEGES;
> exit;
```

After removing the root password re-login to mysql running the command:

``` bash
$ mysql -u root
```

----



> ###### Important ! 
>
> Before continuing make sure you are in the main folder (**my-boutique1.0-angular-with-spring-microservices**) when logging-in. running the following scripts in the wrong location will make errors. 



After successfully logging we must execute the sql scripts for each database (4).

```mysql
> source sql/product-service-db.sql
> source sql/customer-service-db.sql
> source sql/order-service-db.sql
> source sql/jwt-service-db.sql
```

``` mysql
> show databases;
```

You must notice the 4 databases that we just created, if not you made a mistake running the scripts, or you are in the wrong path.

If you had successfully created the databases exit mysql:

```mysql
> exit;
```



##### <a name="run-ms"></a>2. Run microservices:

We have to run the spring microservices in order to make our operations on the database with our application.

> ###### Important ! 
>
> Before continuing make sure you are in the main folder (**my-boutique1.0-angular-with-spring-microservices**) . running the following scripts in the wrong location will make errors. 

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
$ cd my-boutique-angular8
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
2. There is another repository where I used Docker and kubernetes to run the microservices ([repo_link](https://github.com/MootezElj/my-boutique-kubernetes)). Since this documentation is aimed at the front-end app, I just wanted to keep things as simple as possible.

------

### <a name="credits"></a>Credits:

The back-end used by our angular application is an altered version of the main [app](https://github.com/MootezElj/my-boutique-kubernetes) (A lot of technical functionalities are not implemented in this app, I wanted to keep things simple ) that was developed after following and understanding [Nebras Lammouchi](https://blog.nebrass.fr/about/)'s book [Playing with Java Microservices on Kubernetes and OpenShift](https://leanpub.com/playing-with-java-microservices-on-k8s-and-ocp). So I just thought that he must be credited for his work.

### <a name="license"></a>License:

This code (images included) is open-source, you may use it as you like but I'm not responsible of the way you use the code.









