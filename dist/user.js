//menu

const menuDashboard = document.getElementById("dashboards");
const optionDashboard = document.getElementById("option-my-dashboard");
menuDashboard.addEventListener("click", function () {
  document.getElementById("option-my-dashboard").classList.toggle("hidden");
});

const downDashboard = document.querySelector("#dashboards");
const iconDashboard = document.querySelector("#icon-my-dashboard");

downDashboard.addEventListener("click", function () {
  // Kiểm tra lớp của biểu tượng và thay đổi nó
  if (iconDashboard.classList.contains("fa-chevron-right")) {
    iconDashboard.classList.remove("fa-chevron-right");
    iconDashboard.classList.add("fa-chevron-down");
  } else {
    iconDashboard.classList.remove("fa-chevron-down");
    iconDashboard.classList.add("fa-chevron-right");
  }
});

const layout = document.getElementById("layouts");
const optionLayout = document.getElementById("option-layouts");

layout.addEventListener("click", function(){
  document.getElementById("option-layouts").classList.toggle("hidden");
});

const downLayout = document.querySelector("#layouts");
const iconLayout = document.querySelector("#icon-layouts");

downLayout.addEventListener("click", function () {
  if (iconLayout.classList.contains("fa-chevron-right")) {
    iconLayout.classList.remove("fa-chevron-right");
    iconLayout.classList.add("fa-chevron-down");
  } else {
    iconLayout.classList.remove("fa-chevron-down");
    iconLayout.classList.add("fa-chevron-right");
  }
});

const frontPage = document.getElementById("front-pages");
const optionFrontPage = document.getElementById("option-front-pages");

frontPage.addEventListener("click", function(){
  document.getElementById("option-front-pages").classList.toggle("hidden");
});

const iconFrontPage = document.querySelector("#icon-front-pages");

frontPage.addEventListener("click", function () {
  if (iconFrontPage.classList.contains("fa-chevron-right")) {
    iconFrontPage.classList.remove("fa-chevron-right");
    iconFrontPage.classList.add("fa-chevron-down");
  } else {
    iconFrontPage.classList.remove("fa-chevron-down");
    iconFrontPage.classList.add("fa-chevron-right");
  }
});

const eCommerce = document.getElementById("eCommerce");
const optioneCommerce = document.getElementById("option-eCommerce");

eCommerce .addEventListener("click", function(){
  document.getElementById("option-eCommerce").classList.toggle("hidden");
});

const iconeCommerce = document.querySelector("#icon-eCommerce");

eCommerce.addEventListener("click", function () {
  if (iconeCommerce.classList.contains("fa-chevron-right")) {
    iconeCommerce.classList.remove("fa-chevron-right");
    iconeCommerce.classList.add("fa-chevron-down");
  } else {
    iconeCommerce.classList.remove("fa-chevron-down");
    iconeCommerce.classList.add("fa-chevron-right");
  }
});

const academy = document.getElementById("academy");
const optionAcademy = document.getElementById("option-academy");

academy.addEventListener("click", function(){
  document.getElementById("option-academy").classList.toggle("hidden");
});

const iconAcademy = document.querySelector("#icon-academy");

academy.addEventListener("click", function () {
  if (iconAcademy.classList.contains("fa-chevron-right")) {
    iconAcademy.classList.remove("fa-chevron-right");
    iconAcademy.classList.add("fa-chevron-down");
  } else {
    iconAcademy.classList.remove("fa-chevron-down");
    iconAcademy.classList.add("fa-chevron-right");
  }
});

const logistic = document.getElementById("logistics");
const optionLogistic = document.getElementById("option-logistics");

logistic.addEventListener("click", function(){
  document.getElementById("option-logistics").classList.toggle("hidden");
});

const iconLogistic = document.querySelector("#icon-logistics");

logistic.addEventListener("click", function () {
  if (iconLogistic.classList.contains("fa-chevron-right")) {
    iconLogistic.classList.remove("fa-chevron-right");
    iconLogistic.classList.add("fa-chevron-down");
  } else {
    iconLogistic.classList.remove("fa-chevron-down");
    iconLogistic.classList.add("fa-chevron-right");
  }
});

const invoice = document.getElementById("invoice");
const optioninvoice = document.getElementById("option-invoice");

invoice.addEventListener("click", function(){
  document.getElementById("option-invoice").classList.toggle("hidden");
});

const iconinvoice = document.querySelector("#icon-invoice");

invoice.addEventListener("click", function () {
  if (iconinvoice.classList.contains("fa-chevron-right")) {
    iconinvoice.classList.remove("fa-chevron-right");
    iconinvoice.classList.add("fa-chevron-down");
  } else {
    iconinvoice.classList.remove("fa-chevron-down");
    iconinvoice.classList.add("fa-chevron-right");
  }
});

const users = document.getElementById("users");
const optionusers = document.getElementById("option-users");

users.addEventListener("click", function(){
  document.getElementById("option-users").classList.toggle("hidden");
});

const iconusers = document.querySelector("#icon-users");

users.addEventListener("click", function () {
  if (iconusers.classList.contains("fa-chevron-right")) {
    iconusers.classList.remove("fa-chevron-right");
    iconusers.classList.add("fa-chevron-down");
  } else {
    iconusers.classList.remove("fa-chevron-down");
    iconusers.classList.add("fa-chevron-right");
  }
});

const roles = document.getElementById("roles");
const optionroles = document.getElementById("option-roles");

roles.addEventListener("click", function(){
  document.getElementById("option-roles").classList.toggle("hidden");
});

const iconroles = document.querySelector("#icon-roles");

roles.addEventListener("click", function () {
  if (iconroles.classList.contains("fa-chevron-right")) {
    iconroles.classList.remove("fa-chevron-right");
    iconroles.classList.add("fa-chevron-down");
  } else {
    iconroles.classList.remove("fa-chevron-down");
    iconroles.classList.add("fa-chevron-right");
  }
});

const pages = document.getElementById("pages");
const optionpages = document.getElementById("option-pages");

pages.addEventListener("click", function(){
  document.getElementById("option-pages").classList.toggle("hidden");
});

const iconpages = document.querySelector("#icon-pages");

pages.addEventListener("click", function () {
  if (iconpages.classList.contains("fa-chevron-right")) {
    iconpages.classList.remove("fa-chevron-right");
    iconpages.classList.add("fa-chevron-down");
  } else {
    iconpages.classList.remove("fa-chevron-down");
    iconpages.classList.add("fa-chevron-right");
  }
});

const userprofile = document.getElementById("authentications");
const optionuserprofile = document.getElementById("option-user-profile");

userprofile.addEventListener("click", function(){
  document.getElementById("option-user-profile").classList.toggle("hidden");
});

const iconuserprofile = document.querySelector("#icon-user-profile");

userprofile.addEventListener("click", function () {
  if (iconuserprofile.classList.contains("fa-chevron-right")) {
    iconuserprofile.classList.remove("fa-chevron-right");
    iconuserprofile.classList.add("fa-chevron-down");
  } else {
    iconuserprofile.classList.remove("fa-chevron-down");
    iconuserprofile.classList.add("fa-chevron-right");
  }
});

const authentication = document.getElementById("authentications");
const optionauthentication = document.getElementById("option-authentications");

authentication.addEventListener("click", function(){
  document.getElementById("option-authentications").classList.toggle("hidden");
});

const iconauthentication = document.querySelector("#icon-authentications");

authentication.addEventListener("click", function () {
  if (iconauthentication.classList.contains("fa-chevron-right")) {
    iconauthentication.classList.remove("fa-chevron-right");
    iconauthentication.classList.add("fa-chevron-down");
  } else {
    iconauthentication.classList.remove("fa-chevron-down");
    iconauthentication.classList.add("fa-chevron-right");
  }
});

const wizard = document.getElementById("wizard");
const optionwizard = document.getElementById("option-wizard");

wizard.addEventListener("click", function(){
  document.getElementById("option-wizard").classList.toggle("hidden");
});

const iconwizard = document.querySelector("#icon-wizard");

wizard.addEventListener("click", function () {
  if (iconwizard.classList.contains("fa-chevron-right")) {
    iconwizard.classList.remove("fa-chevron-right");
    iconwizard.classList.add("fa-chevron-down");
  } else {
    iconwizard.classList.remove("fa-chevron-down");
    iconwizard.classList.add("fa-chevron-right");
  }
});

const cards = document.getElementById("cards");
const optioncards = document.getElementById("option-cards");

cards.addEventListener("click", function(){
  document.getElementById("option-cards").classList.toggle("hidden");
});

const iconcards = document.querySelector("#icon-cards");

cards.addEventListener("click", function () {
  if (iconcards.classList.contains("fa-chevron-right")) {
    iconcards.classList.remove("fa-chevron-right");
    iconcards.classList.add("fa-chevron-down");
  } else {
    iconcards.classList.remove("fa-chevron-down");
    iconcards.classList.add("fa-chevron-right");
  }
});

const userinterface = document.getElementById("user-interface");
const optionuserinterface = document.getElementById("option-user-interface");

userinterface.addEventListener("click", function(){
  document.getElementById("option-user-interface").classList.toggle("hidden");
});

const iconuserinterface = document.querySelector("#icon-user-interface");

userinterface.addEventListener("click", function () {
  if (iconuserinterface.classList.contains("fa-chevron-right")) {
    iconuserinterface.classList.remove("fa-chevron-right");
    iconuserinterface.classList.add("fa-chevron-down");
  } else {
    iconuserinterface.classList.remove("fa-chevron-down");
    iconuserinterface.classList.add("fa-chevron-right");
  }
});






const tab1Button = document.getElementById("but1");
const tab2Button = document.getElementById("but2");
const tab3Button = document.getElementById("but3");
const tab4Button = document.getElementById("but4");
const tab1Content = document.getElementById("profile");
const tab2Content = document.getElementById("teams");
const tab3Content = document.getElementById("projects");
const tab4Content = document.getElementById("connections");


// Bắt sự kiện click trên button 1
tab1Button.addEventListener("click", function () {
    // Ẩn nội dung tab 2
    tab2Content.style.display = "none";
    tab3Content.style.display = "none";
    tab4Content.style.display = "none";


    
    // Hiển thị nội dung tab 1
    tab1Content.style.display = "block";
});

// Bắt sự kiện click trên button 2
tab2Button.addEventListener("click", function () {
    // Ẩn nội dung tab 1
    tab1Content.style.display = "none";
    tab3Content.style.display = "none";
    tab4Content.style.display = "none";

    
    // Hiển thị nội dung tab 2
    tab2Content.style.display = "block";
});

tab3Button.addEventListener("click", function () {
  // Ẩn nội dung tab 1
  tab1Content.style.display = "none";
  tab2Content.style.display = "none";
   tab4Content.style.display = "none";
  
  // Hiển thị nội dung tab 2
  tab3Content.style.display = "block";
});

tab4Button.addEventListener("click", function () {
  // Ẩn nội dung tab 1
  tab1Content.style.display = "none";
  tab2Content.style.display = "none";
  tab3Content.style.display = "none";
  
  // Hiển thị nội dung tab 2
  tab4Content.style.display = "block";
});