/* Define the Teacher interface */
interface Teacher {
    /* firstName is a required string */
    firstName: string;
    /* lastName is a required string */
    lastName: string;
    /* fullTimeEmployee is a required boolean */
    fullTimeEmployee: boolean;
    /* yearsOfExperience is an optional number */
    yearsOfExperience?: number;
    /* location is a required string */
    location: string;
    /* Any additional properties can be added to the object */
    /* where the property name is a string and the value can be of any type */
    [key: string]: any;
}

/* Create an object that implements the Teacher interface */
const teacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'New York',
    contract: true
}

/* Output the entire teacher object to the console */
console.log(teacher);
