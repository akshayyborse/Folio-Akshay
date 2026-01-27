declare module 'livecard' {
    import * as React from 'react';

    export interface DesktopPreviewProps {
        url: string;
        title: string;
        isLive: boolean;
        onToggle: () => void;
    }

    export const DesktopPreview: React.FC<DesktopPreviewProps>;

    export interface WebsiteSite {
        id: number;
        title: string;
        url: string;
    }

    export interface WebsiteCardProps {
        site: WebsiteSite;
    }

    export const WebsiteCard: React.FC<WebsiteCardProps>;
}
