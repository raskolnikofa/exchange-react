import { CurrenciesSearch } from '../components/HomePage/CurrenciesSearch';
import { CurrenciesSearchResult } from '../components/HomePage/CurrenciesSearchResult';

export const HomePage = () => {
    return (
        <div>
            <CurrenciesSearch />
            <CurrenciesSearchResult />
        </div>
    );
};
