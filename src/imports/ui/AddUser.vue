<template>
  <form>
    <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Name" required 
    @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
    <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()"
      @blur="$v.email.$touch()"></v-text-field>
    <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Item" required 
    @change="$v.select.$touch()" @blur="$v.select.$touch()"></v-select>
    <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Do you agree?" required 
    @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()" ></v-checkbox>
    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
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
<style lang="less" scoped>

</style>
