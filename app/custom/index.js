import React from 'react';

const CustomPages = ({ type, slug }) => {
    // const CustomComponent = React.lazy(() => import(`../custom${slug}`));

    return (

        <React.Suspense fallback={<div>Loading...</div>}>
<h2>hello</h2>        </React.Suspense>
    );
}

export default CustomPages;