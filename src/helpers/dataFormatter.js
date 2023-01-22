import { CURRENCIES_OBJ } from './constants';

export const removeUnnecessarySymbols = value => {
    return value.replace(/[^a-z0-9]/gi, '');
};

const flagProvided = entry => {
    return entry.flags && entry.flags[0] === 'provided';
};

const incorrectCurrency = currency => {
    return removeUnnecessarySymbols(currency).length < 3;
};

export const formatOriginalCurrencies = entries => {
    if (CURRENCIES_OBJ in entries) {
        return entries.fx.map(entry => {
            // check if proper currency name exists and flags provided
            if (!incorrectCurrency(entry.currency) && flagProvided(entry)) {
                let flagName = entry.currency.slice(0, -1).toLowerCase();
                return { ...entry, flagExists: true, flagName };
            }
            return { ...entry, flagExists: false };
        });
    }
};
