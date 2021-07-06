<template>
  <v-row class="pl-4 pr-4">
    <v-col class="mod-installation">
      <v-tabs v-model="tab" dark>
        <v-tabs-slider color="orange lighten-3"></v-tabs-slider>

       <v-tab v-if="data.installation.url && data.installation.url.length>0"> Film </v-tab>
        <v-tab v-if="data.installation.instruction"> Instrukcja </v-tab>
        <v-tab v-if="data.installation.links && data.installation.links.length>0"> Linki </v-tab>
      </v-tabs>
      <v-tabs-items class="tab-items" dark v-model="tab">
        <v-tab-item class="pa-4">
          <div class="tab-item">
            <iframe :src="data.installation.url"
            class="mod-video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          </div>
        </v-tab-item>
        <v-tab-item class="pa-4" >
          <div class="tab-item">
            <div
          class="mt-4"
          v-if="data.installation.instruction.alerts && data.installation.instruction.alerts.length > 0"
        >
        <v-alert
              v-for="(alert, index) in data.installation.instruction.alerts"
              :color="alert.color + ' lighten-1'"
              :key="index"
              ><span v-html="alert.text"
            /></v-alert>  
            
          <ol v-for="(step, index) in data.installation.instruction.steps" :key="index">
            {{step.content}}

          </ol>

          </div>
          
          

          </div>
        </v-tab-item>
        <v-tab-item class="pa-4" >
          <div class="tab-item">
           
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script>



export default {
  name: "Installation",
  props: {
    data: { type: Object, required: true },
  },  
  data: () => {
    return {
    tab: "Instalacja",    
    };
  },
  components: { },
};
</script>
<style>
.mod-installation {
  padding: 0;
}

.mod-installation .tab-items {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.mod-installation .v-tabs .v-tabs-bar {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.mod-installation .mod-video
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