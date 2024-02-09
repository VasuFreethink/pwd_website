<template>
  <q-card
    class="my-card shadow-1"
    :class="$q.platform.is.mobile ? 'q-mt-md' : 'q-mt-lg'"
  >
    <q-item>
      <q-item-section avatar>
        <q-avatar style="height: 70px; width: 70px">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <h5 class="q-my-xs">Message From Hon'ble Chief Minister, Goa</h5>
        <p caption>Dr. Pramod Sawant</p>
      </q-item-section>
    </q-item>
    <q-separator inset />
    <q-card-section>
      <p style="text-align: justify">
        The Public Works Department plays a major role in the economic,
        commercial and touristic development of the State of Goa. Being a
        service Department, it is entrusted with all the developmental
        activities like Planning, Design, Construction, Operation and
        Maintenance of all types of construction works in this State of Goa.
        Following are the programmes which are under the Public Works
        Department: (1)Building Works : Functional and Non-functional (2) Roads
        and Bridges. (i) State Programmes. (ii)Centrally Sponsored programmes.
        (iii) National Highways. (iv) Western Ghat Development programme. (3)
        Water Supply and Sanitation (i)State Programmes. (ii)Centrally Sponsored
        programmes. (4) Electrical and Mechanical This includes Government
        Garage and workshop. In addition to the above, the construction for most
        of the other Departments, Local Bodies and some of the Autonomous
        organisations are also executed by the Public Works Department, as
        Deposit Works. A full-fledged Principal Chief Engineer, who is also the
        Ex-Officio Additional Secretary to the Government of Goa, having his
        head quarters at Altinho, Panaji, heads the Public Works Department.
      </p>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
