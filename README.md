**Loggly url:** https://ajitgoel.loggly.com/search
**Atmostphere package manager:** https://atmospherejs.com/meteor/accounts-password
**Vuelidate validation package:** https://vuelidate.netlify.com/#getting-started
**vue-meteor-tracker:** https://github.com/meteor-vue/vue-meteor-tracker
**Communication between Vue components in Meteor: ** https://medium.com/@gustaw.daniel/communication-between-vue-components-in-meteor-29006be3dae9

**Testing with meteor:** https://guide.meteor.com/testing.html
**working with Collections:** https://docs.meteor.com/api/collections.html
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

https://cleverbeagle.com/pup/v1/the-basics/mongodb-collections#the-documents-collection
https://github.com/Meteor-Community-Packages/meteor-roles
**Running meteor at scale:** https://www.freecodecamp.org/news/scaling-meteor-a-year-on-26ee37588e4b/

**VueJs:**
**Vue Router:** https://router.vuejs.org/guide/essentials/named-routes.html
https://vuelidate.js.org/

**General Tips**
- [ ] when importing files,
   ./ refers to same folder
   ../ refers to go up one level
- [ ] If you are running tests, run the "setx TEST-WATCH 1" before you run your tests. 
- [ ] **Install applicaton: **meteor npm i
- [ ] **Start app:** npm run start

**Meteorjs Tips**
- [ ] On the client and server side use Meteor.userId(), except the publish functions, where you should use this.userId(). using Meteor.user() on server queries the database and is not recommended.

**Javascript Tips**
- [ ] **check variable is null or undefined: **
a. if (variable === undefined || variable === null) 
b. if (variable==null) 

**Vuejs Tips**
- [ ] **creating a component and using in a screen example: ** CardFooter.vue component is used in PrivacyPolicy.vue
- [ ] For page load work, use **created()** event(if you are not accessing DOM) or **mounted()** event in Vuejs component

**Tasks**

- [x] ~~Configure Vuetify 2.0 with application~~
- [x] ~~Configure BootstrapVue with application~~
- [ ] migrate to alanning:roles version 3.
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
		- [ ] Afer the user has logged in, the logout link should not changed to register, when the browser is refreshed.
		- [x] ~~Logout functionality.~~
		- [x] ~~If there is an failure in logging out, then a failure message should be shown in a toast.~~
		- [ ] When user clicks log out, an toast alert is shown, the system still changes the logout link to register. This is an issue with mounted event and EventBus.On event. This should not happen.
	- [ ] User management
		- [ ] Add user
			- [ ] Add custom fields
		- [ ] Allusers\Search users
		- [ ] Import users using CSV file
		- [ ] Export users to CSV file
	- [ ] Login screen
		- [ ] Domain dropdown should be selected and an error shown when the user's login has multiple domains. 