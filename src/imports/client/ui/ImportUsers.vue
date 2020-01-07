<template>
  <div class="order-lg-2">
    <div class="actions-toolbar py-2 mb-4">
      <h5 class="mb-1">Import users from a CSV file</h5>
      <!--<p class="text-sm text-muted mb-0">Create a brand new user and add them to this site.</p>-->
    </div>
    <form role="form">
      <div valign="top">
        <div class="row">
          <div class="col-md-3">
              <label class="form-control-label">CSV file</label>
          </div>
          <div class="col-md-9">
            <input data-cy="fileInput" type="file" ref="fileInput" name="fileInput[]" id="fileInput" class="custom-input-file"
            accept=".xls,.xlsx,.csv"/>
            <label for="fileInput">
                <i class="fa fa-upload"></i>
                <span>Choose a file…</span>
            </label>
            <span>
              You may want to see <a href="/csv/import.csv">the example of the CSV file</a>.							
            </span>
            
          </div>
        </div>   
      
        <div class="row">
          <div class="col-md-3">
              <label class="form-control-label">Notification</label>
          </div>
          <div class="col-md-9">
            <div class="custom-control custom-checkbox" 
            v-bind:class="{ 'is-invalid': submitted && $v.sendUserNotification.$error }">
              <input type="checkbox" data-cy="sendusernotification" class="custom-control-input" id="sendUserNotification" 
              v-model="sendUserNotification">
              <label class="custom-control-label" for="sendUserNotification">Send to new users</label>                   
            </div>
            
          </div>
        </div>
      </div>  
      
      <div class="pt-2 mt-2 delimiter-top text-left">      
        <button data-cy="importusers" v-bind:disabled="this.disableButton" v-on:click="ImportUsers()" id="importusers" 
        type="button" class="btn btn-sm btn-primary">Import Users</button>
      </div>

    </form>
    <br/>
    <SuccessAlert ref="successAlert" data-cy="successalert" v-bind:message='this.successMessage'/>              
    <ErrorAlert ref="errorAlert" data-cy="erroralert" v-bind:message='this.failureMessage'/>

  </div>
</template>

<script>
import '../../api/methods.js';
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { Meteor } from 'meteor/meteor';
import {MeteorErrors, StateVariables, SecureRoutes, NonEmptyString} from '../../api/constants';
import Papa from 'papaparse';

export default {
  name: "ImportUsers",
  components:{
  },
  data() {
    return {
      doc: null,
      submitted: false,
      disableButton:false,      
      failureMessage:'',
      successMessage:'',
      sendUserNotification:false
    };
  },
  validations: 
  {
  },
  methods: 
  {  
    ImportUsers() 
    {
      const fileToLoad = this.$refs.fileInput.files[0];
      const fileReader = new FileReader();
      
      let domain= this.$root.getValue(StateVariables.SelectedDomain);
      let errorMessage='There was an error importing the users. Our administrators have been notified of the issue and we will have a look.';
      let that=this;
      fileReader.onload = fileLoadedEvent => 
      {
        Papa.parse(fileLoadedEvent.target.result, 
        {
          header: true,
          skipEmptyLines: true, 
          /*before: function(file, inputElem)
          {
            console.warn(`${file} ${inputElem}`);
          },*/
          complete(results) 
          {
            that.disableButton=true;
            Meteor.call('addUsersForExistingDomain', domain, results.data, that.sendUserNotification, (error, result)=>
            {
              that.disableButton=false;
              if(error) 
              {     
                if(error.error && error.error===MeteorErrors.NotAuthorized)
                {
                  that.failureMessage=MeteorErrors.NotAuthorizedFailureMessage;
                  return;  
                } 
                that.failureMessage=errorMessage;
                return;
              } 
              if(result) 
              {
                that.successMessage='Users were added successfully.';
                that.sendUserNotification=false;
                that.$v.$reset();
                return;
              }
            });
          },
          error(errors) 
          {
            that.failureMessage=errorMessage;
          }
        });
      }
      fileReader.readAsText(fileToLoad);
    },
  },
}
</script>

<style lang="less" scoped>

</style>
