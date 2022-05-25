const studiesButton = document.querySelector("#studies-button");
const sendEmailButton = document.querySelector("#send-email-button");
const sendResumeParagraph = document.querySelector("#send-resume-paragraph");
const aboutMeParagraph = document.querySelector("#about-me-paragraph");
const hobbiesParagraph = document.querySelector("#hobbies-paragraph");
const emotionalLifeParagraph = document.querySelector("#emotional-life-paragraph");
const emailMessage = document.querySelector("#email-message");
const sendEmailForm = document.querySelector(".cv__send-email-form");

function handleStudiesLinkButtonClick() {
  studiesButton.classList.add("cv__link-button_active");
  sendEmailButton.classList.remove("cv__link-button_active");

  sendResumeParagraph.classList.add("cv__paragraph-container_hidden");
  aboutMeParagraph.classList.remove("cv__paragraph-container_hidden");
  hobbiesParagraph.classList.remove("cv__paragraph-container_hidden");
  emotionalLifeParagraph.classList.remove("cv__paragraph-container_hidden");
  emailMessage.classList.add("cv__paragraph-container_hidden");
}

function handleSendEmailLinkButtonClick() {
  studiesButton.classList.remove("cv__link-button_active");
  sendEmailButton.classList.add("cv__link-button_active");
  sendResumeParagraph.classList.remove("cv__paragraph-container_hidden");
  aboutMeParagraph.classList.add("cv__paragraph-container_hidden");
  hobbiesParagraph.classList.add("cv__paragraph-container_hidden");
  emotionalLifeParagraph.classList.add("cv__paragraph-container_hidden");
  emailMessage.classList.add("cv__paragraph-container_hidden");
}

function handleSendEmailFormSubmit(event) {
  event.preventDefault();

  emailMessage.classList.remove("cv__paragraph-container_hidden");
  sendResumeParagraph.classList.add("cv__paragraph-container_hidden");
}

studiesButton.addEventListener("click", handleStudiesLinkButtonClick);
sendEmailButton.addEventListener("click", handleSendEmailLinkButtonClick);
sendEmailForm.addEventListener("submit", handleSendEmailFormSubmit);
