<script setup>
import { reactive } from "vue";
// import { useUserStore } from "@/stores/user";
import { useRouter, useRoute } from "vue-router";
import { useForm, useField } from "vee-validate";
import * as Yup from "yup";

const router = useRouter();
const route = useRoute();

// const userStore = useUserStore();

const form = reactive({
  isShowPassword: true,
  username: "",
  password: "",
  passwordType: "password",
  isShowLogin: false,
  confirmPassword: "",
  confirmPasswordType: "password",
  isShowConfirmPassword: true,
});
const phoneRegExp = '^[0-9]{10}$'

const schema = Yup.object({
  username: Yup.string().required().min(4),
  email: Yup.string().email().required(),
  firstName: Yup.string().required().min(3),
  lastName: Yup.string().required().min(3),
  password: Yup.string().required().min(4),
  confirmPassword: Yup.string().required().min(4),
  phoneNumber: Yup.string().matches(new RegExp(phoneRegExp)).required()
});

const { handleSubmit, setFieldError, meta } = useForm({
  validationSchema: schema,
});

const { value: username, errorMessage: errorUsername } = useField("username");
const { value: password, errorMessage: errorPassword } = useField("password");
const { value: confirmPassword, errorMessage: errorConfirmPassword } = useField('confirmPassword');
const { value: firstName, errorMessage: errorFirstName } =
  useField("firstName");
const { value: lastName, errorMessage: errorLastName } = useField("lastName");
const { value: email, errorMessage: errorEmail } = useField("email");
const { value: phoneNumber, errorMessage: errorPhoneNumber } =
  useField("phoneNumber");

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  if (values.password !== values.confirmPassword) {
    setFieldError("confirmPassword", "Password not matched with confirm");
  } else {
    const res = await userStore.login(
      values.username.toLowerCase(),
      values.password
    );
    if (res.status.code === 0) {
      router.push({
        name: "home",
      });
      resetForm();
    } else {
      setFieldError("password", res.status.message);
      resetForm();
    }
  }
});

const showPassword = (type) => {
  if (type === "password") {
    form.isShowPassword = !form.isShowPassword;
    form.passwordType =
      form.passwordType === "password" ? "text" : "password";
  }
  if (type === "confirmPassword") {
    form.isShowConfirmPassword = !form.isShowConfirmPassword;
    form.confirmPasswordType =
      form.confirmPasswordType === "password" ? "text" : "password";
  }
};
</script>

<template>
  <main class="main container h-100 d-flex justify-content-center">
    <div class="card login-card">
      <div class="login-head">
        <div class="w-100">Register</div>
      </div>
      <div class="login-body">
        <form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="username"
            label-for="username"
          >
            <b-form-input
              id="username"
              name="username"
              v-model="username"
              type="text"
              required
            ></b-form-input>
            <div class="text-error">
              {{ errorUsername }}
            </div>
          </b-form-group>

          <b-form-group id="input-group-2" label="email" label-for="email">
            <b-form-input
              id="email"
              name="email"
              v-model="email"
              type="email"
              required
            ></b-form-input>
            <div class="text-error">
              {{ errorEmail }}
            </div>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="firstname"
            label-for="firstname"
          >
            <b-form-input
              id="firstname"
              name="firstname"
              v-model="firstName"
              type="text"
              required
            ></b-form-input>
            <div class="text-error">
              {{ errorFirstName }}
            </div>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="lastname"
            label-for="lastname"
          >
            <b-form-input
              id="lastname"
              name="lastname"
              v-model="lastName"
              type="text"
              required
            ></b-form-input>
            <div class="text-error">
              {{ errorLastName }}
            </div>
          </b-form-group>

          <b-form-group
            id="input-group-5"
            label="phonenumber"
            label-for="phoneNumber"
          >
            <b-form-input
              id="phoneNumber"
              name="phoneNumber"
              v-model="phoneNumber"
              type="text"
              required
            ></b-form-input>
            <div class="text-error">
              {{ errorPhoneNumber }}
            </div>
          </b-form-group>

                    <b-form-group
            id="input-group-7"
            label="password"
            label-for="password"
          >
            <div>
              <div class="icon-show-password" @click="showPassword('password')">
                <span class="icon is-small is-right">
                 <font-awesome-icon
                    :icon="
                      !form.isShowPassword
                        ? ['fa-solid', 'eye']
                        : ['fa-solid', 'eye-slash']
                    "
                  ></font-awesome-icon>
                </span>
              </div>
              <b-form-input
                id="password"
                name="password"
                :type="form.passwordType"
                v-model="password"
                required
              >
              </b-form-input>
              <div class="text-error">
                {{ errorPassword }}
              </div>
            </div>
          </b-form-group>

          <b-form-group id="input-group-6" label="confirmPassword" label-for="confirmPassword">
            <div>
              <div
                class="icon-show-password"
                @click="showPassword('confirmPassword')"
              >
                <span class="icon is-small is-right">
                  <font-awesome-icon
                    :icon="
                      !form.isShowConfirmPassword
                        ? ['fa-solid', 'eye']
                        : ['fa-solid', 'eye-slash']
                    "
                  ></font-awesome-icon>
                </span>
              </div>
              <b-form-input
                id="confirmPassword"
                name="confirmPassword"
                :type="form.confirmPasswordType"
                v-model="confirmPassword"
                required
              >
              </b-form-input>
              <div class="text-error">
                {{ errorConfirmPassword }}
              </div>
            </div>
          </b-form-group>

          <button
            :disabled="!meta.valid"
            class="btn btn-login btn-block"
            type="submit"
            @click="onSubmit"
          >
            register
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.login-card {
  padding: 3rem;
  width: 438px;
  border: 1px solid #32be0b;
}
.login-head {
  div {
    display: flex;
    font-weight: bold;
  }
}
.login-body {
  text-align: left;
  padding-top: 2rem;
  font-size: 14px;

  .text-error {
    color: #fe3737;
  }

  .btn-login {
    margin-top: 2rem;
    background-color: #00b05b;
    color: #fff;
    font-weight: bold;
    box-shadow: 0px 2px 3px #00000029;
    border-radius: 9px;
    border-color: none !important;
  }
  .btn-register {
    background-color: #fff;
    color: #000;
    font-weight: bold;
    box-shadow: 0px 2px 3px #00000029;
    border: 1px solid #00b05b;
    border-radius: 9px;
  }
}
.forget-pass {
  font-size: 12px;
  color: #000;
  text-decoration: underline;
  margin-top: 10px;
}

.icon-show-password {
  right: 60px;
  position: absolute;
  padding-top: 10px;
  color: #32be0b;
  z-index: 10;
  cursor: pointer;
}

#username {
  text-transform: uppercase;
}
</style>
