import { CURRENCIES_OBJ, CURRENCY_COUNTRY } from './constants';

// regex to keep only letters & numbers
export const removeUnnecessarySymbols = value => {
    return value.replace(/[^a-z0-9]/gi, '');
};

const flagProvided = entry => {
    return entry.flags && entry.flags[0] === 'provided';
};

// check if currency name in aaa format
const incorrectCurrencyName = currency => {
    return removeUnnecessarySymbols(currency).length < 3;
};

// should be displayed only currencies with all the needed characteristics
// as flag, currency name, country, rate
const invalidCurrency = currency => {
    return incorrectCurrencyName(currency.currency) || !flagProvided(currency) || !currency[CURRENCY_COUNTRY] || !currency.exchangeRate;
}

export const formatOriginalCurrencies = entries => {
    if (CURRENCIES_OBJ in entries) {
        return entries.fx.map(entry => {
            // check if currency is valid for display
            if (!invalidCurrency(entry)) {
                let flagName = entry.currency.slice(0, -1).toLowerCase();
                return { ...entry, flagExists: true, flagName };
            }
            return false;
        });
    }
};
