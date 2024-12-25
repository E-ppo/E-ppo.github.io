document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content")
  const navLinks = document.querySelectorAll("a[data-page]")

  async function loadPage(page) {
    try {
      const response = await fetch(`pages/${page}.html`)
      if (!response.ok) throw new Error("Page not found")
      const html = await response.text()
      content.innerHTML = html
    } catch (error) {
      console.error("Error loading page:", error)
      content.innerHTML = "<p>Error loading page</p>"
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const page = e.target.getAttribute("data-page")
      loadPage(page)
    })
  })

  loadPage("/")
})
