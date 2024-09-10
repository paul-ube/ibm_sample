let userRole = "admin";
let accessLevel;



if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);


2
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);


let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Practice Task
const orgName = "Dietary Services";
let accessTypeMessage;
let addOn;

let person = "Employee";

switch (person) {
    case "Employee":
        accessTypeMessage = `Authorized to have access to ${orgName}`;
        break;
    case "Enrolled Member":
        accessTypeMessage = `Authorized to have access to ${orgName} and one-on-one interaction with a dietician.`;
        break;
    case "Subscriber":
        accessTypeMessage = `A partial access to facilitate ${orgName} only.`;
        break;
    case "Non-Subscriber":
    default:
        accessTypeMessage = "Need to enroll or at least subscribe first to avail this facility";
}

console.log("Access Type:", accessTypeMessage);