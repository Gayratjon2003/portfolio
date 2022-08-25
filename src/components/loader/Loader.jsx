import React from 'react';
import { Bars } from 'react-loader-spinner';
import './loader.scss';

export default function Loader() {
    return (
        <div className='loader'>
            <Bars
                height="80"
                width="80"
                color="#15023a"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

        </div>
    )
}
