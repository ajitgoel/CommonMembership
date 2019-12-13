<template>
  <b-container fluid>
    <b-row>
      
      <b-col lg="6" class="my-1">
        <b-form-group label="Filter" label-cols-sm="3" label-align-sm="right" label-size="sm" label-for="filterInput"
          class="mb-0">
          <b-input-group size="sm">
            <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>            
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col sm="7" md="6" class="my-1">
        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" 
        class="my-0"></b-pagination>
      </b-col>
    </b-row>

    <b-table show-empty small stacked="md" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage"
      :filter="filter" :filterIncludedFields="filterOn" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" 
      :sort-direction="sortDirection" @filtered="onFiltered">
      <template v-slot:cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
    <ErrorAlert ref="errorAlert" v-bind:message='this.failureMessage'/>
    
  </b-container>

</template>

<script>
import '../api/methods.js';
import { Meteor } from 'meteor/meteor';

export default 
{  
  components: 
  {
  },
  data() {
    return {    
      failureMessage:'',
      items:[],
      fields: [
        { key: 'name', label: 'Name', sortable: true, sortDirection: 'desc' },
        { key: 'email', label: 'Email', sortable: true, sortDirection: 'desc' },
        { key: 'username', label: 'User Name', sortable: true},
        { key: 'ticketOrders', label: 'Ticket orders', sortable: true, class: 'text-center' },
        { key: 'membershipLevel', label: 'Membership Level', sortable: true},
        { key: 'actions', label: '' }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      }
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },
  mounted() 
  {
    Meteor.call('getUsersForDomain', 'clearcrimson', (error, result)=>
    {
      if(error) 
      {     
        if(error.error && error.error==='not-authorized')
        {
          this.failureMessage='There was an error logging you in. Our administrators have been notified of the issue and we will have a look.';
          return;  
        }            
        this.failureMessage='There was an error retreiving results. Our administrators have been notified of the issue and we will have a look.';
        return;
      } 
      if(result) 
      {
        /*if(result.userId && result.domain) 
        {                 
          Meteor.loginWithPassword(email, password);
          this.$router.push({ name: 'dashboard', params: { domain: result.domain }});                   
          return;
        }*/          
        if(result.users)
        {                 
          this.items=JSON.parse(JSON.stringify(result.users));
          this.totalRows = this.items.length
          return;
        }
      }
    });
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
}
</script>

<style lang="less" scoped>
</style>