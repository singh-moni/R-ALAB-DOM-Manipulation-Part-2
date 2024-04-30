// Menu data structure
var menuLinks = [
    { text: "about", href: "/about" },
    {
        text: "catalog",
        href: "#",
        subLinks: [
            { text: "all", href: "/catalog/all" },
            { text: "top selling", href: "/catalog/top" },
            { text: "search", href: "/catalog/search" },
        ],
    },
    {
        text: "orders",
        href: "#",
        subLinks: [
            { text: "new", href: "/orders/new" },
            { text: "pending", href: "/orders/pending" },
            { text: "history", href: "/orders/history" },
        ],
    },
    {
        text: "account",
        href: "#",
        subLinks: [
            { text: "profile", href: "/account/profile" },
            { text: "sign out", href: "/account/signout" },
        ],
    },
];

// Part 1========================================//

// Number 1
const mainEl = document.querySelector("main");
console.log(mainEl);

// Number 2
mainEl.style.backgroundColor = "var(--main-bg)";

// Number 3
const h1 = document.createElement("h1");
mainEl.appendChild(h1);

h1.textContent = "DOM Manipulation";
console.log(h1);

// Number 4
mainEl.classList.add("flex-ctr");

// Part 2===========================================//
// Number 1
const topMenuEl = document.getElementById("top-menu");

// Number 2
topMenuEl.style.height = "100%";

// Number 3
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Number 4
topMenuEl.classList.add("flex-around");

// Part 3=============================================//


menuLinks.forEach(function (link) {
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", link.href);
    linkElement.textContent = link.text;
    topMenuEl.appendChild(linkElement);
});

// RLAB-Part 3===============================================//
// Number 1:Retrieves the submenu element with the ID "sub-menu".
const subMenuEl = document.getElementById("sub-menu");

// Number 2:Sets the height of the submenu to "100%".
subMenuEl.style.height = "100%";

// Number 3:Sets the background color of the submenu using a CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Number 4: Adds the CSS class "flex-around" to the submenu.
subMenuEl.classList.add("flex-around");

// Number 5: Sets the position of the submenu to "absolute".
subMenuEl.style.position = "absolute";

// Number 6:Sets the top position of the submenu to "0".
subMenuEl.style.top = "0";

// Part 4===============================================//
// Number 1:Retrieves all anchor elements in the document and assigns them to the topMenuLinks variable.
const topMenuLinks = topMenuEl.querySelectorAll("a");

//Number 2
topMenuEl.addEventListener("click", function(event) {
    // Prevent the default action of the click event
    event.preventDefault();
  
    // Immediately return if the element clicked was not an <a> element
    if (event.target.tagName !== "A") {
      return;
    }
  
    // Log the content of the <a> element
    console.log(event.target.textContent);
  });


  topMenuEl.addEventListener("click", function(event) {
    // Prevent the default action of the click event
    event.preventDefault();
  
    // Immediately return if the element clicked was not an <a> element
    if (event.target.tagName !== "A") {
      return;
    }
  
    // Toggle the "active" class on the clicked <a> element
    event.target.classList.toggle("active");
  
    // Remove the "active" class from each other <a> element in topMenuLinks
    topMenuLinks.forEach(function(link) {
      if (link !== event.target) {
        link.classList.remove("active");
      }
    });
  });
  

 // Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener("click", function(event) {
    // Prevent the default action of the click event
    event.preventDefault();
  
    // Cache the clicked <a> element
    const clickedLink = event.target;
  
    // Cache the corresponding "link" object from menuLinks
    const linkObject = menuLinks.find(link => link.text === clickedLink.textContent);
  
    // Check if the clicked <a> element does not have the "active" class
    if (!clickedLink.classList.contains("active")) {
      // If the corresponding "link" object has a "subLinks" property
      if (linkObject && linkObject.subLinks) {
        // Set the CSS top property of subMenuEl to 100%
        subMenuEl.style.top = "100%";
      } else {
        // Otherwise, set the CSS top property of subMenuEl to 0
        subMenuEl.style.top = "0";
      }
    }
  });

  // Attach a delegated 'click' event listener to topMenuEl
  topMenuEl.addEventListener("click", function(event) {
    // Prevent the default action of the click event
    event.preventDefault();
  
    // Immediately return if the element clicked was not an <a> element
    if (event.target.tagName !== "A") {
        return;
    }
  
    // Toggle the "active" class on the clicked <a> element
    event.target.classList.toggle("active");
  
    // Remove the "active" class from each other <a> element in topMenuLinks
    topMenuLinks.forEach(function(link) {
        if (link !== event.target) {
            link.classList.remove("active");
        }
    });

    // Cache the clicked <a> element
    const clickedLink = event.target;

    // Cache the corresponding "link" object from menuLinks
    const linkObject = menuLinks.find(link => link.text === clickedLink.textContent);

    // Check if the clicked <a> element does not have the "active" class
    if (!clickedLink.classList.contains("active")) {
        // If the corresponding "link" object has a "subLinks" property
        if (linkObject && linkObject.subLinks) {
            // Set the CSS top property of subMenuEl to 100% to show the submenu
            subMenuEl.style.top = "100%";
            
            // Build the submenu dynamically based on the subLinks array
            buildSubmenu(linkObject.subLinks);
        } else {
            // Otherwise, set the CSS top property of subMenuEl to 0 to hide the submenu
            subMenuEl.style.top = "0";
        }
    } else {
        // If the clicked <a> element already has the "active" class, hide the submenu
        subMenuEl.style.top = "0";
    }
});

// Helper function to build the submenu dynamically based on the provided subLinks array
function buildSubmenu(subLinks) {
    // Clear the current contents of subMenuEl
    subMenuEl.innerHTML = "";
  
    // Iterate over the subLinks array and build the submenu
    subLinks.forEach(function(link) {
        // Create an <a> element
        const subLinkElement = document.createElement("a");
      
        // Add an href attribute to the <a>, with the value set by the href property of the "link" object
        subLinkElement.setAttribute("href", link.href);
      
        // Set the element's content to the value of the text property of the "link" object
        subLinkElement.textContent = link.text;
      
        // Append the new element to the subMenuEl
        subMenuEl.appendChild(subLinkElement);
    });
}