# Invoicr

## How to run
1. Install dependencies by running `npm i`
2. Start the app in development mode by running `npm run start`
3. App should start on localhost:3000

## Priorities
When I was doing this take-home, I had a few main focuses in terms of priorities. Structure, Critical Features and Code Reusibility / Robustness.

### Critical Features
I wanted to implement features that were critical to the function of the application. Since Invoicr's purpose is to allow a user to view invoices, the features I prioritized were viewing the list of invoices and viewing a specific invoice. I wanted to implement these two functionalities close to what the design showed as it had all the necessary information that a user would need for an invoice.

I then determined a few secondary features that aren't critical but would make the app experience much better. Things such as styling and responsiveness were implemented in the buttons and throughout the app. The app header / logo also gives the app some spacing. The search functionality also provides filtering which can help users find a specific invoice (filters by invoice number and/or status).

### Structure
Structure refers to things like repo structure, url structure, etc... I believe structure is very important because when a project scales, things can quickly get unorganized and messy if the structure is not well thought out. The repo is structured in terms of pages with components and styles used in them. I also implemented routing to the app for the two separate pages to introduce structure and flow. The details page assumes the invoice in the url subpath and expects an id to query a specific invoice.

### Code Reusibility / Robustness
Reusability prevents tedious and unnecessary work in the future and robustness prevents potential disasters. For logic like fetching and filtering invoices, I tackled it from the perspective that it might be used in a separate page or component in the future. To make the logic for those things reusable, I encapsulated them in custom hooks so that they could be used anywhere. I also wanted to make sure the hooks exported loading status as well for UI responsiveness. For robustness I integrated Typescript and properly typed most things - Typescript was very useful since it complains about all the edge cases that might happen (e.g., null or undefined values) and forces you to take care of them. I also considered that fetching invoices could result in error and exposed the error in the hook for consumers to display the error message.

## Assumptions
Some assumptions I made:
- Invoices are fetched through an actual network call and could potentially result in an error
- Mobile responsiveness and different screen sizes are not a requirement
- There is proper unit testing
- Accessibility is not a requirement for now

## Future improvements I would make
- I would use style libraries such as:
  - [styled-components](https://styled-components.com/) – Styled components is useful if you take advantage of its versatility. It is a lot more bare and customizable than your typical style library which allows for big custom UI libraries. I feel like it is unnecessary if the app is small in scale and UI components are not modular and don't need to be reusable. I like styled-components since it tightly couples styles to a component and also makes reading the JSX much more comprehensible because of naming.
  - [styled-system](https://styled-system.com/) – Would have been nice to use something like styled-systems to determine breakpoints for mobile responsiveness, as well as being able to easily use their Box api instead of defining flex boxes with classes.
  - CSS libraries like Tailwind or Bootstrap would have also been nice as it can do what styled-system does but through classes. CSS libraries seem to be useful for smaller scale projects but classes can get overwhelming when you chain too many
- I would implement proper unit testing with Jest and Enzyme for components – setting up tests and testing components takes a lot of time (sometimes even more than creating the component) but it has big benefits to make sure everything works as intended
- Consider different screen sizes – since many webapps are now used on mobile and other devices it would be nice to consider designing and implementing proper layout for different devices
- Accessibility – I would like to accomodate for users that use screen readers to make the app more accessible. Adding things like aria-labels, focus states, and semantic HTML all help screen readers comprehend the pages
- Other desired features
  - Sorting invoices
  - Downloading invoice as PDF or CSV
