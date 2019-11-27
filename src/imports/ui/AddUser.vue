<template>
  <form>
    <v-label dense>Add new user</v-label><br/>
    <v-label dense>Create a brand new user and add them to this site.</v-label>
    <v-text-field v-model="username" :error-messages="usernameErrors" :counter="10" label="Username" required 
      @input="$v.username.$touch()" @blur="$v.username.$touch()"></v-text-field>
    <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()"
      @blur="$v.email.$touch()"></v-text-field>
    <v-text-field v-model="firstname" label="First Name" @input="$v.firstname.$touch()" @blur="$v.firstname.$touch()"></v-text-field>
    <v-text-field v-model="lastname" label="Last Name" @input="$v.lastname.$touch()" @blur="$v.lastname.$touch()"></v-text-field>
    
    <v-label dense>Password</v-label> <v-btn class="mr-4" @click="showPassword">Show password</v-btn>

    <v-checkbox v-model="sendUserNotification" label="Send user notification?" @change="$v.sendUserNotification.$touch()" 
    @blur="$v.sendUserNotification.$touch()" dense></v-checkbox>
    <v-select v-model="role" :items="roles" :error-messages="roleErrors" label="Role" required  @change="$v.roles.$touch()" 
    @blur="$v.role.$touch()"></v-select>
    <v-btn class="mr-4" @click="submit">Add new user</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate';
  import { required, maxLength, email } from 'vuelidate/lib/validators';

  export default 
  {
    mixins: [validationMixin],
    data: () => ({
      username:'',
	    email:'',
    	firstname:'',
    	lastname:'',
    	sendUserNotification:false,
	    role:null,
      roles: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
    }),
    validations: 
    {
      username: { required, maxLength: maxLength(10) },
      email: { required, email },
      role: { required },
    },
    computed: 
    {
      roleErrors () 
      {
        const errors = [];
        if (!this.$v.role.$dirty) 
        {
          return errors;
        }
        !this.$v.role.required && errors.push('Role is required');
        return errors;
      },
      usernameErrors () 
      {
        const errors = [];
        if (!this.$v.username.$dirty) 
        {
          return errors;
        }
        !this.$v.username.maxLength && errors.push('Username must be at most 10 characters long');
        !this.$v.username.required && errors.push('Username is required.');
        return errors;
      },
      emailErrors () 
      {
        const errors = [];
        if (!this.$v.email.$dirty) 
        {
          return errors;
        }
        !this.$v.email.email && errors.push('Must be valid e-mail');
        !this.$v.email.required && errors.push('E-mail is required');
        return errors;
      },
    },
    methods: 
    {
      showPassword()
      {
        this.$v.$touch();
      },
      submit () 
      {
        this.$v.$touch();
      },
    },
  }
</script>

<!--
<script>
import '../api/methods.js';
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

export default {
  name: "Login",
  components:{
  },
  data() {
    return {
      user: {
        emailpasswordInvalid:false,
        email: "",
        password: "",
        domain: "",
        domains:[]                
      },
      submitted: false,
      failureMessage:'',
    };
  },
  validations: 
  {
    user: 
    {
      email: { required, email },
      password:  { required, minLength: minLength(6) },
      domain: {domainSelected(val)
      {
        if (this.user.domains && this.user.domains.length>0 && val && val === 'Select domain') 
        {
          return false;
        }
        return true;
      }},    
    },    
  },
  methods: 
  { 
    LoginUserForDomain() 
    {
      this.submitted = true;
      this.failureMessage='';
      this.user.emailpasswordInvalid=false;

      this.$v.$touch();//it will validate all fields
      if (this.$v.$invalid) 
      {
          return;
      }
      Meteor.call('loginUserForDomain', this.user.email, this.user.password, this.user.domain, 
        (error, result) => 
        {
          if(error) 
          {     
            if(error.error && error.error==='email-password-invalid')
            {
              this.user.emailpasswordInvalid=true;
              return;  
            }
            this.failureMessage='There was an error logging you in. Our administrators have been notified of the issue and we will have a look.';
            return;
          } 
          if(result) 
          {
            if(result.userId && result.domain) 
            {                 
              Meteor.loginWithPassword(email, password);
              this.$router.push({ name: 'dashboard', params: { domain: result.domain }});                   
              return;
            }
            if(result.domains)
            {                 
              this.user.domains=JSON.parse(JSON.stringify(result.domains));
              return;
            }
          }
        }
        );
    },
  },
}
</script>
-->
