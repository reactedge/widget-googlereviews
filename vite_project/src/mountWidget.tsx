import { createRoot } from "react-dom/client";
import {activity} from "./activity";
import {getMountedHost} from "./lib/hostReader.ts";
import {GoogleReviewsWidget} from "./GoogleReviewsWidget.tsx";

export const WIDGET_ID = 'googlereviews';

export function mountWidget(hostElement: HTMLElement) {
    const mountedHost = getMountedHost(hostElement);

    activity('bootstrap', 'Widget mounted', hostElement);

    // Create React root inside shadow
    const root = createRoot(mountedHost);
    root.render(<GoogleReviewsWidget host={hostElement}/>);
}
