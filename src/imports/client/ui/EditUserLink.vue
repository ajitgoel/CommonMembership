<template>
    
</template>

<script>
import '../../api/methods.js';
import { Meteor } from 'meteor/meteor';
import { MeteorErrors, StateVariables, SecureRoutes} from '../../api/constants';
import Vue from "vue";
import { GridPlugin, Page, Sort, Filter, Resize, Toolbar, ExcelExport, PdfExport, ColumnChooser} from "@syncfusion/ej2-vue-grids";
import routes from '../../routes';

export default {
  data() {
    return {
    };
  },
  methods: 
  {
    edituser() 
    {
      routes.push({name:SecureRoutes.AddUser,params: {domain:$route.params.domain} });
    }
  },
}
</script>
<style lang="less" scoped>
</style>