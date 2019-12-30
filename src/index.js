import './imports/api/methods';

if (Meteor.isClient) 
{
  import './imports/client';
  //import 'bootstrap/dist/css/bootstrap.css';
  //import 'bootstrap-vue/dist/bootstrap-vue.css';

  import '@syncfusion/ej2-base/styles/bootstrap4.css';  
  import '@syncfusion/ej2-buttons/styles/bootstrap4.css';  
  import '@syncfusion/ej2-calendars/styles/bootstrap4.css';  
  import '@syncfusion/ej2-dropdowns/styles/bootstrap4.css';  
  import '@syncfusion/ej2-inputs/styles/bootstrap4.css';  
  import '@syncfusion/ej2-navigations/styles/bootstrap4.css';
  import '@syncfusion/ej2-popups/styles/bootstrap4.css';
  import '@syncfusion/ej2-splitbuttons/styles/bootstrap4.css';
  import '@syncfusion/ej2-vue-grids/styles/bootstrap4.css';
} 
else if (Meteor.isServer) 
{
  import './imports/server';
  import './imports/server/logging';  
}
