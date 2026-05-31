const s1 = JSON.parse(localStorage.getItem("kitkat_step1") || "{}");
const s2 = JSON.parse(localStorage.getItem("kitkat_step2") || "{}");

const rating = s1.rating || 0;
const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
const comm = s1.commentaire || "";

function set(id, label, value) {
  document.getElementById(id).innerHTML =
    `<span class="recap-key">${label} :</span><span class="recap-val">${value}</span>`;
}

set("recap-nom",         "Nom, Prénom", s2.nom    || "—");
set("recap-email",       "E-mail",      s2.email  || "—");
set("recap-age",         "Âge",         s2.age    ? s2.age + " ans" : "—");
set("recap-produit",     "Produit",     s1.produit || "—");
set("recap-note",        "Note",        `<span class="recap-stars">${stars}</span>`);
set("recap-commentaire", "Commentaire", comm ? (comm.length > 28 ? comm.slice(0, 28) + "…" : comm) : "—");
