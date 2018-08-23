Git

### Description/Steps to reproduce

- [x] convert our flow to good git-flow.
- [ ] broke few forks(0)
- [ ] make 30 commits (0)
- [ ] make 9 pull requests (0)
- [ ] make 6 merge conflicts and fix them (0)
- [ ] make 5-10 future branches, related in a different ways(few times checkout from develop, few times from each other feature branch)(0)
- [ ] 6 branch merges(0)

---

.env configuration 
will put information about it later

---

use recipes data from groceristar-fetch


Flow types
https://flow.org/en/docs/getting-started/
https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-flow

#### advanced stuff

https://medium.com/flow-type/even-better-support-for-react-in-flow-25b0a3485627
https://medium.com/@linmic/its-time-to-remove-proptypes-and-just-use-flow-for-react-4a3de615aac5

codacy improvement
connect to codacy and check quality of our code

add jest tests to each of components
Check the Testing section of this article: https://medium.com/groceristar/things-that-should-read-and-use-javascript-intern-at-groceristar-april-18-collection-bd6541e9ae28

calendar template
Download this template and convert it into react application
https://codyhouse.co/demo/schedule-template/index.html

convert phoenix startup template into react page
#### Description/Steps to reproduce

Please check this code repo. https://github.com/atherdon/ph-st
It's a UI Kit, that was created by my friends, and they shared with me a free sample to try.
basic idea is to convert that HTML code into react page.
You should provide your step-by-step plan, where you'll explain
- **how you'll do it**.
- **What do you need from me**
- **What will be a problem and what questions do you have to me, before you'll start.**

for fast start we can use a template from `build` folder
But also check their src structure and tell me - will you be able to setup a local version of development version where we'll be able to alter scss?


prev code located here: https://github.com/atherdon/ph-st 
compiled HTML are here: https://github.com/atherdon/ph-st/tree/master/build


checklist
as it's a big task, please tell me your step by step plan. 
it'll be cool to go from basic stuff first, like: 

- implement header and footer and container -->
- then go to each block -->
- and show me the progress each time when you finish the item

So I can review it, and make some corrections.

in order to be able to see the result online - we must push repository code on https://www.netlify.com/
when you create an account here and try to move this repo - you'll need to get a grant access from me.
Do it - I'll receive a notification and I'll approve it.



---

warnings
Compiled with warnings.

---

move that data into a separated array too.

---

MealPlan -> renderMeals
What do you think if we'll move a Meal Card into a separated component?

---

as you can see - we have a similar return, just a different an attribute.
i think we can improve it and return this Tag only once, but in different conditions

---

Meal form
- [x] Name field should be a text only with validation or mask(any option is fine with me)
- [x] URl Form field -> don't have a link validation. I can put anything at that field right now. It can became a HTML5 field -> i'm with that option
- [ ] TextArea should be not empty. 
- [x] Prevent form submission without any data at form


pages/routing 
https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-router

- [ ] Separate your page into 2 pages
Use router for this
Index page will be for our code from chapters(forms, our calendar, etc)
page with URL `/calendar` - will display our designed calendar

---

move styles for MealPlan into a separated styles file, related to MealPlan only 

---

Modals should be as separated components
Put them also in one folder.
like Modal/Abs/Abs.js

check this project structure
https://github.com/atherdon/bebe-grocery/tree/master/src
and tell me the difference and how we can improve our project structure.

You can also read section **Structure** of this article: https://medium.com/groceristar/things-that-should-read-learn-use-js-intern-at-groceristar-may-18-collection-48dc4e8f9c33

---

deploy to Netlify

---

Meal plan next version
Can stuff, stored at Meal plan Form be a set with separated components, that contain related state events?
Will this reduce size of this file, right?

---

KISS strategy
What we can do in order to make our components more readable and less complex coded?

- [ ] Add a readme file with data for each component. it'll help organize stuff for us, and will help another developers that will use our components later

---

add complex recipe (with sub-recipes)
https://github.com/GroceriStar/static-data

---

Publish on Bit
https://bitsrc.io/groceristar/recipe-search-form (we'll create another scope for Meal Calendar)
https://docs.bitsrc.io/tutorial/react-tutorial.html

---

add travis for builds + tests


http://netlify.com/
