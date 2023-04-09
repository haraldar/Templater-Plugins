# Plugins/ Functions for Obsidian

## Prerequisites

- Installed the Templater plugin in your vault.
- Created directory "Templates" for storing your templates to use with Templater.
- Configured your Templater plugin settings for template folder location "Templates".
- Created a subdirectory "Templates/Functions" and added js-file of mine.
- Configured your Templater plugin settings for User Script Functions to be under "Templates/Functions".

(You can call your folders however you want.)

## General Usage of Templater

### Creating a template

Add in any file in the template folder:

```<%* tp.user.<user_function>() -%>``` if you want to dismiss the return value

OR

```<% tp.user.<user_function>() %>``` if you want to print the return value in the file

(More specific usage instructions in the user script function section.)

### Applying a template

```Alt+E``` to show all applyable templates.

OR

```Ctrl+P``` to open the command pallete and type "templater" and run the "Open Insert Template Model".

Both options open a dropdown to select a template. Select the one you need.


## Documentations

1. [Official Obisidian](https://github.com/obsidianmd/obsidian-api)
2. [Unofficial Obsidian](https://marcus.se.net/obsidian-plugin-docs/)
3. [Templater](https://silentvoid13.github.io/Templater/introduction.html)

The Obisidan docs "help" with stuff regarding app.workspace and app.vault.
The Templater docs "help" with all tp related functions.


## User Script Functions in this repository

### log_template.js

Creates a daily note in the schema of "YYYY-MM-DD". If no folder exists for this month a log folder in the schema of "YYYY-MM" in your log folder is created. You can create a new note anywhere in the workspace and apply that template to it and if a daily note already exists, delete the new note, and open the existing daily note, otherwise move the new file to the monthly log folder and make this new note the daily note. Finally the daily note's tab is pinned.

Prerequisites: A folder where you keep your daily notes in. (Here: "Log".)

Usage: ```<%* tp.user.log_template(tp, "Log") -%>```