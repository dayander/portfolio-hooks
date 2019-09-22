export const updateCounter=(counter)=>{
    console.log(counter);
    return {type: "UPDATE_COUNTER", payload: counter}

};