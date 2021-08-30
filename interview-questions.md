# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: We can fix the mistake by generating a migration with rails g migration, the name of the foreign key would be animal_sightings, the foreign key always lives on the belongs_to side, so it would be part of the Sightings model. 

  Researched answer: A foreign key acts as a cross-reference between tables by referring to the primary key of another table to create a link between the two, the foreign key always lives on the belongs_to side and so it would be part of the Sightings model. To fix this mistake we would want to name the foreign key animal_sightings to adhere to the naming convention, and we would need to generate a migration to acheive this.



2. Which RESTful API routes must always be passed params? Why?

  Your answer: The routes that require information to complete their intended action would need to be passed params, so GET, PUT and DELETE would always need params.

  Researched answer: The RESTful API routes that must always be passed params are those which require specific information to complete the intended action. This would include GET (must be passed param to know what to retrieve), PUT (must be passed a param to konw what is being changed/updated) and DELETE (must be passed a param to know what is to be removed). 



3. Name three rails generator commands. What is created by each?

  Your answer: rails g migration ---> creates migration
               rails g resources ---> creates resources ()
               rails g model ----> creates a model

  Researched answer: 1) rails g migration ---> creates a migration which can be used to do things like add_column, add_index, change_column, remove_column etc. 
  2) rails g resource ---> creates a new model, db table, controller and empty views folder. Follows the syntax rails g resource ModelName column_name:datatype column_name2:datatype
  3) rails g model ----> creates a new model, follows the syntax rails g model NameOfModel column_name:datatype column_name2:datatype



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students      
index, displays a list of all students    

method="POST"   /students       
create, creates a new student in the database

method="GET"    /students/new
new, returns a form for creating a new student

method="GET"    /students/2  
show, passing the parameter 2 returns the second item in the db.

method="GET"    /students/edit/2    
edit, returns a form for editing the second student in the db

method="PATCH"  /students/2      
update, updates the second student in the db

method="DELETE" /students/2      
destroy, deletes the second student in the db


5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user I can log in / out so that I can access my to do list
As a user I can view my to do list so that I can review / make changes
As a user I can add a task to my to do list so that I can keep track of tasks
As a user I can delete a task from my to do list so that I can remove un-wanted tasks
As a user I can update a task on my to do list so that I can keep an accurate list
As a user I can mark tasks completed so that I can see the completion status of tasks
As a user I can change completion status of tasks so that I can check or uncheck a task as completed
As a user I can set deadlines for tasks so that I can view urgent tasks at the top of my list
As a user I can set reminders for tasks so that I can be reminded of future tasks as they come due
As a user I can schedule tasks for future dates / recurring tasks to improve usability of my task list