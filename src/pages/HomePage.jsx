import { CurrenciesSearch } from '../components/HomePage/CurrenciesSearch';
import { CurrenciesList } from '../components/HomePage/CurrenciesList';

export const HomePage = () => {
    return (
        <div>
            <CurrenciesSearch />
            <CurrenciesList />
        </div>
    );
};
