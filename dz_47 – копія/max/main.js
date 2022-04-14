const arrayTriggerItems = document.querySelectorAll(".tabs-triggers__item");
const arrayContentItems = document.querySelectorAll(".tabs-content__item");
for (let item of arrayTriggerItems) {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    const id = event.target.getAttribute("href").replace("#", "");

    for (let child of arrayTriggerItems) {
      child.classList.remove("tabs-triggers__item--active");
    }
    for (let child of arrayContentItems) {
      child.classList.remove("tabs-content__item--active");
    }

    item.classList.add("tabs-triggers__item--active");
    document.getElementById(id).classList.add("tabs-content__item--active");
  });
}
document.querySelector(".tabs-triggers__item").click();
