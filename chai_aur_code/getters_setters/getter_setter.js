class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this.remail.toLowerCase();
  }
  set email(value) {
    this.remail = value;
  }
  get password() {
    return this.Ppassword.toUpperCase();
  }
  set password(value) {
    this.Ppassword = value;
  }
}

const rohan = new User("rohan@google.com", "rohanaj");

console.log(rohan.email, rohan.password);
