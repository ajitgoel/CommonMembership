<template>
  <div class="col-lg-9 order-lg-2">
    <!-- Change avatar -->
    <!--<div class="card bg-gradient-warning hover-shadow-lg">
      <div class="card-body py-3">
        <div class="row row-grid align-items-center">
          <div class="col-lg-8">
            <div class="media align-items-center">
              <a href="#" class="avatar avatar-lg rounded-circle mr-3">
                <img alt="Image placeholder" src="/img/theme/light/team-1-800x800.jpg">
              </a>
              <div class="media-body">
                <h5 class="text-white mb-0">Heather Wright</h5>
                <div>
                  <form>
                    <input type="file" name="file-1[]" id="file-1" class="custom-input-file custom-input-file-link" data-multiple-caption="{count} files selected" multiple="">
                    <label for="file-1">
                      <span class="text-white">Change avatar</span>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto flex-fill mt-4 mt-sm-0 text-sm-right d-none d-lg-block">
            <a href="#" class="btn btn-sm btn-white rounded-pill btn-icon shadow">
              <span class="btn-inner--icon"><i class="fas fa-fire"></i></span>
              <span class="btn-inner--text">Upgrade to Pro</span>
            </a>
          </div>
        </div>
      </div>
    </div>-->
    <!-- Section title -->
    <div class="actions-toolbar py-2 mb-4">
      <h5 class="mb-1">Attach a new card</h5>
      <p class="text-sm text-muted mb-0">Add you credit card for faster checkout process.</p>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-5 col-lg-8">
            <span class="h6">Credit Card</span>
          </div>
          <div class="col-7 col-lg-4 text-right">
            <img alt="Image placeholder" src="/img/icons/cards/mastercard.png" width="40" class="mr-2">
            <img alt="Image placeholder" src="/img/icons/cards/visa.png" width="40" class="mr-2">
            <img alt="Image placeholder" src="/img/icons/cards/skrill.png" width="40">
          </div>
        </div>
      </div>
      <div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row align-items-center">
              <div class="col-sm-4"><small class="h6 text-sm mb-3 mb-sm-0">Plan</small></div>
              <div class="col-sm-5">
                <strong>Free</strong> plan, unlimited public repositories.
              </div>
              <div class="col-sm-3 text-sm-right">
                <a href="#" class="btn btn-sm btn-primary rounded-pill mt-3 mt-sm-0">Upgrade</a>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row">
              <div class="col-sm-4"><small class="h6 text-sm mb-3 mb-sm-0">Credit or debit cards</small></div>
              <div class="col-sm-8">
                <!-- First card -->
                <div class="row mb-3">
                  <div class="col-9">
                    <img alt="Image placeholder" src="/img/icons/cards/visa.png" class="mr-1" width="30">
                    x-1023 (Expires on 11/2018)
                  </div>
                  <div class="col-3 actions text-right">
                    <a href="#" class="action-item" data-toggle="tooltip" data-original-title="Remove card">
                      <i class="fas fa-trash-alt"></i>
                    </a>
                  </div>
                </div>
                <!-- Second card -->
                <div class="row">
                  <div class="col-9">
                    <img alt="Image placeholder" src="/img/icons/cards/skrill.png" class="mr-1" width="30">
                    x-3165 (Expires on 09/2017)
                  </div>
                  <div class="col-3 actions text-right">
                    <a href="#" class="action-item" data-toggle="tooltip" data-original-title="Remove card">
                      <i class="fas fa-trash-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row">
              <div class="col-sm-4"><small class="h6 text-sm mb-3 mb-sm-0">Other information</small></div>
              <div class="col-sm-8">
                <strong>$27.00 <small>U.S Dollar</small></strong>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row">
              <div class="col-sm-4"><small class="h6 text-sm mb-3 mb-sm-0">Your balance</small></div>
              <div class="col-sm-8">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Payment history -->
    <div class="mt-5">
      <div class="actions-toolbar py-2 mb-4">
        <h5 class="mb-1">Payment history</h5>
        <p class="text-sm text-muted mb-0">Add you credit card for faster checkout process.</p>
      </div>
      <div class="table-responsive">
        <table class="table table-hover table-cards align-items-center">
          <tbody>
            <tr>
              <th scope="row">
                <span class="badge badge-lg badge-dot">
                  <i class="bg-success"></i>
                </span>
              </th>
              <td>
                <i class="fas fa-calendar-alt mr-2"></i>
                <span class="h6 text-sm">May 20, 2018</span>
              </td>
              <td>#10015</td>
              <td><i class="fas fa-credit-card mr-2"></i>Visa ending in 2035</td>
              <td>$49.00 USD</td>
              <td class="text-right">
                <div class="actions">
                  <div class="dropdown">
                    <a class="action-item" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#"><i class="fas fa-file-pdf"></i>Download invoice</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-file-archive"></i>See details</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-trash-alt"></i>Delete</a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="table-divider"></tr>
            <tr>
              <th scope="row">
                <span class="badge badge-lg badge-dot">
                  <i class="bg-danger"></i>
                </span>
              </th>
              <td>
                <i class="fas fa-calendar-alt mr-2"></i>
                <span class="h6 text-sm">Apr 15, 2018</span>
              </td>
              <td>#10015</td>
              <td><i class="fas fa-credit-card mr-2"></i>Visa ending in 2035</td>
              <td><span class="text-danger">$39.00 USD</span></td>
              <td class="text-right">
                <div class="actions">
                  <div class="dropdown">
                    <a class="action-item" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#"><i class="fas fa-file-pdf"></i>Download invoice</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-file-archive"></i>See details</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-trash-alt"></i>Delete</a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="table-divider"></tr>
            <tr>
              <th scope="row">
                <span class="badge badge-lg badge-dot">
                  <i class="bg-success"></i>
                </span>
              </th>
              <td>
                <i class="fas fa-calendar-alt mr-2"></i>
                <span class="h6 text-sm">May 20, 2018</span>
              </td>
              <td>#10015</td>
              <td><i class="fas fa-credit-card mr-2"></i>Visa ending in 2035</td>
              <td>$49.00 USD</td>
              <td class="text-right">
                <div class="actions">
                  <div class="dropdown">
                    <a class="action-item" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#"><i class="fas fa-file-pdf"></i>Download invoice</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-file-archive"></i>See details</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-trash-alt"></i>Delete</a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="table-divider"></tr>
            <tr>
              <th scope="row">
                <span class="badge badge-lg badge-dot">
                  <i class="bg-danger"></i>
                </span>
              </th>
              <td>
                <i class="fas fa-calendar-alt mr-2"></i>
                <span class="h6 text-sm">Apr 15, 2018</span>
              </td>
              <td>#10015</td>
              <td><i class="fas fa-credit-card mr-2"></i>Visa ending in 2035</td>
              <td><span class="text-danger">$39.00 USD</span></td>
              <td class="text-right">
                <div class="actions">
                  <div class="dropdown">
                    <a class="action-item" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#"><i class="fas fa-file-pdf"></i>Download invoice</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-file-archive"></i>See details</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-trash-alt"></i>Delete</a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="table-divider"></tr>
            <tr>
              <th scope="row">
                <span class="badge badge-lg badge-dot">
                  <i class="bg-danger"></i>
                </span>
              </th>
              <td>
                <i class="fas fa-calendar-alt mr-2"></i>
                <span class="h6 text-sm">Apr 15, 2018</span>
              </td>
              <td>#10015</td>
              <td><i class="fas fa-credit-card mr-2"></i>Visa ending in 2035</td>
              <td><span class="text-danger">$39.00 USD</span></td>
              <td class="text-right">
                <div class="actions">
                  <div class="dropdown">
                    <a class="action-item" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#"><i class="fas fa-file-pdf"></i>Download invoice</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-file-archive"></i>See details</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-trash-alt"></i>Delete</a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Attach a new card -->
    <div class="mt-5">
      <div class="actions-toolbar py-2 mb-4">
        <h5 class="mb-1">Attach a new card</h5>
        <p class="text-sm text-muted mb-0">Add you credit card for faster checkout process.</p>
      </div>
      <form>
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-5 col-lg-8">
                <span class="h6">Credit Card</span>
                <p class="text-muted text-sm mt-2 mb-0 d-none d-lg-block">Safe money transfer using your bank account. We support Mastercard, Visa, Maestro and Skrill.</p>
              </div>
              <div class="col-7 col-lg-4 text-right">
                <img alt="Image placeholder" src="/img/icons/cards/mastercard.png" width="40" class="mr-2">
                <img alt="Image placeholder" src="/img/icons/cards/visa.png" width="40" class="mr-2">
                <img alt="Image placeholder" src="/img/icons/cards/skrill.png" width="40">
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row mt-3">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="form-control-label">Card number</label>
                  <div class="input-group input-group-merge">
                    <input type="text" class="form-control" data-mask="0000 0000 0000 0000" placeholder="4789 5697 0541 7546" 
                    autocomplete="off" maxlength="19">
                    <div class="input-group-append">
                      <span class="input-group-text"><i class="fas fa-credit-card"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-control-label">Name on card</label>
                  <input type="text" class="form-control" placeholder="John Doe">
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label class="form-control-label">Expiry date</label>
                  <input type="text" class="form-control" data-mask="00/00" placeholder="MM/YY" autocomplete="off" maxlength="5">
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label class="form-control-label">CVV code</label>
                  <div class="input-group input-group-merge">
                    <input type="text" class="form-control" data-mask="000" placeholder="746" autocomplete="off" maxlength="3">
                    <div class="input-group-append">
                      <span class="input-group-text"><i class="fas fa-question-circle"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-right">
              <button type="button" class="btn btn-sm btn-primary">Save card</button>
            </div>
          </div>
        </div>
        <!-- Add money using PayPal -->
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-6">
                <span class="h6">PayPal</span>
                <p class="text-sm text-muted mt-2 mb-0 d-none d-lg-block">Pay your order using the most known and secure platform for online money transfers. You will be redirected to PayPal to finish complete your purchase.</p>
              </div>
              <div class="col-6 text-right">
                <img alt="Image placeholder" src="/img/icons/cards/paypal-256x160.png" width="70">
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="btn-group btn-group-toggle d-flex" data-toggle="buttons">
              <label class="btn btn-sm btn-secondary flex-fill">
                <input type="radio" name="options" id="checkboxButton3"> $10
              </label>
              <label class="btn btn-sm btn-secondary flex-fill">
                <input type="radio" name="options" id="checkboxButton4"> $25
              </label>
              <label class="btn btn-sm btn-secondary flex-fill">
                <input type="radio" name="options" id="checkboxButton5"> $50
              </label>
              <label class="btn btn-sm btn-secondary flex-fill">
                <input type="radio" name="options" id="checkboxButton6"> $100
              </label>
            </div>
            <div class="text-right mt-3">
              <a href="#" class="btn btn-sm btn-primary">Pay with PayPal</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import '../../api/methods.js';
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
  },
}
</script>

<style lang="less" scoped>

</style>

