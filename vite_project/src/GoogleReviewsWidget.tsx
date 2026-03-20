import {useWidgetConfig} from "./hooks/useWidgetConfig.ts";
import {ErrorState} from "./global/ErrorState.tsx";
import {Spinner} from "./global/Spinner.tsx";
import {TranslationStateProvider} from "./state/Translation/TranslationStateProvider.tsx";
import {GoogleReviews} from "./components/GoogleReviews.tsx";
import {SystemStateProvider} from "./state/System/SystemStateProvider.tsx";


type Props = {
    host: HTMLElement
}

export function GoogleReviewsWidget({host}: Props) {
    const {config, error, loading} = useWidgetConfig(host);

    if (!config) return null;
    if (error) return <ErrorState />
    if (loading) return <Spinner />

    return (
        <TranslationStateProvider translations={config.translations}>
            <SystemStateProvider config={config}>
                <GoogleReviews config={config} />
            </SystemStateProvider>
        </TranslationStateProvider>
    );
}
