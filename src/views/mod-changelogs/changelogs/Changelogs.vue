<template>
  <div>
    <v-row class="pl-4 pr-4">
    <v-col class="mod-section">
      <v-tabs v-model="tab" dark>
        <v-tabs-slider color="orange lighten-3"></v-tabs-slider>
        <v-tab v-if="showInstallationTab"> Instalacja  </v-tab>
        <v-tab v-if="showOverviewTab"> Przegląd </v-tab>
        <!-- <v-tab > Filmy </v-tab> -->
        <v-tab v-if="showLinks"> Linki </v-tab>
        <v-tab v-if="showCreators"> Autorzy </v-tab>
        <v-tab v-if="showContributors"> Kontrybutorzy </v-tab>
      </v-tabs>
      <v-tabs-items class="tab-items" dark v-model="tab">
        <!-- Instalacja -->
        <v-tab-item class="pa-4" v-if="showInstallationTab">
          <div class="tab-item">
            <v-row v-if="showInstallationVideo">
              <v-col cols="12" class="pl-4 pr-4">
                  <section-title title="Film instalacyjny" />
                  <mod-video :data="selected" />
              </v-col>
            </v-row>
            <v-row v-if="showInstruction">
              <v-col cols="12" class="pl-4 pr-4">
                  <section-title title="Instrukcja" />
                  <mod-installation :data="selected" />
              </v-col>
            </v-row>
            
            
          </div>
        </v-tab-item>  
        <!-- Przegląd moda -->
        <v-tab-item class="pa-4" v-if="showOverviewTab">
          <div class="tab-item">            
            <v-row v-if="showChangesList">
              <section-title title="Zmiany" />
              <v-col cols="12" class="pl-4 pr-4">
                <changelogs-cards />
              </v-col>
            </v-row>
            <v-row v-if="showOverviewList">
              <section-title title="Opis" />
              <v-col cols="12" class="pl-4 pr-4">
                <mod-overview :data="selected" />
              </v-col>
            </v-row>
          </div>
        </v-tab-item>
        
        <!-- Filmy -->
        <!-- <v-tab-item class="pa-4" >
          <div class="tab-item">
           
          </div>
        </v-tab-item> -->


        <!-- Linki dotyczące moda -->
        <v-tab-item class="pa-4" v-if="showLinks">          
          <div class="tab-item">
            <v-row>              
              <v-col cols="12" class="pl-4 pr-4">
                <mod-links :data="selected" />
              </v-col>
            </v-row>            
          </div>
        </v-tab-item>

        <!-- Lista autorów -->
        <v-tab-item class="pa-4" v-if="showCreators">
          <div class="tab-item">
            <v-row>
              <v-col cols="12" class="pl-4 pr-4">
                <author-list :authors="selected.authors.creators" />
              </v-col>
            </v-row>    
           
          </div>
        </v-tab-item>
        <!-- Lista kontrybutorów -->
        <v-tab-item class="pa-4" v-if="showContributors">
          <div class="tab-item">
            <v-row >
             
              <v-col cols="12" class="pl-4 pr-4">
                <author-list :authors="selected.authors.contributors" />
              </v-col>
            </v-row> 
           
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
    </v-row>
    <v-row v-if="showGallery">
      <section-title title="Galeria" />
      <v-col cols="12" class="pl-4 pr-4">
        <mod-gallery :data="selected" />
      </v-col>
    </v-row>
  
  </div>
</template>

<script>
// components
import ModGallery from "../../../components/ModGallery";
import SectionTitle from "../../../components/SectionTitle.vue";
import ModOverview from "../../../components/ModOverview.vue";
import ChangelogsCards from "./changelogs-cards/ChangelogsCards.vue";
import AuthorList from "../../../components/AuthorList.vue";
import ModVideo from '../../../components/ModVideo.vue';
import ModInstallation from '../../../components/ModInstallation.vue';
import ModLinks from '../../../components/ModLinks.vue';

export default {
  data: () => {
    return {
    tab: "section",    
    };
  },
  components: {
    ModGallery,
    SectionTitle,
    AuthorList,
    ModOverview,
    ChangelogsCards,
    ModVideo,
    ModInstallation,
    ModLinks,   
  },
  computed: {
    showInstallationTab(){
      return this.selected?.installation?.instruction !== undefined;
    },
    showInstallationVideo(){
      return this.showInstallationTab && this.selected.installation.url;
    },
    showInstruction(){
      return this.showInstallationTab && this.selected.installation.instruction?.lists?.length>0;
    },
    showOverviewTab(){
      return this.selected?.overview !==undefined || this.selected?.changes !==undefined;
    },
    showOverviewList(){
      return this.showOverviewTab && this.selected.overview?.lists.length>0;
    },
    showChangesList(){
      return this.showOverviewTab && this.selected.changes.length>0;
    },
    showLinks(){
      return this.selected?.links && this.selected?.links?.length>0;
    },    
    showCreators(){
      return this.selected?.authors!==undefined && this.selected.authors?.creators?.length>0;
    },
    showContributors(){
       return this.selected?.authors!==undefined && this.selected.authors?.contributors?.length>0;
    },
    showGallery(){
      return this.selected?.gallery!==undefined && this.selected.gallery?.length>0;
    },
    selected() {
      return this.$store.state.changelogs.selected;
    },
  },
};
</script>

<style scoped>

.mod-section {
  padding: 0;
}

.mod-section .tab-items {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.mod-section .v-tabs .v-tabs-bar {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.mod-section .mod-video
{
  width: 100%;
  height: 75vh;
}

.v-tabs-bar {
  background-color: var(--black-primary) !important;
}
.theme--dark.v-tabs-items {
  background-color: var(--black-primary);
}

.tab-items {
  width: 100%;
}
</style>
