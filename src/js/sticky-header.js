class StickyHeader {
    constructor(t) {
        this.header = t,
            this.body = document.querySelector("body"),
            this.thresholdPosition = 15,
            this.triggeredStickyClass = "header--sticky-triggered",
            this.stickyClass = "header--sticky",
            this.ticking = !1,
            this.bodyPosition = 0,
            window.addEventListener("DOMContentLoaded", () => this.initSticky()),
            this.scrollChanged()
    }
    initSticky() {
        this.headerStaticHeight = this.header.getBoundingClientRect().height,
            this.header.classList.toggle(this.stickyClass, !0),
            window.addEventListener("scroll", () => this.scrollHandler())
    }
    scrollHandler() {
        this.ticking || (window.requestAnimationFrame( () => {
                this.scrollChanged(),
                    this.ticking = !1
            }
        ),
            this.ticking = !0)
    }
    scrollChanged() {
        this.bodyPosition = Math.abs(this.body.getBoundingClientRect().top),
            this.bodyPosition > this.thresholdPosition ? this.header.classList.toggle(this.triggeredStickyClass, !0) : this.header.classList.toggle(this.triggeredStickyClass, !1)
    }
}
const stickyHeader = new StickyHeader(document.querySelector(".header"));
