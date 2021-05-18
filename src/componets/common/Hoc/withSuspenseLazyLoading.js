import React, {Suspense} from 'react';


export const SuspenseLazyLoading = (Component) => {
    return (props) => {
        return <Suspense fallback={<p>Loading</p>}><Component title={'AS'} {...props} /></Suspense>
    }

};