// Add interactive hover effects and smooth animations
document.addEventListener("DOMContentLoaded", () => {
  const asteroids = document.querySelectorAll(".asteroid")

  // Add subtle mouse interaction with asteroids
  asteroids.forEach((asteroid) => {
    asteroid.addEventListener("mouseenter", function () {
      this.style.animationPlayState = "paused"
    })

    asteroid.addEventListener("mouseleave", function () {
      this.style.animationPlayState = "running"
    })
  })

  if (window.innerWidth > 768) {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX / window.innerWidth
      const mouseY = e.clientY / window.innerHeight

      const saturn = document.querySelector(".saturn")
      const moon = document.querySelector(".moon")

      if (saturn && moon) {
        saturn.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`
        moon.style.transform = `translate(${mouseX * -15}px, ${mouseY * -15}px)`
      }
    })
  }

  let touchStartY = 0
  document.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY
  })

  document.addEventListener("touchmove", (e) => {
    if (window.innerWidth <= 768) {
      const touchY = e.touches[0].clientY
      const deltaY = (touchY - touchStartY) / window.innerHeight

      const saturn = document.querySelector(".saturn")
      const moon = document.querySelector(".moon")

      if (saturn && moon) {
        saturn.style.transform = `translateY(${deltaY * 10}px)`
        moon.style.transform = `translateY(${deltaY * -8}px)`
      }
    }
  })
})
