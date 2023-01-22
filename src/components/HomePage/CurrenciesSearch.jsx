import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CurrenciesSearchInput } from './CurrenciesSearchInput';

export const CurrenciesSearch = () => {
    const navigate = useNavigate();
    const filter = useSelector(state => state.currency.filter);

    const changeSearchFilter = e => {
        const searchValue = e.target.value;
        const hash = searchValue === '' ? '' : `#${searchValue}`;
        navigate(hash);
    };

    return (
        <CurrenciesSearchInput
            searchValue={filter}
            onChange={changeSearchFilter}
        />
    );
};
