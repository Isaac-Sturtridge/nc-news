# Frontend for Iz-NC-News

Welcome to Iz-NC-News. This is a demonstration of a news app. You can find the link to the deployed site here: 
https://iz-nc-news.netlify.app/articles

## The app

Imagine the site is a news site. Currently, the site's main mode of interaction is articles. In the current iteration they are pre-filled with generic articles from a database.

Articles can be read, and they can accept votes (up or down) and comments from users. Users can also delete their own comments.

Users can view articles filtered by topics. They can also sort the article list (filtered or unfiltered) by votes, comment count, date created, and choose ascending or descending order.

To use the app, try navigating the site. To sidestep one known issue, if you have filtered by topic and then want to see the whole article list again, rather than clicking 'Articles' on the navbar, click 'Topics' -> 'Article'. Current implementation is a generic logged-in user, chosen from the database as 'jess-jelly'. Adding articles is planned, followed by user authentication.

## Backend

The backend implementation of this app can be found at https://github.com/Isaac-Sturtridge/iz-nc-news

## Requirements

To run locally:

You will require:
Node: v21.0.0

To clone, use `git clone <repo-url>`, and `cd` into the project directory using your command line, running it with VS Code or your preferred coding environment.