
***Live link:  https://frabjous-pudding-1bab70.netlify.app/


To avoid the page-not-found error whenever you are either trying to access your app or you're on other routes, you have to set up a redirect and rewrite rules for your react-router application.

The redirect rule will help your application avoid a 404 error. All requests will get redirected to the /index.html instead of giving a 404 error.

To configure your redirect rules, you have to create a file that does not have an extension named (_redirects) inside your public folder.

Include the following command in the _redirects file:

/*    /index.html  200