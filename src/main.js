export function handleDownload(file) {
  const link = document.createElement("a");

  link.href = file;
  link.download = "My-CV.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function handlePopup() {
  console.log("Open popup!");
}

export function handleSubmit() {
  console.log("Submit!");
}

export function handleLogout() {
  console.log("Logout!");
}
