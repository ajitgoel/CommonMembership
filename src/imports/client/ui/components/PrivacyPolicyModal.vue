<template>
  <div class="modal fade docs-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="PrivacyPolicyModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title h6" id="PrivacyPolicyModalLabel">Privacy Policy</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        
        <div class="modal-body">  
          <PrivacyPolicyText/>					
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
  name: "PrivacyPolicyModal",
  components:{
  },
}
</script>

<style lang="less" scoped>

</style>
