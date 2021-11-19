

import { Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm, Reset } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);
    const onSubmit = (data, e) => {
        const review = document.getElementById("reviewComment").value;
        data.review = review;
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    setSuccess(true)
                    e.target.reset();
                }

            })

    };


    return (
        <div style={{ textAlign: 'left' }}>
            <h1>Review </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Comment</label><br />
                <textarea rows="4" cols="50" id="reviewComment"></textarea><br />
                <label>Rating: </label>
                <input min="1" max="5" type='number' {...register("ratingPoint")} /><br />




                <input type="submit" />
            </form>
            {
                success && <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    This is a success alert — <strong>Your Review Submitted!</strong>
                </Alert>
            }
        </div>

    );
};

export default Review;