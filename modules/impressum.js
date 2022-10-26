export const storeReturnURL = (returnLink) => {
    const legalLinksArr = document.querySelectorAll(".footer__legalLink");
    for (let link of legalLinksArr) {
      link.addEventListener("pointerdown", function () {
        if (!sessionStorage.getItem("returnURL")) {
          sessionStorage.setItem("returnURL", returnLink);
        }
      })
    }
  }