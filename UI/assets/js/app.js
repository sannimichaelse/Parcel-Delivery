/*****************************************************************
                  VALIDATION FOR LOGIN
******************************************************************/

const validateLogin = () => {
  location.href = "dashboard.html";
};

let login = document.getElementById("buttonSubmit");
if (login) login.addEventListener("click", validateLogin);

/*****************************************************************
                  END OF VALIDATION FOR LOGIN
******************************************************************/

/*****************************************************************
                  VALIDATION FOR SIGNUP
******************************************************************/

const validateSignup = () => {
  console.log("hello");

  location.href = "dashboard.html";
};

let signup = document.getElementById("signupSubmit");

if (signup) signup.addEventListener("click", validateSignup);

/*****************************************************************
                  END OF VALIDATION FOR SIGNUP
******************************************************************/

/*****************************************************************
                  VALIDATION FOR REQUEST
******************************************************************/

const validateRequest = () => {
  location.href = "dashboard.html";
};

let request = document.getElementById("requestSubmit");

if (request) request.addEventListener("click", validateRequest);

/*****************************************************************
                  END OF VALIDATION FOR REQUEST
******************************************************************/

/*****************************************************************
                NEW REQUESTS
******************************************************************/
const newRequestt = () => {
  console.log("hello");
  location.href = "dashboard.html";
};

let newRequest = document.getElementById("newRequest");

if (newRequest) newRequest.addEventListener("click", newRequestt);

document.getElementById("showDetails").addEventListener("click", () => {
  location.href = "details.html";
});
