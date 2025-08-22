document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo")
  let mouseX = 0
  let mouseY = 0

  // Mouse parallax effect
  document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) / 50
    mouseY = (e.clientY - window.innerHeight / 2) / 50

    if (logo) {
      logo.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }
  })

  // Touch interaction for mobile
  document.addEventListener("touchmove", (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0]
      mouseX = (touch.clientX - window.innerWidth / 2) / 30
      mouseY = (touch.clientY - window.innerHeight / 2) / 30

      if (logo) {
        logo.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
    }
  })

  // Reset position when mouse leaves
  document.addEventListener("mouseleave", () => {
    if (logo) {
      logo.style.transform = "translate(0px, 0px)"
    }
  })
})
