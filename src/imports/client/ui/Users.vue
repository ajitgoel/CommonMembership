<template>
  <div class="col-lg-9 order-lg-2">
    <div class="actions-toolbar py-2 mb-4">
      <h5 class="mb-1">Users</h5>
      <router-link v-bind:to="{ name: 'add-user', params: {domain:$route.params.domain} }" 
      class="small font-weight-bold">Add user</router-link> 
      <!--<p class="text-sm text-muted mb-0"></p>-->
    </div>

    <div class="alert alert-outline-warning" role="alert">
      To sort on a particular column, please click on the column header. 
    </div>

    <ejs-grid ref='grid' id='Grid' :dataSource="data" :allowPaging="true" :allowSorting='true' :allowFiltering='true' 
    :pageSettings='pageSettings' :toolbar='toolbarOptions' :allowExcelExport='true' :allowPdfExport='true' 
    :toolbarClick='toolbarClick' :showColumnChooser='true'>
      <e-columns>
        <e-column field='email' headerText='Email'></e-column>
        <e-column field='name' headerText='Name'></e-column>
        <e-column field='membershipLevel' headerText='Membership Level'></e-column>
      </e-columns>
    </ejs-grid>
    <br/>
    <SuccessAlert ref="successAlert" data-cy="successalert" v-bind:message='this.successMessage'/>              
    <ErrorAlert ref="errorAlert" data-cy="erroralert" v-bind:message='this.failureMessage'/>
  </div>
</template>

<script>
import '../../api/methods.js';
import { Meteor } from 'meteor/meteor';
import { MeteorErrors, StateVariables, SecureRoutes} from '../../api/constants';
import Vue from "vue";
import { GridPlugin, Page, Sort, Filter, Toolbar, ExcelExport, PdfExport, ColumnChooser} from "@syncfusion/ej2-vue-grids";

export default {
  data() {
    return {
      failureMessage:'',
      successMessage:'',
      
      data: [
          { email: '10248@gmail.com', name: 'VINET', membershipLevel: 32.38 },
          { email: '10249@gmail.com', name: 'TOMSP', membershipLevel: 11.61 },
          { email: '10250@gmail.com', name: 'HANAR', membershipLevel: 65.83 },
          { email: '10251@gmail.com', name: 'VICTE', membershipLevel: 41.34 },
          { email: '10252@gmail.com', name: 'SUPRD', membershipLevel: 51.3 },
          { email: '10253@gmail.com', name: 'HANAR', membershipLevel: 58.17 },
          { email: '10254@gmail.com', name: 'CHOPS', membershipLevel: 22.98 },
          { email: '10255@gmail.com', name: 'RICSU', membershipLevel: 148.33 },
          { email: '10256@gmail.com', name: 'WELLI', membershipLevel: 13.97 },
          { email: '10248@gmail.com', name: 'VINET', membershipLevel: 32.38 },
          { email: '10249@gmail.com', name: 'TOMSP', membershipLevel: 11.61 },
          { email: '10250@gmail.com', name: 'HANAR', membershipLevel: 65.83 },
          { email: '10251@gmail.com', name: 'VICTE', membershipLevel: 41.34 },
          { email: '10252@gmail.com', name: 'SUPRD', membershipLevel: 51.3 },
          { email: '10253@gmail.com', name: 'HANAR', membershipLevel: 58.17 },
          { email: '10254@gmail.com', name: 'CHOPS', membershipLevel: 22.98 },
          { email: '10255@gmail.com', name: 'RICSU', membershipLevel: 148.33 },
          { email: '10256@gmail.com', name: 'WELLI', membershipLevel: 13.97 }
      ],      
      toolbarOptions: ['CsvExport', 'ExcelExport', 'PdfExport', 'ColumnChooser'] ,
      pageSettings: { pageSize: 10 },      
      filterSettings: { type: "CheckBox" }
    };
  },
  provide: {
    grid: [Page, Sort, Filter, Toolbar, ExcelExport, PdfExport, ColumnChooser]
  },
  methods: 
  {
      toolbarClick: function(args) 
      {
        let domain= this.$root.getValue(StateVariables.SelectedDomain);
        let filename=`AllUsersForDomain-${domain}`;
        
        switch (args.item.text) 
        { 
          case 'PDF Export': 
              this.$refs.grid.pdfExport({fileName:`${filename}.pdf`}); 
              break; 
          case 'Excel Export':  
                this.$refs.grid.excelExport({fileName:`${filename}.xlsx` }); 
              break; 
          case 'CSV Export': 
                this.$refs.grid.csvExport({fileName:`${filename}.csv`}); 
              break; 
      }
    }
  },
}
/*mounted() 
  {
    Meteor.call('getUsersDetailForDomain', 'clearcrimson', (error, result)=>
    {
      if(error) 
      {     
        if(error.error && error.error===MeteorErrors.NotAuthorized)
        {
          this.failureMessage='There was an error getting all users information. Our administrators have been notified of the issue and we will have a look.';
          return;  
        }            
        this.failureMessage='There was an error getting all users information. Our administrators have been notified of the issue and we will have a look.';
        return;
      } 
      if(result) 
      {
        this.items=result;
        this.totalRows = this.items.length
        return;
      }
    });
  },
}*/

</script>
<style lang="less" scoped>
</style>