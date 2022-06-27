#about
its a simple e-commerce website.

# Code dependency
i added bootstrap and font-awesome

# Project
*****components*****
there are 6 components <br>
header to put in the header of the website<br>
pitem is every individual product data<br>
plist which is all my products in a list (a list of pitem)<br>
pitemextra which have some extra attributes for my products<br>
cart every product the user adds go there and it has form validation for purchases<br>
and finally a conform page that conforms that the purchase is successful<br>
<br>
*services*<br>
i have 3 services<br>
gdata gets the data from the json file (backend) to any components that needs it<br>
item-bridge i used this to transfer data from pitem to pitemextra cause they are the same components with just some extra values<br>
tocart which i used to transform products from their pages to the cart cause there are no parent/child relation between them<br>



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
