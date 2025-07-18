let sectionIntersectOptions = {
    rootMargin: "9999px 0px 0px 0px",
    threshold: .2
};
const onSectionIntersect = e => {
        let t = 0;
        animatedNodes.forEach(n => {
                e.target.contains(n) && (n.style.animationDelay = `${nodeDelayDelta * t + .1}s`,
                    n.classList.add("rad-animate"),
                    t++)
            }
        )
    }
    , onSectionIntersectChange = (e, t) => {
        e.forEach(e => {
                e.isIntersecting && onSectionIntersect(e)
            }
        )
    }
;
let animationObserver = new IntersectionObserver(onSectionIntersectChange,sectionIntersectOptions);
const animatedNodes = Array.from(document.querySelectorAll(".rad-fade-down, .rad-fade-in, .rad-fade-in-long, .rad-scale-down"))
    , animatedSections = Array.from(document.querySelectorAll(".rad-animation-group"))
    , nodeDelayDelta = .2
    , sectionDelayDelta = .2;
animatedNodes.forEach( (e, t) => {
        e.classList.add("rad-waiting")
    }
),
    animatedSections.forEach( (e, t) => {
            animationObserver.observe(e)
        }
    );
