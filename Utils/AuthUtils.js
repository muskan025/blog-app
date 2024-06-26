const validator = require("validator");

const cleanUpAndValidate = ({ name, username, email, password,bio,niche }) => {
  return new Promise((resolve, reject) => {
    if (!email || !name || !username || !password)
      reject("Missing Credentials");

    if (typeof username !== "string") reject("Username is not a string");

    if (typeof password !== "string") reject("Password is not a string");

    if (typeof name !== "string") reject("Name is not a string");

    if (typeof bio !== "string") reject("Bio is not a string");

    if (bio.length < 20) {
      reject("Your bio is too short");
    }
    if (bio.length > 255) {
      reject("Character length exceeded");
    }

    if (typeof niche !== "string") reject("niche is not a string");

    if (username.length <= 2 || username.length > 50)
      reject("Username length should be 3-50 char");

    if (!validator.isEmail(email)) reject("Invalid Email format");

    resolve();
  });
};

const loginValidation = ({loginId ,password})=>{
  return new Promise((resolve,reject)=>{
    if(!loginId)
    reject("loginId missing")
  if(!password){
    reject("Password missing")
  }
  
    resolve();
  })
}

module.exports = { cleanUpAndValidate, loginValidation };