interface User{
    username:string,
    role:string
};
 
interface Admin{
    username_A:string,
    role_A:string
};
 
type AdminUser = Admin & User;
 
function printOutput(adminUser : AdminUser) : void{
    console.log("User Username : " + adminUser.username + " and User Role : " + adminUser.role);
    console.log("Admin Username : " + adminUser.username_A + " and Admin Role : " + adminUser.role_A);
};
 
const adminUser: AdminUser = {
    username: "Sannidhi",
    role: "Trainee",
    username_A: "Hemraj",
    role_A: "Mentor"
};
 
printOutput(adminUser);