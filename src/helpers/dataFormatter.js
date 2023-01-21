export const removeUnnecessarySymbols = value => {
    return value.replace(/[^a-z0-9]/gi, '');
};
