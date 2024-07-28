const seeMoreCourses = document.querySelector("#see_more_courses")
const courses = document.querySelectorAll(".disabled_course")
const btn_courses_bars = document.querySelector(".courses_btn_bars")
const btn_courses_text = document.querySelector(".see_more_courses_btn_text")

const seeMoreXp = document.querySelector("#see_more_xp")
const experiences = document.querySelectorAll(".disabled_xp")
const btn_xp_bars = document.querySelector(".xp_btn_bars")
const btn_xp_text = document.querySelector(".see_more_xp_btn_text")

seeMoreCourses.addEventListener("click", () => {
    courses.forEach(course => {
        course.classList.toggle("disabled_course")
    })

    btn_courses_bars.childNodes[1].classList.contains("left_bar--default") ?
        btn_courses_bars.childNodes[1].classList.replace("left_bar--default", "left_bar--active")
        : btn_courses_bars.childNodes[1].classList.replace("left_bar--active", "left_bar--default")

    btn_courses_bars.childNodes[3].classList.contains("right_bar--default") ?
        btn_courses_bars.childNodes[3].classList.replace("right_bar--default", "right_bar--active")
        : btn_courses_bars.childNodes[3].classList.replace("right_bar--active", "right_bar--default")

    btn_courses_text.textContent = btn_courses_text.textContent === "Ver mais" ? "Ver menos" : "Ver mais"
})

seeMoreXp.addEventListener("click", () => {
    experiences.forEach(xp => {
        xp.classList.toggle("disabled_xp")
    })

    btn_xp_bars.childNodes[1].classList.contains("left_bar--default") ?
        btn_xp_bars.childNodes[1].classList.replace("left_bar--default", "left_bar--active")
        : btn_xp_bars.childNodes[1].classList.replace("left_bar--active", "left_bar--default")

    btn_xp_bars.childNodes[3].classList.contains("right_bar--default") ?
        btn_xp_bars.childNodes[3].classList.replace("right_bar--default", "right_bar--active")
        : btn_xp_bars.childNodes[3].classList.replace("right_bar--active", "right_bar--default")

    btn_xp_text.textContent = btn_xp_text.textContent === "Ver mais" ? "Ver menos" : "Ver mais"
    
})

seeMoreXp.addEventListener("click", () => {

    const xpSection = document.querySelector(".experience")

    if (btn_xp_bars.childNodes[3].classList.contains("right_bar--default")) {
        xpSection.childNodes[1].scrollIntoView({ behavior: "smooth" })
    }

})

seeMoreCourses.addEventListener("click", () => {
    const coursesSection = document.querySelector(".academic")

    if (btn_courses_bars.childNodes[3].classList.contains("right_bar--default")) {
        coursesSection.childNodes[1].scrollIntoView({ behavior: "smooth" })
    }

})