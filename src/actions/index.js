// Action -> Describe What to do

export const typeMessage = (msg) => {
    return {
        type: 'TYPE',
        payload: msg
    };
};
