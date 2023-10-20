# f28wp-lab1
explaining slideshow :
This code is an HTML document that creates a web page for a travel agency's gallery with an image slideshow.
HTML Structure**: The code starts with an HTML document structure, including a <!DOCTYPE> declaration, an'<html>' element, and a '<head>'section.
It sets the character encoding, provides a title for the page (‘‘Gallery - Wanderlust Voyages‘‘), and includes a reference to an external CSS file (‘‘style.
The CSS styles are defined within the'<head>' section using a'<style>' block to give the gallery its desired appearance.
In the'<body>'there is a header section that showcases the name of the travel agency.
Below this header a navigation menu is created using a list ('<ul>'). List items ('<li>'). Each list item contains a link, to pages on the website such as 'Home' 'About,' 'Services,' 'Gallery,' 'Contact,' 'Tasks' and 'Form.' The page title, which is 'Gallery' is displayed as a heading (`<h1>').
Following the image slideshow there is a call, to action section that encourages users to explore and enjoy the services provided by the agency. This section includes a heading, a brief message and a link to navigate to the 'Form' page.
The HTML structure ensures that the slideshow is encapsulated within an element having the class "slideshow container." 
Inside this container you will find components known as "mySlides." Each of these components represents a slide, in the gallery. Lets take the slide as an example. It contains an image with the source "images/1.jpeg". Also includes an element called "numbertext" that shows the slide number.
For navigation purposes there are two buttons "prev" and "next." These buttons are represented by components with class names "prev". Next," respectively. To move between slides simply click on these buttons. They have onclick properties that trigger JavaScript methods; minusSlides( 1) for going to the slide and plusSlides(1) for moving to the one.
To make navigation even easier there are dots located below the slides. Each of these dots corresponds to a slide. Is represented by a component, with class name "dot." Clicking on any of these dots triggers a property which calls upon the method "currentSlide(n)" to navigate directly to that slide.
JavaScript Functions:
showSlides(n): This function is responsible for displaying the correct slide. It accepts an input n, which is the slide number to display. It conceals all slides and automatically refreshes the current slide and navigation dot.
plusSlides(n): When the previous or next buttons are pressed, this function is invoked. It changes the current slide index by n and then uses showSlides to display the new slide.
currentSlide(n): When a navigation dot is clicked, this method is invoked. It immediately changes the current slide index to n and then uses showSlides to display the selected slide.

currentSlide(n): When a navigation dot is clicked, this method is invoked. It immediately changes the current slide index to n and then uses showSlides to display the selected slide.
This JavaScript code generates a basic picture slideshow with buttons and navigation dots for navigating through the slides. The slideshow is a convenient method to see many photographs in the gallery.



explaining form :
The code given is an HTML page with a user registration form with client-side validation. Here's an explanation of how the code is organised and what it does:
The code begins with typical HTML document structure, such as a document type declaration (), an opening tag, and a section. Details such as character encoding, page title, viewport settings, links to external stylesheets (form.css), and some inline CSS are included in this area.
Header and Navigation: There is a header section within the document that includes the travel agency's title ("Wanderlust Voyages | Travel Agency") and a navigation menu with links to various pages of the website, such as "Home," "About," "Services," "Gallery," "Contact," and "Tasks."
User Registration Form: The page's main content is a user registration form. It has input boxes for the user's username, email, password, and password confirmation. Each input field is enclosed in a div element with the class "input-control" to offer a uniform look.
Error Messages: There is an associated element with the class "error" (e.g., id="usernameError") for each input field to show error messages if the user's input is incorrect. Initially, these error messages are empty.
Call to Action: There is a call-to-action area below the form with a headline, a short message, and a "Contact Us Now" link.
Footer  The footer provides social networking platform links (Facebook, Twitter, and Instagram) as well as a copyright notice.
Validation with JavaScript: JavaScript code is inserted in the script> section to perform form validation. It sets up form components and event listeners. When you submit the form, it validates the login, email, password, and confirmation password boxes. If any of the fields are incorrect, the form is not submitted, and error warnings are displayed. If the fields are correct, success messages are displayed.
This code structure generates a user-friendly registration form with client-side validation, For a comprehensive web page experience, it also provides navigation links, a call to action, and a footer. Before submission, form validation ensures that users give the essential information in the right format.
