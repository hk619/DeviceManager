import Request from 'superagent';
import React, { Component } from 'react';

export const LoadList = () => {
    return Request.get("http://localhost:38077/device/get-all-devices")
        .then((resp) => {
            return resp;
        })
        .catch(() => {

        })
}

export const AddDevice = () => {
    return Request.post()
        .then(() => {

        })
        .catch(() => {

        })
}
export const DeleteDevice = () => {
    return Request.post()
        .then(() => {

        })
        .catch(() => {

        })
}