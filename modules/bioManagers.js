const bioMobileManager = {
    navbar: document.querySelector("#navbar"),
    aboutMeButton: document.querySelector("#aboutMeButton"),
    bioMobile: document.querySelector("#bioMobile"),
    sayHi: document.querySelector("#sayHi"),
    bioCloseButton: document.querySelector("#bioCloseButton"),
    bioMobileIsOpen: false,
    openBioMobile() {
      this.bioMobile.style.top = `${navbar.offsetTop + 72}px`;
      this.bioMobile.classList.add("bio__mobile--animate");
      this.sayHi.classList.add("sayHi--hidden");
      this.bioMobileIsOpen = true;
    },
    closeBioMobile() {
      this.bioMobile.classList.remove("bio__mobile--animate");
      this.sayHi.classList.remove("sayHi--hidden");
      this.bioMobileIsOpen = false;
    },
    manageBioMobileButtons() {
      bioMobileManager.bioMobileIsOpen ?
        bioMobileManager.closeBioMobile() :
        bioMobileManager.openBioMobile();
    }
  }
  
  const animateBioPicBigScreen = () => {
    const bioPic = document.querySelector("#bioPicDesktop");
    bioPic.classList.add("bio__profilePic--animate");
    setTimeout(() => {
      bioPic.classList.remove("bio__profilePic--animate");
    }, 500);
  }

  export {bioMobileManager, animateBioPicBigScreen};