import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.modelFor("bands.band");
  },
  actions: {
    didTransition() {
      let band = this.modelFor(this.routeName);
      document.title = `${band.name} songs - Rock & Roll`;
    }
  }
});
