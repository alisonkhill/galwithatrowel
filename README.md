# galwithatrowel
## Website for *Gal with a Trowel*, a Louisville gardening business

This website introduces potential customers to a new small business called *Gal with a Trowel*. *Gal with a Trowel* provides a variety of gardening and landscaping services at an affordable price. Services can include projects as large as planning and planting a brand new garden, to small projects like maintaining existing gardens and pruning. The page features a main navigation menu at the top directing users to 4 sections of website: About, Services, Gallery, and Contact. The About section introduces the team at Gal with a Trowel and their experience with gardening. This currently contains placeholder text. The Services section includes details and pricing for each of the different services currently offered. The Gallery showcases photos of projects that have been completed by *Gal with a Trowel*, and Contact provides users with several ways to contact the business.

## Code Louisville Project Requirements:

### 2 media queries:
The base styles are mobile-first design, made to look good on small screens like smartphones. There are two main media queries:
1. The first is for a min-width of 500px which changes the navigation menu at the top and the contact information at the bottom to display horizontally instead of vertically. 
2. The second media query is for large screens (min-width 1000px) which displays the About, Services, and Gallery sections in columns. 
    1. There is an additional media query only to adjust the image sizes for in-between screen sizes.

### Project on GitHub with at least 5 commits:
As of 7/28/21 I have made 36 commits.
#### https://github.com/alisonkhill/galwithatrowel.git
#### https://alisonkhill.github.io/galwithatrowel/

### Project includes README file with project description and features included:
You're looking at it!

### 2 CSS Features
1. *"A navigation menu that expands and collapses properly at desktop and mobile sizes, such as by switching between vertical and horizontal styles"*
    1. The top navigation menu and the footer contact information switch between vertical and horizontal layouts when switching between mobile and desktop/landscape tablets. 
2. *"Use Flexbox or CSS Grid to organize content areas based on mobile or desktop views."*
    1. The About, Services, and Gallery sections all use Flexbox to change their layout into two columns for larger screen sizes.

### 3 JavaScript Features
1. *"Create a form (such as a ‘Contact Us’ form), validate at least one field (ex: email is in the correct format) and then use that information on your page somehow."*
    1. I created an input field in the Contact section where the user's name is requested. The function checks (validates) whether they input text, and then uses their text in a secret message that is revealed in html below. If they leave the field blank, they receive a different message subtly indicating that they failed to provide input (name.js).
        1. 1. I believe that this feature also meets the requirements of *"Show/hide one or more content areas or elements on your site through clicking a button or some other user interaction - must be done with some JavaScript code."*
2. *"Create and populate a JavaScript array with one or more values and display the contents of some or all of the array on your page."*
    1. I created an array of photos which are displayed randomly using the second feature below (array-func.js)
3. *"Create a JavaScript function that performs some form of mathematical operation (calculates something) and displays the result on your page or otherwise uses that value to do something on the site."*
    1. I used a function employing Math.random, Math.floor, and array.length calculations to randomly display a photo from the array in the header below the top navigation links (array-func.js).
