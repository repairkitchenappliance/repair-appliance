import React from 'react';

const GoogleAdsense = () => {
    return (
        <>
            <script
                data-ad-client={`ca-pub-${process.env.GOOGLE_ADSENSE_TRACKING_ID}`}
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            />
        </>
    );
};

export default GoogleAdsense;
