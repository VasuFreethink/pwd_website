<template>
  <q-page class="json-editor-page">
    <div ref="jsoneditor" class="json-editor" style="height: 80vh"></div>
    <q-btn @click="saveJson" label="Save" color="primary" class="q-ma-md" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import JSONEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.min.css";

export default defineComponent({
  name: "JsonEditor",
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    const container = this.$refs.jsoneditor;
    const options = {
      // mode: "tree",
      mode: "tree",
      modes: ["tree", "text", "code", "view"],
      navigationBar: true,
      statusBar: true,
      search: false,
      sortObjectKeys: true,
      onChange: this.handleJsonChange,
      onError: this.handleJsonError,
      onModeChange: this.handleModeChange,
    };
    this.editor = new JSONEditor(container, options);

    // Set initial JSON data
    const initialData = {
      array: [1, 2, 3],
      boolean: true,
      null: null,
      number: 123,
      object: { a: "b", c: "d" },
      string: "Hello World",
    };
    this.editor.set(initialData);
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.destroy();
      this.editor = null;
    }
  },
  methods: {
    // Custom event handlers
    handleJsonChange() {
      // console.log("JSON data changed");
    },

    handleModeChange(mode) {
      //      console.log("Mode changed to:", mode);
    },

    saveJson() {
      try {
        const editedJson = this.editor.get();
        // console.log("Edited JSON:", editedJson);
        this.$q.notify({
          type: "positive",
          message: "JSON saved successfully!",
        });
      } catch (error) {
        // console.error("Error saving JSON:", error);
        this.$q.notify({
          type: "negative",
          message: "Error saving JSON: " + error.message,
        });
      }
    },
  },
});
</script>

<style scoped>
.json-editor-page {
  /* height: 100vh; */
}

.json-editor {
  width: 100%;
  height: 100%;
}
</style>
