"use strict";

const tabs = document.querySelectorAll(".tab");
const tabsContent = document.querySelectorAll(".tab__content");

const tabsArray = Array.from(tabs);

const tabActive = "tab_active";
const tabContentActive = "tab__content_active";

let index = 0;

tabsArray.forEach(tab => {
  tab.addEventListener("click", toggleTab);
});

function toggleTab() {
  remoteClass();
  index = tabsArray.indexOf(this);
  addClass();
}

function addClass() {
  tabs[index].classList.add( tabActive );
  tabsContent[index].classList.add( tabContentActive );
}

function remoteClass() {
  tabs[index].classList.remove( tabActive );
  tabsContent[index].classList.remove( tabContentActive );
}