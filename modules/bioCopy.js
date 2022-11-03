export const buildBioCopy = {
    profilePic: `<img class="bio__profilePic" src="./images/MichaelWaaler.jpeg" alt="Profile picture of Michael Waaler"
    width="120" height="120">`,
    profilePicDesktop() {
        return this.profilePic.replace(/<img/, `<img id="bioPicDesktop"`);
    },
    copy: `*Hi, I'm Michael!*
    I speak *HTML, CSS,* and *JavaScript.*
    I'm also fluent in *English* and *German.*
    Check out my *LinkedIn* profile for more details on my *work history* and *education.*
    When I'm not *working* or *learning*, I enjoy *walking* my dog, *exercising* at the local gym, *playing* video games with my children, and *spending time* with my family.
    I'm also a founding member of the *Hamburg Film Club*, which is infamous for its annual Halloween movie marathons!`,
    formatCopy() {
        this.copy = this.copy.replace(/(\*.*?\*)/gm, `<span class="boldText">$1</span>`);
        this.copy = this.copy.replace(/\*/gm, "");
        return this.copy = this.copy.replace(/(^.*$)/gm, `<p class="bio__copy">$1</p>`);
    },
    insertCopy() {
        const bios = ["#bioDesktop", "#bioMobile"];
        const formattedCopy = this.formatCopy();
        for (let bio of bios) {
            let insertPosition = document.querySelector(bio);
            bio === "#bioDesktop" ?
                insertPosition.insertAdjacentHTML("beforeend", this.profilePicDesktop()) :
                insertPosition.insertAdjacentHTML("beforeend", this.profilePic);
            insertPosition.insertAdjacentHTML("beforeend", formattedCopy);
        }
    }
}
buildBioCopy.insertCopy();
