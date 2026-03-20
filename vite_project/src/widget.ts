import { mountWidget } from "./mountWidget";

class GoogleReviewsWidget extends HTMLElement {
    connectedCallback() {
        mountWidget(this);
    }
}

customElements.define("googlereviews-widget", GoogleReviewsWidget);
