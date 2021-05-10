export const textSlicer = (text, charsLimit) => {
    if (typeof text === 'string') {
        return text.length < charsLimit ? text : text.slice(0, charsLimit) + '...';
    }
};
