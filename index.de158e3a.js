function changeBrand() {
    const { classList: googleClassList } = document.querySelector("#logo__image--google");
    const { classList: oddityClassList } = document.querySelector("#logo__image--oddity");
    const brands = document.querySelectorAll(".brand");
    googleClassList.toggle("logo__image--hidden");
    oddityClassList.toggle("logo__image--hidden");
    brands.forEach((brand)=>{
        brand.classList.toggle("brand--hidden");
    });
}

//# sourceMappingURL=index.de158e3a.js.map
