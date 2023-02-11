import React from 'react';

const GoogleAdsense = () => {
    return (
        <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-R1QHG28LBD">
            </script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'G-R1QHG28LBD');
            </script>
        </>
    );
};

export default GoogleAdsense;
