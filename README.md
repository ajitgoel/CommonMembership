
**MongoDB queries:** https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm

Equality	        db.mycol.find({"by":"tutorials point"})
Less Than	        db.mycol.find({"likes":{$lt:50}})
Less Than Equals	db.mycol.find({"likes":{$lte:50}})
Greater Than	    db.mycol.find({"likes":{$gt:50}})
Greater Than Equals	db.mycol.find({"likes":{$gte:50}})
Not Equals          db.mycol.find({"likes":{$ne:50}})

AND in MongoDB      db.mycol.find({$and: [{key1: value1}, {key2:value2}]})
OR in MongoDB      db.mycol.find({$or: [{key1: value1}, {key2:value2}]})   

db.firstLevelArrayDemo.find({StudentTechnicalSkills:{$in:["MongoDB"]}}).pretty();
{
   "StudentName" : "Chris",
   "StudentTechnicalSkills" : ["MongoDB","MySQL","SQL Server"]
}
{
   "StudentName" : "Robert",
   "StudentTechnicalSkills" : ["C","Java","C++"]
}

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

**VueJs:** : **Vue Router:** : https://router.vuejs.org/guide/essentials/named-routes.html
https://vuelidate.js.org/

**General Tips**
- [ ] when importing files,
   ./ refers to same folder
   ../ refers to go up one level
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

**Tasks**

- [x] ~~Configure Vuetify 2.0 with application~~
- [x] ~~Configure BootstrapVue with application~~
- [x] ~~Configure (and use) mailgun email provider to send emails.~~
- [x] ~~migrate to alanning:roles version 3.~~
- [ ] remove all packages that are not being used.
- [ ] Add server side validations using Collection2 and SimpleSchema.
- [ ] Write unit tests for server side code.
- [ ] Add Google SignIn Option.
- [ ] Host application in Google Cloud VM.
- [ ] create a proper email template and email sending provider.
- [x] ~~Configure LHS dashboard menu with links to various screens~~
	- [ ] LHS dashboard menu should be searchable
- [ ] Screens
	- [x] Navigation Bar
		- [x] ~~Register link should be changed to logout when the user has logged in.~~
		- [x] ~~Afer the user has logged in, the link should be changed to logout. ~~
		- [ ] Afer the user clicks logout the link should be changed to register and he should be directed to the home page-Remove VueSSR 
		- [x] ~~Logout functionality.~~
		- [x] ~~If there is an failure in logging out, then a failure message should be shown in a toast.~~
	- [ ] a. User management
		- [ ] 2. Add user
			- [ ] Add custom fields
		- [ ] 1. All users\Search users
			- [ ] sort indicator does not show on grid column
			- [ ] 
		- [ ] 3. Import users using CSV file
		- [ ] 4. Export users to CSV file
	- [ ] b. Register user screen
		- [x] ~~disable button when submitting form.~~
		- [x] ~~use verify email template when sending emails.~~
		- [ ] When the user registers, he should be logged in. to do this, the server side code needs to be broken down into 2 parts and each part needs to be called from the client one after another.
		- [x] ~~Show successmessage, failuremessage in common alert components~~
	- [ ] c. Verify Email
		- [ ] when user clicks on verify email link, it should verify token, login user and navigate user to dashboard screen.
		- [ ] Create screen with all domains for user, so he can select domain that he needs to navigate to.
	- [ ] d. Login user screen
		- [x] ~~disable button when submitting form.~~
		- [ ] Domain dropdown should be selected and an error shown when the user's login has multiple domains.
		- [ ] Create screen with all domains for user, so he can select domain that he needs to navigate to.
		- [x] ~~Show successmessage, failuremessage in common alert components~~
	- [ ] e. Reset Password
		- [x] ~~disable button when submitting form.~~
		- [x] ~~Change reset password template~~
		- [x] ~~when user clicks on reset password email link, it should navigate user to "change password" screen and allow user to reset the user's password.~~
		- [x] ~~reset password email link=>change password screen=> reset the user's password=> show message on login screen.~~
		- [ ] Check token expiration.
		- [x] ~~Show successmessage, failuremessage in common alert components~~
	- [x] f. Change Password
		- [x] ~~disable button when submitting form.~~
		- [x] ~~set focus on password textbox when user first navigates to screen.~~
		- [x] ~~Show successmessage, failuremessage in common alert components~~
	- [x] g. Contact us
		- [x] ~~disable button when submitting form.~~
		- [x] ~~Show successmessage, failuremessage in common alert components~~