let rating = 0;

const saved = JSON.parse(localStorage.getItem("kitkat_step1") || "{}");
if (saved.produit) document.getElementById("produit").value = saved.produit;
if (saved.commentaire) document.getElementById("commentaire").value = saved.commentaire;
if (saved.rating) {
  rating = saved.rating;
  document.querySelectorAll(".star").forEach((s, i) => {
    s.classList.toggle("active", i < rating);
  });
}

document.querySelectorAll(".star").forEach((star) => {
  star.addEventListener("click", () => {
    rating = parseInt(star.dataset.val);
    document.querySelectorAll(".star").forEach((s, i) => {
      s.classList.toggle("active", i < rating);
    });
  });
  star.addEventListener("mouseover", () => {
    const hovered = parseInt(star.dataset.val);
    document.querySelectorAll(".star").forEach((s, i) => {
      s.classList.toggle("hovered", i < hovered);
    });
  });
  star.addEventListener("mouseout", () => {
    document.querySelectorAll(".star").forEach((s) => s.classList.remove("hovered"));
  });
});

document.getElementById("photo").addEventListener("change", (e) => {
  const file = e.target.files[0];
  document.getElementById("file-name").textContent = file ? file.name : "";
});

function goNext() {
  if (!document.getElementById("step1-form").reportValidity()) return;
  localStorage.setItem(
    "kitkat_step1",
    JSON.stringify({
      produit: document.getElementById("produit").value,
      rating: rating,
      commentaire: document.getElementById("commentaire").value,
    })
  );
  window.location.href = "step2.html";
}
