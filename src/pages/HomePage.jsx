import { CurrenciesSearch } from '../components/HomePage/CurrencySearch/CurrenciesSearch';
import { CurrenciesSearchResult } from '../components/HomePage/CurrencySearchResult/CurrenciesSearchResult';

export const HomePage = () => {
    return (
        <div>
            <CurrenciesSearch />
            <CurrenciesSearchResult />
        </div>
    );
};
