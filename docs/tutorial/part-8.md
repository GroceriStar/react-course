---
id: part-8
title: Master React, Quick Code tutorial. Part 8
sidebar_label: Part 8
---

https://medium.com/quick-code/lets-learn-react-chapter-8-react-forms-f3137a5c07c7
## Expected result

1.  Read this tutorial chapter
2.  follow code steps
3.  move your code to this repository(at least one commit per day)
4.  explain to me, what did you learn from it in a few sentences(not less than 5)
5.  pass the test section
6.  after reviewing your progress and closing this issue - you can move to the next chapter.


## Test
1.  right now form looks very simple.
And usually Meal form have more fields. So let's add them.

By using this database schema: https://github.com/ChickenKyiv/recipe-api-only/blob/master/Recipe-ChickenKyiv-Release%231%20Schema%20%20%20SqlDBM.png
We'll advance this form. I'm pretty sure that when you'll add all fields in this form, you'll realize that it's better to create a sub-components for each form field.
So, Meal is a similar Model to Recipe.
so we'll add all important things to that form.
* Each recipe has attributes: diets, allergies, etc. - text field for each one
* Each recipe has a weekday field(like today i have chicken, tomorrow i'll eat soup) - i assume it'll be checkbox.
* Nutritions is a sub-array with a few fields() - text fields
* Ingredients is a sub-array with a few ingredients inside(like chichen brests, salt, pepper, etc.) Let's have 4 ingredients per meal.

And, make it works :) this is when a real ES6 is coming into the scene.
and don't forget that each field will also have an id field(later it can be useful, when you'll grab data from database)


---
