# galwithatrowel
## Website for *Gal with a Trowel*, a Louisville gardening business

This website introduces potential customers to a new small business called *Gal with a Trowel*. *Gal with a Trowel* provides a variety of gardening and landscaping services at an affordable price. Services can include projects as large as planning and planting a brand new garden, to small projects like maintaining existing gardens and pruning. The page features a main navigation menu at the top directing users to 4 sections of website: About, Services, Gallery, and Contact. The About section introduces the team at Gal with a Trowel and their experience with gardening. This currently contains placeholder text. The Services section includes details and pricing for each of the different services currently offered. The Gallery showcases photos of projects that have been completed by *Gal with a Trowel*, and Contact provides users with several ways to contact the business.

## Code Louisville Project Requirements:

### 2 media queries:
The base styles are mobile-first design, made to look good on small screens like smartphones. There are two main media queries, the first is for a min-width of 500px which changes the navigation menu at the top to display horizontally instead of vertically. The second media query is for large screens (min-width 1000px) which displays the About, Services, and Gallery sections in columns. There is an additional media query only to adjust the image sizes for in-between screen sizes.

### Project on GitHub with at least 5 commits:
As of 7/26/21 I have made 25 commits.
#### https://github.com/alisonkhill/galwithatrowel.git
#### https://alisonkhill.github.io/galwithatrowel/

### Project includes README file with project description and features included:
You're looking at it!

### 2 CSS Features
1. The top navigation menu and the footer contact information switch between vertical and horizontal layouts when switching between mobile and desktop/landscape tablets. 
2. The About, Services, and Gallery sections all use Flexbox to change their layout into two columns for largeer screen sizes (2).

### 2 JavaScript Features
1. I created a JavaScript array of photos which are displayed using the second feature below (array-func.js)
2. I used a function employing Math.random and Math.floor calculations to randomly display a photo from the array in the header below the top navigation links (array-func.js).
3. I also created an input field in the Contact section where the user's name is requested. If they type something into the input field before clicking the button, they receive a secret message addressing them by name. If they leave the field blank, they receive a different message subtly indicating that they failed to provide input (name.js).
