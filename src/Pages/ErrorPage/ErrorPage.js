import React from 'react';
import Lottie from "lottie-react";
import errorImg from '../../asset/error-img.json'

const ErrorPage = () => {
    return (
        <div>
            <Lottie className='md:h-[70vh]' animationData={errorImg} loop={true} />
        </div>
    );
};

export default ErrorPage;