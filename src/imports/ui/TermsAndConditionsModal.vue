<template>  
  <div class="modal fade docs-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="TermsAndConditionsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title h6" id="TermsAndConditionsModalLabel">Terms and Conditions</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">  
          <TermsAndConditionsText/>	
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Download PDF</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TermsAndConditionsModal",
  components:{
  },
}
</script>

<style lang="less" scoped>

</style>
