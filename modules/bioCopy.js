export const buildBioCopy = {
  profilePic: `<img class="bio__profilePic" src="./images/Michael_Waaler_s.webp" alt="Profile picture of Michael Waaler"
    width="1527" height="2036">`,
  profilePicDesktop() {
    return this.profilePic.replace(/<img/, `<img id="bioPicDesktop"`);
  },
  copy: `*Hi, I'm Michael!*
    I speak *HTML, CSS,* and *JavaScript.*
    I currently like working with *React, PostCSS,* and *Vite,* but I'm also familiar with *Parcel* and *BEM notation.*  
    I'm also fluent in *English* and *German.*
    Check out my <link=https://www.linkedin.com/in/michael-waaler-55854717/urlend>*LinkedIn*</link> profile for more info about me.
    You can also *download* my CV <link=../Portfolio/documents/01_Michael_Waaler_Junior_Frontend_Developer.pdfurlend>*here.*</link>`,
  formatCopy() {
    this.copy = this.copy.replace(
      /(\*.*?\*)/gm,
      `<span class="boldText">$1</span>`
    );
    this.copy = this.copy.replace(/\*/gm, "");
    this.copy = this.copy.replace(
      /(<link=)(.+)(urlend>)(.+)(<\/link>)/gm,
      `<a class="bio__link" href="$2" target="_blank" rel="noopener">$4</a>`
    );
    return (this.copy = this.copy.replace(
      /(^.*$)/gm,
      `<p class="bio__copy">$1</p>`
    ));
  },
  insertCopy() {
    const bios = ["#bioDesktop", "#bioMobile"];
    const formattedCopy = this.formatCopy();
    for (let bio of bios) {
      let insertPosition = document.querySelector(bio);
      bio === "#bioDesktop"
        ? insertPosition.insertAdjacentHTML(
            "beforeend",
            this.profilePicDesktop()
          )
        : insertPosition.insertAdjacentHTML("beforeend", this.profilePic);
      insertPosition.insertAdjacentHTML("beforeend", formattedCopy);
    }
  },
};
buildBioCopy.insertCopy();

/* FORMATTING
Use *blah* for bold 
use <link="URL"urlend>"link content"</link> for links
*/
