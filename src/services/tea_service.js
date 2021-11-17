const gettea = (name = 'Green tea') => {
    return {
        drinkType: 'tea',
        name,
    };
};
module.exports = {
    gettea,
};