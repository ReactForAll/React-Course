Now that we've covered the basics of React, let's use this new found knowledge to build a tool that can help us manage Tasks in a [Kanban](https://www.atlassian.com/agile/kanban)-style workflow.

### Introduction

In order to better strengthen our knowledge of React, we're going to build a tool from scratch that can help us track and manage our tasks in a Kanban-style workflow. A good example of what our target product should look like is [Trello](https://trello.com/). It's a board-based workflow management tool that allows us to organize our tasks in a Kanban-style workflow.

In this project, you should read through the requirements, understand the first level concepts that you'll need to build the tool, and then architect the UX to make the tool a reality.

The primary goal of UI/UX design is to make the user experience as easy and intuitive as possible.

### Requirements outline

The primary goal of this project is to build a tool that can help us manage our tasks. There are different ways to represent our tasks for easy tracking and management. We will need to multiple views to better organize our tasks.

There needs to be a "Board" view that shows the current tasks in the workflow. The "Board" view should show the current tasks in the workflow in a Kanban-style workflow.

There needs to be a "List/Todo" view where all the tasks would be listed out together as a set of cards where the completed tasks would be moved to the end of the list.

There needs to be a "Table" view where all the tasks would be listed out in a table format where almost all the details of the task would be visible.

You should be able to add new tasks in all the views. Edit the details of the tasks in `Modal`s and save the changes. You should be able to archive the tasks in the same screen where you'd edit them.

### Implementation in React

The project would serve as a demonstration of how well you can reuse components in React allowing you to build comprehensive tools without having to write any redundant code. You should build plug and play components/helper functions that can be used in multiple views to the best of your ability.

### First Level Concepts

If you've taken WD202 Django course prior to this, you would've already built the primary API endpoints for the tool. Nevertheless we will go over the first level concepts for the tool. You can either extend the existing API endpoints or build new endpoints for the tool.


In order to build a Kanban-style workflow, we need to first acknowledge the first level entities that we will be working with.

Listing them out we would primarily need `Boards`, `Tasks` and `Stages` or `Columns` in our Kanban workflow.

A `Board` is a collection of `Stages` and a `Stage` represents the status of a `Task`.

Now with these first class entities in place, we can start to build our Kanban workflow.

### API Endpoints

You will first need to build the API endpoints for the CRUD operations on the `Boards`, `Tasks` and `Stages`. 

You can start by making the `CREATE`, `READ`, `UPDATE` and `DELETE` endpoints for the `Boards`, `Tasks` and `Stages` using `GET`, `POST`, `PUT` and `DELETE` respectively.



Once you're done with this, you can move on to more specific endpoints. You would need nested endpoints for the `Tasks` and `Stages` w.r.t. `Boards`.

 - `/boards/<board_id>/tasks`
 - `/boards/<board_id>/stages`



### Supercharge your App (Optional)

Once you have your basic implementation of the tool, you can add more feratures to supercharge your tool. Any of the following features maybe optionally taken up for brownie points. 

#### Drag and Drop

Almost every production grade Kanban tool has a feature that allows you to drag and drop tasks between different lists/stages. This is a great way to get your Kanban-style workflow started. In order to implement this you'll first need a dedicated `move` API that would allow you to move the task from one stage to another.

<!-- API Documentation for move API -->

You'll need a `PATCH` API for moving the task from one stage to another.

 - `/boards/<board_id>/tasks/<task_id>`
```
    `body`:
        `stage_id`: <stage_id>
```


#### Polymorphic Tasks

Polymorphic tasks are a way to represent different types of tasks using the same. This is where a Task can be extended into almost anything depending on the domain you're aiming at. It can be a Bug, Feature, Improvement, etc. if you're aiming the tool as a project management tool.


#### Access Control

The standard implementation means that every user can access merely the tasks and boards that they've created for themselves. It's a very personal tool. You can improve the access Control and implement a "Share" Feature that would allow adding other people to the boards you've created.

#### Activity Feed/Log

When you're tracking tasks closely in a team, it is quite important to keep a log of every action that's made on a task. Be it a comment, an edit, a task being moved to a different stage, etc. This is a great feature to have in your Kanban-style workflow. You would need to implement a `TaskActivity` model that would keep track of all the actions that are made on a task, and update your Task APIs to create the necessary `TaskActivity` records.