import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ 'count' ];

  connect() {
    setInterval(this.refresh, 5000);
    console.log(this.countTarget);
    // getElementById
  }

  refresh = () => {
    // go get the number of restaurants from the DB (with an HTTP request)
    // replace the count with new count
    console.log("5 seconds have passed");
    fetch('/restaurants', { headers: { accept: "application/json" } })
      .then(response => response.json())
      .then((data) => {
        this.countTarget.innerHTML = data.restaurants.length;
      });
      // replace th count by new count
  }
}
