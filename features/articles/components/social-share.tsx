"use client";
import {Share2, Facebook, Link2, Twitter} from "lucide-react";
import ShareButton from "@/components/ui/share-button";
import {toast} from "sonner";
import {sendGAEvent} from "@next/third-parties/google";

function SocialShare() {
    const linkEncoded = encodeURIComponent(window.location.href);

    const sendShareEvent = (platform: string) => {
        sendGAEvent('page_shared', platform, {url: window.location.href});
    }

    const shareLinks = [
        {
            icon: Twitter,
            onClick: () => {
                sendShareEvent('twitter');
                window.open(`https://twitter.com/share?url=${linkEncoded}`)
            },
            label: "Partager sur Twitter",
        },
        {
            icon: Facebook,
            onClick: () => {
                sendShareEvent('facebook');
                window.open(`https://facebook.com/sharer/sharer.php?u=${linkEncoded}`);
            },
            label: "Partager sur Facebook",
        },
        {
            icon: Link2,
            onClick: () => {
                sendShareEvent('link_copied');
                navigator.clipboard.writeText(window.location.href);
                toast.success("Lien copié");
            },
            label: "Copier le lien",
        },
    ];

    return (
        <ShareButton links={shareLinks}>
            <Share2/>
            Partager
        </ShareButton>
    );
}

export default SocialShare;