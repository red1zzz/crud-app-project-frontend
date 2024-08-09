Website Instructions: This server is running at localhost:3000

This Website Will Be Very Basic, Has no CSS added because i did not have enough Time due to lots of troubleshooting with the server and figuring out docker

- The Home Button - Will Be the Button to direct you straight to the home button

- Login- If you made an account you will be able to click this link and it will direct you to input your username and password to login.

- Once you login you will be able to Add Items and also delete items, 

- Once you click the Add New Item it will direct you from left to right to input: Name the Item -> The Description of Item -> Quantity of the Item. Afterwards you can save 

  that item by pressing the "Create Item Button"

- If you dont have an account you can click the "Register button" which will direct you to make one. Where you can input your Username, PW, First,Last Name








Notes:

- I am not sure if it will be an issue when pulling this from github, but I have the docker-compose.yml saved to my main directory called crud-app-project-z, but I only pushed the crud-app-project-z: frontend and crud-app-project-z: backend. It should automatically build it when you do docker-compose up though, but just a note. 


- I have created a folder called components that will break down each of the function to be easier to disect for App.js
- Component Details is as follows:
- itemDetails.js: This component will display the details of an item based of a single item it is pulling from the backend routeItems.js
- itemForm.js: This component is intended to be able to make a new item or edit any existing ones
- itemList.js: This component will be used for fetching and displaying all items. 
- Login.js: This component as said on the name will be dealing with user login.
  - Should allow you to enter username and password
  - Store authentication
  - Handle form submission
- Navbar.js: Component will be for navigation links and handling logout 
- Register.js: Component will be for registrations on the site. 

