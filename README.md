- - -

**MongoDB queries:** https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm

**Equality**	        db.mycol.find({"by":"tutorials point"})
**Less Than**	        db.mycol.find({"likes":{$lt:50}})
**Less Than Equals**	db.mycol.find({"likes":{$lte:50}})
**Greater Than**	    db.mycol.find({"likes":{$gt:50}})
**Greater Than Equals**	db.mycol.find({"likes":{$gte:50}})
**Not Equals**          db.mycol.find({"likes":{$ne:50}})

**AND in MongoDB **     db.mycol.find({$and: [{key1: value1}, {key2:value2}]})
**OR in MongoDB**      db.mycol.find({$or: [{key1: value1}, {key2:value2}]})   

db.firstLevelArrayDemo.find({StudentTechnicalSkills:{$in:["MongoDB"]}}).pretty();
{
   "StudentName" : "Chris",
   "StudentTechnicalSkills" : ["MongoDB","MySQL","SQL Server"]
}
{
   "StudentName" : "Robert",
   "StudentTechnicalSkills" : ["C","Java","C++"]
}

**Query an Array:**
// all documents where the field tags value is an array with exactly two elements, "red" and "blank", in the specified order:
db.inventory.find( { tags: ["red", "blank"] } )

//find an array that contains both elements, without regard to order or other elements in the array:
db.inventory.find( { tags: { $all: ["red", "blank"] } } )

**Query an Array for an Element**
db.inventory.find( { tags: "red" } )

**Project Fields to Return from Query**
//Return All Fields in Matching Documents
db.inventory.find( { status: "A" } )
//Return the Specified Fields and the _id Field Only
db.inventory.find( { status: "A" }, { item: 1, status: 1 } )
//Suppress _id Field
db.inventory.find( { status: "A" }, { item: 1, status: 1, _id: 0 } )

**MongoDB return True if document exists**
db.mycollection.find({'UserIDS':newID}).count()>0?true:false;
- - -

**Links;**
https://cleverbeagle.com/pup/v1/the-basics/mongodb-collections#the-documents-collection
**Loggly url:** https://ajitgoel.loggly.com/search
**Monti url(Application Performance Management):** https://app.montiapm.com/apps/uzHNSfFSABcizHjyj/dashboard/overview
**Atmostphere package manager:** https://atmospherejs.com/meteor/accounts-password
**Vuelidate validation package:** https://vuelidate.netlify.com/#getting-started
**vue-meteor-tracker:** https://github.com/meteor-vue/vue-meteor-tracker
**Communication between Vue components in Meteor: ** https://medium.com/@gustaw.daniel/communication-between-vue-components-in-meteor-29006be3dae9
**Testing with meteor:** https://guide.meteor.com/testing.html
**working with Collections:** https://docs.meteor.com/api/collections.html
https://github.com/Meteor-Community-Packages/meteor-roles
**Running meteor at scale:** https://www.freecodecamp.org/news/scaling-meteor-a-year-on-26ee37588e4b/
**Meteor Roles Package:** https://github.com/Meteor-Community-Packages/meteor-roles/tree/v3
**Faker.js:** https://github.com/marak/Faker.js/
**Simple Schema:** https://github.com/aldeed/simple-schema-js
**Meteor Collection2:** https://github.com/Meteor-Community-Packages/meteor-collection2
**Font Awesome: **https://fontawesome.com/icons?d=gallery&q=eye&m=free

**VueJs:** : **Vue Router:** : https://router.vuejs.org/guide/essentials/named-routes.html
https://vuelidate.js.org/

**General Tips**
- [ ] when importing files,
   ./ refers to same folder
   ../ refers to go up one level, where .. refers to parent directory.
- [ ] If you are running tests, run the "setx TEST-WATCH 1" before you run your tests. 
- [ ] **Install applicaton: **meteor npm i
- [ ] **Start app:** npm run start

**Meteorjs Tips**
- [ ] On the client and server side use Meteor.userId(). Using Meteor.user() on server queries the database and is not recommended.
- [ ] On the server, within a publish function, calling either Meteor.userId() or Meteor.user() will cause an error. Instead, use this.userId or Meteor.users.findOne(this.userId), respectively.
- [ ] On the client, Meteor.userId() and Meteor.user() will not throw errors and this.userId will not work. Calls to Meteor.user() are essentially equivalent to Meteor.users.findOne(Meteor.userId()), but since this corresponds to a mini-mongo DB query, performance probably won't be a concern. However, for security reasons the object returned by Meteor.user() may be incomplete (especially if the autopublish package is not installed).
- [ ] meteor list --tree lists the various meteor packages and thier interdependencies. 

**Javascript Tips**
- [x] **check variable is null or undefined: **
a. if (variable === undefined || variable === null) 
b. if (variable==null) 

**Vuejs Tips**
- [x] **creating a component and using in a screen example: ** CardFooter.vue component is used in PrivacyPolicy.vue
- [x] For page load work, use **created()** event(if you are not accessing DOM) or **mounted()** event in Vuejs component
- [x] By injecting the router in the application, we get access to the router as ==this.$router== as well as the current route as ==this.$route== inside of any component.

**Integration tests with Cypress**
**npm run test**
**Cypress API commands:** https://docs.cypress.io/api/cypress-api/custom-commands.html#Parent-Commands
**Cypress Best Practices:** https://docs.cypress.io/guides/references/best-practices.html#Having-tests-rely-on-the-state-of-previous-tests

**Tasks**

- [x] ~~Configure Vuetify 2.0 with application~~
- [x] ~~Configure BootstrapVue with application~~
- [x] ~~Configure (and use) mailgun email provider to send emails.~~
- [x] ~~migrate to alanning:roles version 3.~~
- [x] ~~Remove vue-ssr package as it does not allow logoff to work~~
- [x] ~~Move ui folder to client folder to make building application faster~~
- [x] ~~Configure LHS dashboard menu with links to various screens~~
	- [ ] LHS dashboard menu should be searchable
- [x] ~~Store session variables in localstorage~~
- [ ] ==User should be logged off if he has not used the application for predefined amount of time. ==
- [ ] ==Add audit log when any event happens. Add UI for audit log.==
- [ ]  ==Add try catch around all server side code blocks ==
- [ ] remove all packages that are not being used.
- [ ] Add server side validations using Collection2 and SimpleSchema.
- [ ] Write unit tests for server side code.
- [ ] Add Google SignIn Option.
- [ ] Digital Ocean tasks
	- [x] ~~Host application~~
	- [ ] Application should have SSL certificate
	- [ ] Application should have custom domain
- [ ] create a proper email template and email sending provider.
- [ ] Screens
	- [x] Navigation Bar
		- [x] ~~Register link should be changed to logout when the user has logged in.~~
		- [x] ~~After the user has logged in, the link should be changed to logout. ~~
		- [x] ~~Afer the user clicks logout the link should be changed to register and he should be directed to the home page-Remove VueSSR~~
		- [x] ~~Logout functionality.~~
		- [x] ~~If there is an failure in logging out, then a failure message should be shown in a toast-Not required.~~
	- [ ] ++a. User management++
		- [ ] ++1. All users\Search users++
			- [x] ~~sort indicator does not show on grid column~~
			- [x] ~~Remove bootstrapVue and use SyncFusion grid which also allows user to download data in csv, excel, pdf file.~~
			- [x] ~~allow user to specify which columns he wants to see~~
			- [x] ~~first name, last name should show under name column. https://ej2.syncfusion.com/vue/documentation/grid/columns/#valueaccessor~~
			- [ ] show tickets with detail link using "row details support": https://bootstrap-vue.js.org/docs/components/table
			- [ ] allow bulk(delete) operations
			- [ ] add checkbox to the left of each row.
			- [ ] Add edit, delete links below each row.
			- [ ] ===> clicking on email should navigate user to user edit screen.==
		- [ ] ++2. Add user++
			- [ ] Add custom fields
			- [x] ~~Send enrollment email to users to allow users to be verified.~~
			- [ ] if email\emails exist for the domain then an warning should be returned back to the UI.
			- [ ] if a email is added that is previously present for another domain then the domain list should be updated for the emailid.
			- [x] ~~clicking on "Show password" should show password, show hide, cancel buttons.~~
			- [x] ~~hide button should hide password.~~
			- [x] ~~cancel button should change "hide password" to "show password".~~
			- [x] ~~Encrypt password in database.~~
		- [ ] ++3. Import users using CSV file++
			- [x] ~~use https://github.com/julianasobreira/parse-csv/blob/9f45393e47cc523ffeb7bd23d8ee3cc95d251a99/src/components/Parse.vue~~
			- [ ] when file is selected, the label should specify the selected file name.
			- [ ] if a email is added that is previously present for another domain then the domain list should be updated for the emailid.
			- [ ] if email\emails exist for the domain then an warning should be returned back to the UI.
			- [ ] success message with the number of users added, should be returned from the backend.
		- [ ] ++4. Export users to CSV file++
	- [ ] ++b. Register user screen++
		- [x] ~~disable button when submitting form.~~
		- [x] ~~use verify email template when sending emails.~~
		- [x] ~~When the user registers, he should be logged in.~~
		- [x] ~~Show successmessage, failuremessage in common alert components~~
		- [ ] if there is a failure sending an email, then perhaps a different error message needs to be shown.
	- [ ] ++c. Verify Email++
		- [x] ~~when user clicks on verify email link, it should verify token and navigate user to login screen with message.~~
		- [x] ~~Not Required: Create screen with all domains for user, so he can select domain that he needs to navigate to.~~
		- [ ] An email should be send when the email has been verified. 
	- [ ] ++d. Login user screen++
		- [x] ~~disable button when submitting form.~~
		- [x] ~~login screen not working with roles package version 3~~
		- [x] ~~Domain dropdown should be selected and an error shown when the user's login has multiple domains.~~
		- [ ] Create screen with all domains for user, so he can select domain that he needs to navigate to.
		- [x] ~~Show successmessage, failuremessage in common alert components~~
		- [x] ~~logout functionality does not work after the user has logged in.~~
	- [ ] ++e. Reset Password++
		- [x] ~~disable button when submitting form.~~
		- [x] ~~Change reset password template~~
		- [x] ~~when user clicks on reset password email link, it should navigate user to "change password" screen and allow user to reset the user's password.~~
		- [x] ~~reset password email link=>change password screen=> reset the user's password=> show message on login screen.~~
		- [ ] Check token expiration.
		- [x] ~~Show successmessage, failuremessage in common alert components~~
	- [x] ++f. Change Password++
		- [x] ~~disable button when submitting form.~~
		- [x] ~~set focus on password textbox when user first navigates to screen.~~
		- [x] ~~Show successmessage, failuremessage in common alert components~~
	- [x] ++g. Contact us++
		- [x] ~~disable button when submitting form.~~
		- [x] ~~Show successmessage, failuremessage in common alert components~~
	- [ ] ++g. End to end integration testing using Cypress++
		- [ ] move all constant variables into a config file.
		- [ ] use Cypress server, routes, wait to check if the system has navigated to a screen after a button is clicked. **Wait for application to load:** https://docs.cypress.io/faq/questions/using-cypress-faq.html#How-do-I-wait-for-my-application-to-load
		- [ ] Add more checks to see that the correct error messages are showing up.

**MUP Commands:**
- [ ] mup.cmd setup --verbose
- [ ] mup.cmd deploy --verbose
- [ ] mup.cmd logs --verbose