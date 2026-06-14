if (!localStorage.getItem("kitkat_step1")) {
  window.location.replace("index.html");
}

const saved = JSON.parse(localStorage.getItem("kitkat_step2") || "{}");
if (saved.nom) document.getElementById("nom").value = saved.nom;
if (saved.email) document.getElementById("email").value = saved.email;
if (saved.age) {
  const radio = document.querySelector(`input[name="age"][value="${saved.age}"]`);
  if (radio) radio.checked = true;
}

function goNext() {
  if (!document.getElementById("step2-form").reportValidity()) return;
  const age = document.querySelector('input[name="age"]:checked');
  localStorage.setItem(
    "kitkat_step2",
    JSON.stringify({
      nom: document.getElementById("nom").value,
      email: document.getElementById("email").value,
      age: age ? age.value : "",
    })
  );
  window.location.href = "step3.html";
}
