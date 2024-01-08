import { createApp, h } from "vue";
import { components, entry } from "django-airavata-common-ui";
import ParserDetailsContainer from "./containers/ParserDetailsContainer.vue";

entry((globalApp) => {
  //use globalApp to satisfy compiler
  globalApp;

  const app = createApp({
    render() {
      return h(components.MainLayout, [
        h(ParserDetailsContainer, {
          props: {
            parserId: this.parserId,
          },
        }),
      ]);
    },
    data() {
      return {
        parserId: null,
        launching: false,
      };
    },
    beforeMount() {
      if (this.$el.dataset.parserId) {
        this.parserId = this.$el.dataset.parserId;
      }
    },
  })
  app.mount("#parser-details");
});
