fetch("sections/projects.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("projects-container").innerHTML = data;
  });