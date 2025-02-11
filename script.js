const
bar = document.getElementById("bar"),
sidebar = document.getElementById("sidebar"),
container = document.getElementById("container")

let isSidebarExpanded = true

bar.addEventListener("click", () => {
    isSidebarExpanded = !isSidebarExpanded
    if (isSidebarExpanded) {
        sidebar.classList.remove("sidebar-closed")
        container.classList.add("shrink")
    }
    else {
        sidebar.classList.add("sidebar-closed")
        container.classList.remove("shrink")
    }
    console.log(isSidebarExpanded)
})