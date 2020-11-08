# TBotFE

# AWSPOC tBot
A serverless web application hosted on AWS infrastructure. Components used.<br>
1: AWS RDS - Hosting a MarisDB instance. 
2: AWS Lambda - Creates a connection with RDS instance and executes a simple select request.
3: AWS API Gateway - Provides a REST API interface to the lambda function.
4: S3 Bucket - Hosts the static HTML files for the web portal.
5: Angular 10 - Creates the distribution package that goes inside the S3 bucket. 6: Java 1.8 - Used in the Lambda function

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
