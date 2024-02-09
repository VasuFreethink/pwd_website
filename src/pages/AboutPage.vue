<template>
  <q-page :style="{ fontSize: fontSize }">
    <h3 class="text-bold text-center">ABOUT US</h3>
    <section
      :class="$q.platform.is.mobile ? '' : 'q-pa-md'"
      style="margin-top: 50px"
      :style="
        $q.platform.is.mobile
          ? ''
          : 'width: 82vw; margin-left: auto; margin-right: auto; margin-top: 50px;'
      "
    >
      <q-card class="my-card">
        <div class="row">
          <div class="col-12 col-md-4 q-pa-lg">
            <q-card class="my-card about-image-card">
              <q-parallax
                src="https://cdn.quasar.dev/img/parallax1.jpg"
                :style="{ height: aboutCardWidth + 'px' }"
              />
              <!-- :height="300" -->
            </q-card>
          </div>
          <div class="col-12 col-md-8 q-pa-lg">
            <h4 class="q-my-none text-bold">PUBLIC WORKS DEPARTMENT</h4>
            <p class="about-text text-justify q-mt-md" style="font-size: 17px">
              The Public Works Department plays a major role in the economic,
              commercial and touristic development of the State of Goa. Being a
              service Department, it is entrusted with all the developmental
              activities like Planning, Design, Construction, Operation and
              Maintenance of all types of construction works in this State of
              Goa. Following are the programmes which are under the Public Works
              Department:
            </p>
          </div>
        </div>
      </q-card>

      <div class="body-text q-pa-md q-mt-lg">
        <!-- probgrams -->
        <p class="text-justify">
          Following are the programmes which are under the Public Works
          Department:
        </p>
        <div class="row">
          <div class="col-12 col-md-3 q-pa-sm">
            <q-card class="my-card q-pa-md shadow-1" style="height: 100%">
              <p class="text-bold">Building Works</p>
              <p>Functional and Non-functional</p>
            </q-card>
          </div>
          <div class="col-12 col-md-3 q-pa-sm">
            <q-card class="my-card q-pa-md shadow-1" style="height: 100%">
              <p class="text-bold">Roads and Bridges</p>
              <ul style="list-style-type: none">
                <li>(i) State Programmes</li>
                <li>(ii) Centrally Sponsored Programmes</li>
                <li>(iii) National Highways</li>
                <li>(iv) WesternGhat Development Programme</li>
              </ul>
            </q-card>
          </div>
          <div class="col-12 col-md-3 q-pa-sm">
            <q-card class="my-card q-pa-md shadow-1" style="height: 100%">
              <p class="text-bold">Water Supply and Sanitation</p>
              <ul style="list-style-type: none">
                <li>(i) State Programmes</li>
                <li>(ii) Centrally Sponsored Programmes.</li>
              </ul>
            </q-card>
          </div>
          <div class="col-12 col-md-3 q-pa-sm">
            <q-card class="my-card q-pa-md shadow-1" style="height: 100%">
              <p class="text-bold">Electrical and Mechanical</p>
              <p>Thisincludes Government Garage and Workshop.</p>
            </q-card>
          </div>
        </div>

        <p class="q-mt-md text-justify">
          In addition to the above, the construction for most of the other
          Departments,Local Bodies and some of the Autonomous Organizationsare
          also executed by Public Works Department, as Deposit Works.
        </p>
        <p class="text-justify">
          A full-fledged Principal Chief Engineer, who is also the Ex-Officio
          Additional Secretary to the Government of Goa, having his head
          quarters at Altinho, Panaji, heads the Public Works Department.
        </p>
      </div>

      <!-- Structure Principal Chief Engineer-->
      <div class="body-text q-px-md text-justify">
        <p class="q-my-none text-bold">Principal Chief Engineer:</p>
        <p>
          He is the Head of Department under the Goa Delegation of Financial
          Powers Rules, 1997 and Ex-Officio Additional Secretary to the
          Government of Goa. He is also the budget controlling and appointing
          authority and ensures proper co-ordination between the three Chief
          Engineers.
        </p>
        <p>
          The following activities are under the control of the Principal Chief
          Engineer: -
        </p>
        <ul style="list-style-type: none">
          <li>(a) Administration and Co-ordination</li>
          <li>(b) Quality Control</li>
          <li>(c) Vigilance matters</li>
          <li>(d) Enlistment of Contractors</li>
          <li>(e) Parliament & State Assembly matters</li>
          <li>(f ) Budget, Audit & Public Accounts Committee matters.</li>
          <li>
            (g) Any Technical & Financial powers delegated by Government beyond
            the powers of Chief Engineer for implementing Public Works.
          </li>
        </ul>
        <p>
          The following wings/units are under the control of Principal Chief
          Engineer:
        </p>
        <ul style="list-style-type: none">
          <li>
            (a) Joint Director of Accounts (for matters related to accounts).
          </li>
          <li>
            (b) Director of Administration (for all administrative matters).
          </li>
          <li>
            (c) Superintending Surveyor of Works (for Planning and Quality
            Control).
          </li>
          <li>(d) Superintending. Engineer (Monitoring & Evaluation.)</li>
          <li>(e) Engineering Officer (for Liaison & Coordination)</li>
          <li>
            (f) Executive Engineer (Legal) (for co-ordination of Legal Matters,
            Land Acquisition Cell, Estate matters, etc.)
          </li>
          <li>(g) Chief Architect (Architectural Design and Planning)</li>
        </ul>
      </div>

      <!-- Chief Engineer - I -->
      <div class="body-text q-px-md text-justify">
        <p class="q-my-none text-bold">Chief Engineer - I</p>
        <p>
          Chief Engineer-I deals with Public Health Engineering Works, that
          include Water Supply, Sanitation, environmental up-gradation scheme,
          matters related to centrally sponsored schemes for the respective
          areas.
        </p>
        <p>
          He is also the Head of Office and Ex-Officio Joint Secretary to the
          Government of Goa. Circles V, VI & VIII are under his control along
          with the relevant Divisions as defined under the existing set-up. The
          Chief Engineer-I is also authorized to report to the Secretary (PWD)
          for all matters related to all the works entrusted to him.
        </p>
      </div>

      <!-- Chief Engineer - II -->
      <div class="body-text q-px-md text-justify">
        <p class="q-my-none text-bold">Chief Engineer - II</p>
        <p>
          Chief Engineer-II deals with all Buildings works in the P.W.D.
          budget,Electrical and Mechanical works of PWDand also the works
          related to various other Departments of the State. He is also
          authorized to deal with MPLAD Scheme including deposit works in the
          Building Sector.
        </p>
        <p>
          He is the Head of Office and Ex-Officio Joint Secretary to the
          Government of Goa. Circles I, II, VII and Chief Architect's Office are
          under his supervision along with relevant Divisions as defined under
          the existing set-up. The Chief Engineer-II is also authorized to
          report to the Secretary (PWD) for all the matters related to all the
          works entrusted to him.
        </p>
      </div>

      <!--  Chief Engineer - (NH, Roads & Bridges, National Highway) -->
      <div class="body-text q-px-md text-justify">
        <p class="q-my-none text-bold">
          Chief Engineer - (NH, Roads & Bridges, National Highway)
        </p>
        <p>
          The Chief Engineer deals with all Roads and Bridges including the
          National Highway both for the works in the P.W.D. budget and also the
          works related to various other Departments of the State.
        </p>
        <p>
          He is the Head of Office and Ex-Officio Joint Secretary to the
          Government of Goa. Circles III, IV, IX and as defined under the
          existing set-up. The Chief Engineer-(Roads & Bridges, National
          Highway) is also authorized to report to the Secretary (PWD) for all
          the matters related to all the works entrusted to him.
        </p>
        <p>
          The following units/wings working under control of the Principal Chief
          Engineer are authorized to co-ordinate with the Chief Engineer - I
          (Public Health Engineering),Chief Engineer-II (Mechanical and
          Electrical Works and Buildings) and Chief Engineer - (Roads & Bridges,
          National Highway), for matters related to accounts fund certificate,
          allocation of funds, monitoring of financial and physical progress,
          legal opinion, land acquisition matters, etc.
        </p>
      </div>

      <div class="body-text q-px-md text-justify">
        <ul style="list-style-type: none">
          <li>
            1) Joint Director of Accounts is in charge of Accounting, Auditing,
            Planning and Budgeting matters including submission of estimates for
            A.A & E.S. & issues of Orders thereof.
          </li>
          <li>
            2) Superintending Surveyor of Works is in charge of technical
            designs, processing for the acceptance of tenders, projects control
            and management.
          </li>
          <li>
            3) Superintending Engineer (Monitoring& Evaluation) is in charge of
            Monitoring of various development sectors, LIC & HUDCO loans, etc.
          </li>
          <li>
            4) Chief Architect is in charge of Architectural Design and
            Planning.
          </li>
          <li>5) Director of Administration is in charge of administration.</li>
          <li>
            6) Engineering Officer is the Technical Advisor to Principal Chief
            Engineer and entrusted with other allied matters pertaining to the
            Principal Chief Engineer’s office.
          </li>
        </ul>
      </div>

      <div class="body-text q-px-md text-justify">
        <p>
          All the Chief Engineers are authorized to exercise their Technical
          Powers as per the procedures laid down in CPWD Manual & Code and
          delegation of powers as approved by the Government from time to time.
          Under the revised set-up, the existing functioning of the
          Circles/Division/Sub-Divisions in PWD has remained unaltered.
        </p>
        <p>
          The Department is divided into Administrative Unitscalled Circles,
          which are headed by Superintending Engineers. Each Circle consists of
          field units known as Works Divisions headed by Executive Engineers who
          are entrusted with execution of works. Sub-Divisional offices headed
          by Assistant Engineers in turn assistthem.
        </p>
        <p>
          The Department has got 9 Circle Offices and 25 Works Divisions
          stationed throughout the State of Goa. Each Sub- Division is provided
          with Junior Engineer / Technical Assistants who supervise the
          day-to-day execution of works. 7 Circle Offices are presently located
          at Altinho,Panajiand two are locatedat Margao. The Divisions are
          located in various Talukas depending upon the jurisdiction of their
          activities, to enable them to maintain proper and efficient control
          over the executionof work.
        </p>
        <p>
          Each Superintending Engineer has under his charge two or more
          divisions. He is the administrative head who exercises the control
          over the activities of Divisions engaged in investigation, planning,
          construction and maintenance of various works. He also maintains
          liaison with the offices of the Chief Engineer with regard to works
          and all technical matters. The Superintending Engineer is required to
          examine the works of the Divisional and Sub- Divisional officers
          during his inspection and keep a strict watch on expenditure and
          achievements of the physical targets, for efficient and economical
          functioning of the Circle.
        </p>
        <p>
          The Divisional Officer headed by Executive Engineer, is directly
          responsible for the procurement of new materials and machinery for
          speedy economical execution of works and further for the proper upkeep
          of work-accounts and smooth implementation of various schemes
          entrusted to his Division. The Divisional Accountant who assists the
          Executive Engineer is primarily responsible for ensuring the correct
          compilation of the accounts of the Division and that there is no
          excess over the estimated cost of the works under his control. The
          Divisional officer is also responsible for exercising proper control
          and adopting measures to preserve the scheme in good condition,
          prevent encroachment of Government land and buildings under his
          jurisdiction.
        </p>

        <p>
          The Assistant Engineer, who is the in charge of the sub-division
          office, is responsible to the Executive Engineer for getting the works
          executed according to the approved designs, specifications and
          estimates. He is also required to inspect the conditions of buildings
          and structuresunder his control periodically.
        </p>

        <p>
          The Junior Engineer / Technical Assistant is the primary element in
          the Executive Wing of the Division who is responsible for the
          execution of works and maintenance of accounts for the works under his
          control. The Junior Engineer / Technical Assistant is directly
          responsible for the entire execution of works and the works are
          supposed to be carried out in his presence. He is also responsible for
          proper maintenance of muster rolls in respect of labour employed by
          the Department, watch over the progress of works, record of
          measurements etc.
        </p>
        <p>
          Ultimately, the Executive Engineer and his subordinates are entirely
          responsible for the smooth functioning of the Divisions and they have
          to account for the budgeted expenditure andconsequently achieve the
          physical targets.
        </p>
        <p>
          The Architectural wing isheaded by the Chief Architect who is assisted
          by Architects, Assistant Architect and Architectural Assistants. He is
          in charge of preparation of plans and furnishing of detailed drawings
          of the buildings etc., to be undertaken by this Architectural Wing.
          The Chief Architect and his staff are also required to inspect the
          building works frequently as required and also to give initial layout
          and the final completion certificates.
        </p>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useGeneralStore } from "src/stores/generalStore";

const generalStore = useGeneralStore();

export default defineComponent({
  name: "AboutPage",
  components: {},
  data() {
    return {
      //Card
      aboutCardWidth: 0,
      generalStore,
    };
  },
  mounted() {
    this.aboutCardWidth =
      document.querySelector(".about-image-card").clientWidth;
    this.aboutCardWidth = this.aboutCardWidth * 0.75;
  },
  computed: {
    fontSize() {
      return this.generalStore.fontSize;
    },
  },
  methods: {},
});
</script>
<style scoped>
/* .my-card {
  width: 100%;
  max-width: 500px;
} */

.about-text,
.body-text {
  /* font-size: 18px; */
  line-height: 1.5;
  font-family: Arial, sans-serif;
}
</style>
