import {type ReactNode} from "react";
import {LocalSystemStateContext} from "./SystemState.tsx";
import type {ResolvedGoogleReviewsConfig} from "../../domain/googlereviews.types.ts";

interface SystemStateProviderProps {
    children: ReactNode;
    config: ResolvedGoogleReviewsConfig;
}

const LocalStateProvider = LocalSystemStateContext.Provider;

export const SystemStateProvider: React.FC<SystemStateProviderProps> = ({ children, config }) => {
    return (
        <LocalStateProvider
            value={{
                googleMapsApiKey: config.integrations.googleMaps?.apiKey || ''
            }}
        >
            {children}
        </LocalStateProvider>
    );
};
