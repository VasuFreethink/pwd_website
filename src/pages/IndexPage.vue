<template>
  <!-- class="flex flex-center" -->
  <q-page>
    <ImageCarousel />

    <div
      :class="$q.platform.is.mobile ? 'q-pa-sm' : 'q-pa-md'"
      style="margin-top: 50px"
      :style="
        $q.platform.is.mobile
          ? ''
          : 'width: 82vw; margin-left: auto; margin-right: auto; margin-top: 50px;'
      "
    >
      <div class="row q-gutter-md">
        <div :class="$q.platform.is.mobile ? '' : 'col'">
          <q-card class="my-card">
            <q-item>
              <q-item-section>
                <h5 class="q-my-xs">Introduction</h5>
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-card-section>
              <p class="justify-text" style="text-align: justify">
                The Public Works Department plays a major role in the economic,
                commercial and touristic development of the State of Goa. Being
                a service Department, it is entrusted with all the developmental
                activities like Planning, Design, Construction, Operation and
                Maintenance of all types of construction works in this State of
                Goa. Following are the programmes which are under the Public
                Works Department: (1)Building Works : Functional and
                Non-functional (2) Roads and Bridges. (i) State Programmes.
                (ii)Centrally Sponsored programmes. (iii) National Highways.
                (iv) Western Ghat Development programme. (3) Water Supply and
                Sanitation (i)State Programmes. (ii)Centrally Sponsored
                programmes. (4) Electrical and Mechanical This includes
                Government Garage and workshop. In addition to the above, the
                construction for most of the other Departments, Local Bodies and
                some of the Autonomous organisations are also executed by the
                Public Works Department, as Deposit Works. A full-fledged
                Principal Chief Engineer, who is also the Ex-Officio Additional
                Secretary to the Government of Goa, having his head quarters at
                Altinho, Panaji, heads the Public Works Department.
              </p>
            </q-card-section>
          </q-card>
        </div>
        <div :class="$q.platform.is.mobile ? '' : 'col'">
          <q-card class="my-card">
            <q-item>
              <q-item-section avatar>
                <q-avatar style="height: 70px; width: 70px">
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <h5 class="q-my-xs">
                  Message From Hon'ble Chief Minister, Goa
                </h5>
                <p caption>Dr. Pramod Sawant</p>
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-card-section>
              <p>
                The Public Works Department plays a major role in the economic,
                commercial and touristic development of the State of Goa. Being
                a service Department, it is entrusted with all the developmental
                activities like Planning, Design, Construction, Operation and
                Maintenance of all types of construction works in this State of
                Goa. Following are the programmes which are under the Public
                Works Department: (1)Building Works : Functional and
                Non-functional (2) Roads and Bridges. (i) State Programmes.
                (ii)Centrally Sponsored programmes. (iii) National Highways.
                (iv) Western Ghat Development programme. (3) Water Supply and
                Sanitation (i)State Programmes. (ii)Centrally Sponsored
                programmes. (4) Electrical and Mechanical This includes
                Government Garage and workshop. In addition to the above, the
                construction for most of the other Departments, Local Bodies and
                some of the Autonomous organisations are also executed by the
                Public Works Department, as Deposit Works. A full-fledged
                Principal Chief Engineer, who is also the Ex-Officio Additional
                Secretary to the Government of Goa, having his head quarters at
                Altinho, Panaji, heads the Public Works Department.
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- News -->
    <div
      :class="$q.platform.is.mobile ? '' : 'q-pa-md'"
      class="q-pa-md"
      :style="
        $q.platform.is.mobile
          ? ''
          : 'width: 82vw; margin-left: auto; margin-right: auto; margin-top: 50px;'
      "
    >
      <div class="row items-start q-gutter-md">
        <div :class="$q.platform.is.mobile ? 'col-12' : 'col-4'">
          <q-card class="my-card">
            <q-item>
              <q-item-section>
                <h5 class="q-my-xs">Notice</h5>
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-card-section> </q-card-section>
          </q-card>
        </div>
        <div :class="$q.platform.is.mobile ? 'col-12' : 'col-4'">
          <q-card class="my-card">
            <q-item>
              <q-item-section>
                <h5 class="q-my-xs">Circulars</h5>
                <div class="row">
                  <div class="col">
                    <q-card class="my-card">
                      <q-card-section>
                        {{ lorem }}
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-card-section> </q-card-section>
          </q-card>
        </div>
        <div :class="$q.platform.is.mobile ? 'col-12' : 'col-3'">
          <q-card class="my-card">
            <q-item>
              <q-item-section>
                <h5 class="q-my-xs">Contacts</h5>
              </q-item-section>
            </q-item>
            <q-separator inset />
            <q-card-section> </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ImageCarousel from "src/components/ImageCarousel.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    ImageCarousel,
  },
});
</script>
<style scoped>
.my-custom-container {
  margin-left: 20px; /* Adjust the left margin as needed */
  margin-right: 20px; /* Adjust the right margin as needed */
}
</style>
