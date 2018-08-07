<template>
  <div>
    <div class="q-ma-sm q-pa-md">
      <h2 class="q-display-3">Kontakt</h2>
      <div class="row justify-center items-start">
        <div class="col-6 maincontent">
          <q-input v-model="message.yourname" float-label="Ihr Name" />
          <q-input v-model="message.youremail" type="email" float-label="Ihre Emailadresse" />
          <q-input v-model="message.yoursubject" float-label="Betreff" />
          <q-input v-model="message.yourmessage" rows="5"
                   float-label="Ihre Nachricht" type="textarea" />
          <q-btn class="q-mt-xl" @click="send" label="Absenden" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'kontakt',
  data() {
    return {
      message: {
        _wpcf7: '198',
        _wpcf7_version: '5.0.3',
        _wpcf7_locale: 'de_DE',
        _wpcf7_unit_tag: 'wpcf7-f198-p192-o1',
        _wpcf7_container_post: '192',
        yourname: '',
        youremail: '',
        yoursubject: '',
        yourmessage: '',
      },
      errors: [],
      test: {},
    };
  },

  methods: {
    send() {
      console.log('Hi');
      axios.post('http://monstra-monstra.de/wordpress/wp-json/contact-form-7/v1/contact-forms/191/feedback', this.message)
        .then((response) => {
          this.test = response;
          console.log(this.test);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>

<style scoped>

</style>
