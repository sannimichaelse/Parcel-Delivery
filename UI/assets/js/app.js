const validateLogin = () => {
  location.href = "dashboard.html";
};

let login = document.getElementById("buttonSubmit");
if (login) login.addEventListener("click", validateLogin);

const validateSignup = () => {
  console.log("hello");

  location.href = "dashboard.html";
};

const validateRequest = () => {
  location.href = "dashboard.html";
};

document.getElementById("showDetails").addEventListener("click", () => {
  location.href = "details.html";
});

function getStatus(element) {
  switch (element) {
    case "one":
      let status = document.getElementById("statusOne");
      let statusValue = status.options[status.selectedIndex].value;
      switch (statusValue) {
        case "canceled":
          document.getElementById(
            "one"
          ).innerHTML = `<span style="color:red;font-weight:bold">Canceled</span>`;
          break;
        case "progress":
          document.getElementById(
            "one"
          ).innerHTML = `<span style="color:orange;font-weight:bold;">Processing</span>`;
          break;
        case "delivered":
          document.getElementById(
            "one"
          ).innerHTML = `<span style="color:green;font-weight:bold">Delivered</span>`;
          break;
        default:
          document.getElementById(
            "one"
          ).innerHTML = `<span style="color:black">Select Status</span>`;
          break;
      }
    case "two": {
      let status = document.getElementById("statusTwo");
      let statusValue = status.options[status.selectedIndex].value;
      switch (statusValue) {
        case "canceled":
          document.getElementById(
            "two"
          ).innerHTML = `<span style="color:red;font-weight:bold">Canceled</span>`;
          break;
        case "progress":
          document.getElementById(
            "two"
          ).innerHTML = `<span style="color:orange;font-weight:bold;">Processing</span>`;
          break;
        case "delivered":
          document.getElementById(
            "two"
          ).innerHTML = `<span style="color:green;font-weight:bold">Delivered</span>`;
          break;
        default:
          document.getElementById(
            "two"
          ).innerHTML = `<span style="color:black">Select Status</span>`;
          break;
      }
    }
    case "three": {
      let status = document.getElementById("statusThree");
      let statusValue = status.options[status.selectedIndex].value;
      switch (statusValue) {
        case "canceled":
          document.getElementById(
            "three"
          ).innerHTML = `<span style="color:red;font-weight:bold">Canceled</span>`;
          break;
        case "progress":
          document.getElementById(
            "three"
          ).innerHTML = `<span style="color:orange;font-weight:bold;">Processing</span>`;
          break;
        case "delivered":
          document.getElementById(
            "three"
          ).innerHTML = `<span style="color:green;font-weight:bold">Delivered</span>`;
          break;
        default:
          document.getElementById(
            "three"
          ).innerHTML = `<span style="color:black">Select Status</span>`;
          break;
      }
    }
    case "four": {
      let status = document.getElementById("statusFour");
      let statusValue = status.options[status.selectedIndex].value;
      switch (statusValue) {
        case "canceled":
          document.getElementById(
            "four"
          ).innerHTML = `<span style="color:red;font-weight:bold">Canceled</span>`;
          break;
        case "progress":
          document.getElementById(
            "four"
          ).innerHTML = `<span style="color:orange;font-weight:bold;">Processing</span>`;
          break;
        case "delivered":
          document.getElementById(
            "four"
          ).innerHTML = `<span style="color:green;font-weight:bold">Delivered</span>`;
          break;
        default:
          document.getElementById(
            "four"
          ).innerHTML = `<span style="color:black">Select Status</span>`;
          break;
      }
    }
    case "five": {
      let status = document.getElementById("statusFive");
      let statusValue = status.options[status.selectedIndex].value;
      switch (statusValue) {
        case "canceled":
          document.getElementById(
            "five"
          ).innerHTML = `<span style="color:red;font-weight:bold">Canceled</span>`;
          break;
        case "progress":
          document.getElementById(
            "five"
          ).innerHTML = `<span style="color:orange;font-weight:bold;">Processing</span>`;
          break;
        case "delivered":
          document.getElementById(
            "five"
          ).innerHTML = `<span style="color:green;font-weight:bold">Delivered</span>`;
          break;
        default:
          document.getElementById(
            "five"
          ).innerHTML = `<span style="color:black">Select Status</span>`;
          break;
      }
    }
  }
}
