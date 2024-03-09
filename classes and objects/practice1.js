/* Create a class User with 2 properties, name and email.
It also has a method called viewData() that allows user to view website data */

let websiteData = "this is my website data";

class User{
    constructor(name, email) {
        this.name = name,
        this.email = email,
        console.log(websiteData);
    }
    viewData() {
        console.log(this.name),
        console.log(this.email)
    }
}

let user1 = new User("harsh", "harsh@email.com");
user1.viewData();


/* Create a new class called Admin which inherits from User.
Add a new method called editData to Admin that allows it to edit website data */

class Admin extends User {
    constructor(name, email) {
        super(name, email)
    }
    editData() {
        websiteData = "this is the updated data on website";
    }
}

let admin1 = new Admin("admin1", "admin1@email.com");
admin1.editData();
console.log(websiteData);