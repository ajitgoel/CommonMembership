import { Meteor } from 'meteor/meteor';

/*Meteor.publish('currentUserId', function () 
{
  console.warn(`Meteor publish currentUserId called with ${this.userId}`);
  return this.userId;
});*/

Meteor.publish('userData', function () 
{  
  console.warn(`inside Meteor publish null property:${this.userId}`);
  if (this.userId) 
  {
    return Meteor.users.find({ '_id': this.userId });
  } 
  else 
  {
    this.ready();
  }
})
