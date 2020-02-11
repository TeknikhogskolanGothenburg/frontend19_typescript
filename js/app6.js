"use strict";
function handleError(description, errorCode) {
    throw { description: description, errorCode: errorCode };
    console.log("Never here");
}
