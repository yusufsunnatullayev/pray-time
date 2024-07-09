"use strict";

const input = document.querySelector("input"),
  btn = document.querySelector("button"),
  fajrSpan = document.querySelector(".fajr"),
  shuroqSpan = document.querySelector(".shuroq"),
  dhuhrSpan = document.querySelector(".dhuhr"),
  asrSpan = document.querySelector(".asr"),
  maghribSpan = document.querySelector(".maghrib"),
  ishaSpan = document.querySelector(".isha"),
  form = document.querySelector("form"),
  loading = document.querySelector(".loading");

let loader = false; // Changed 'const' to 'let' to allow reassignment

const API_KEY = "bba7ab9bd035d049765305fef6073578";

async function fetchData(city) {
  try {
    loader = false; // Changed 'const' to 'let' to allow reassignment
    let res = await fetch(
      `https://muslimsalat.com/${city}.json?key=${API_KEY}`
    );
    let data = await res.json();
    console.log(data);
    data.items.forEach((item) => {
      fajrSpan.textContent = item.fajr;
      shuroqSpan.textContent = item.shurooq;
      dhuhrSpan.textContent = item.dhuhr;
      asrSpan.textContent = item.asr;
      maghribSpan.textContent = item.maghrib;
      ishaSpan.textContent = item.isha;
    });
  } catch (error) {
    loader = false; // Changed 'const' to 'let' to allow reassignment
    console.log(error);
    fajrSpan.textContent = "";
    shuroqSpan.textContent = "";
    dhuhrSpan.textContent = "";
    asrSpan.textContent = "";
    maghribSpan.textContent = "";
    ishaSpan.textContent = "";
    alert(
      "Could not find your searched location, please use different word/location and try again."
    );
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loader = true; // Changed 'const' to 'let' to allow reassignment
  fetchData(input.value);
  input.value = "";
  if (loader) {
    loading.classList.remove("hide");
    loading.classList.add("show");
  } else {
    loading.classList.remove("show");
    loading.classList.add("hide");
  }
});
