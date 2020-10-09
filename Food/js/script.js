document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items"),
    arrowTop = document.querySelector('.sidepanel__arrow-top');

  function hideTabContent() {
    tabsContent.forEach((item) => {
      //   item.style.display = "none";
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }
  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

function arrowToop() {
   let wayToTop = document.documentElement.scrollTop - 180;
  if(wayToTop > 800){
    arrowTop.style.display = 'block';}
   else {
     arrowTop.style.display = 'none';
   }
  arrowTop.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
})
}
setInterval(arrowToop, 10);


//modal
const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach((btn) =>{
  btn.addEventListener('click', () => {
  // modal.classList.add('show');
  // modal.classList.remove('hide');
  modal.classList.toggle('show');
  document.body.style.overflow = 'hidden';
})
}
)

function closeModal(){
  modal.classList.toggle('show');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
  if (e.target === modal){
   closeModal();
  }
})

document.addEventListener('keyup', (e) =>{
  if (e.code === "Escape" && modal.classList.contains('show') ){
    closeModal();
  }
})



});
