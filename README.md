# YOYO Holdings Engineer Exam

This document contains [YOYO](https://github.com/yoyo-holdings)'s technical test.  This is a standard 
application that provides a simple organizer for the user to store notes
and TODOs.

* Instructions

  1. Fork this repository on your own personal GitHub account.
  2. Download your fork, build this app, and begin making changes.
  3. When finished, create a Pull Request to merge into YOYO's version,
     then send an email to [@aindong](https://github.com/aindong) to let him know you're ready for
     review.
  4. We will close the pull request.

  You may also submit your commits using =git format-patch=, should you
  prefer it over GitHub PRs.

* Specifications

  1. The app consists of two major activities:
     - a note-taking activity that accepts a `title` and `text` for one
       or more notes
     - a TODO tracking activity that accepts an `entry`, with a
       `checkbox` to show whether this entry has been done or not done
  2. The app should have a user interface that allows for easy access
     between the note-taking and TODO tracking activities as well as to
     see their details at a glance.
  3. The note-taking activity should provide a view for its notes in a
     reverse-chronological order, with options for updating and deleting
     old notes.
  4. The TODO-tracking activity should provide a view for its entries
     with options for updating and deleting old TODOs.
  5. The app should make it easy to switch between the note-taking and
     TODO-tracking activities.
  6. The app should make it easy to switch a note to a TODO entry, and
     vice versa.
  7. The app should consists of both frontend and backend.
  8. Use `TypeScript` for the frontend and backend
  9. Include Unit/Functional Tests and make sure both has 70% and up test coverage
  10. Wrap everything on a docker container and make sure we can run both frontend and backend using `docker-compose up`

* Questions

  In your PR/patch email, please also answer these following questions:

  - What design patterns did you use inside the application?
  - How did you manage your states?
  - What data protocol did you use to connect both backend and frontend?
    + Is this the best way to integrate data?
    + If yes, Why?
    + If no, Can you suggest more better ways?
  - What libraries did you use?
    + Why did you use this library?
    + Are there other libraries available?
    + If yes, what made you choose this library over the others?
  - What major challenges did you encounter when making the app?
  - If you had more time, what additional features would you like to
    add?

  In addition, you may provide more information in your PR/patch email
  that you would like us to know.

* Bonus Questions
  - Explain Hoisting to a 5 year old kid.
  - Explain Memoization to a 5 year old kid.

* Notes

  - You may use any open source libraries that you think would be useful
    for completing the test and improving this app.
  - You may implement the user interface in any way that you feel may
    improve the user experience.
  - You may use any development tools you have at your disposal to
    complete this test, so long as the resulting app is a standard
    JS/NodeJS application that can be built using the standard tooling
