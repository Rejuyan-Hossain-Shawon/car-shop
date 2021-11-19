import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const [success, setSuccess] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const _id = `${Math.ceil(Math.random() * 1000000000000000000)}`;

        data._id = _id;

        fetch("https://enigmatic-shelf-59046.herokuapp.com/car", {
            method: "POST",
            headers: {
                'content-type': "application/json"
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Title</label>
                <input  {...register("title")} /><br />
                <label>Price</label>
                <input  {...register("price")} /><br />
                <label>Milage</label>
                <input  {...register("milage")} /><br />
                <label>Description</label>
                <input  {...register("description")} /><br />
                <label>Picture</label>
                <input  {...register("picture")} /><br />



                <input type="submit" />
            </form>
            {success && <Alert severity="success">This is a success alert — check it out!</Alert>}
        </div>
    );
};

export default AddAProduct;