import classes from './searchForm.module.css';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetRecipesBySearchQuery } from '../../api/recipesApi';
import { useDebounce } from '../../hooks/hooks';
import { Preloader } from '../common/Preloader';
import { Suggest } from './Suggest';
import { getDataFromLS, setDataToLS } from '../../utils/localStorage';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../../redux/history-reducer';

export type Recipe = {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string[];
};

export const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const isAuth = getDataFromLS('isAuth', '""');
  const isAuthHistory = isAuth + ' history';

  const [isSuggestHidden, setIsSuggestHidden] = useState(true);
  const handleInputFocus = () => setIsSuggestHidden(false);


  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || '';

  const navigate = useNavigate();

  const suggestionsRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const debouncedSearch = useDebounce(searchValue);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target as Element) &&
        e.target !== inputRef.current
      ) {
        setIsSuggestHidden(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmitSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchValue.trim() && name !== searchValue.trim()) {
      navigate(`/search?name=${searchValue}`);
      setIsSuggestHidden(true);
      inputRef.current?.blur();
    }
  };

  const handleSuggestClick = (item: Recipe) => {
    navigate(`/description/${item.id}`);
    setIsSuggestHidden(true);
  };

  const { data, isLoading } = useGetRecipesBySearchQuery(debouncedSearch, { skip: debouncedSearch.length === 0 });
  const recipes = data!;


  const setToHistory = () => {
    if (!debouncedSearch) {
      setError('Error');
    }
    dispatch(addToHistory(debouncedSearch));
    if (!getDataFromLS(isAuthHistory, '[]').includes(debouncedSearch)) {
      setDataToLS(isAuthHistory, [
        ...getDataFromLS(isAuthHistory, '""'),
        debouncedSearch
      ]);
    }
  };

  const suggestsWrapper = () => {
    if (isLoading) {
      return <Preloader />;
    }
    if (recipes && recipes.length > 0) {
      return recipes.map((item) => (
        <Suggest
          key={item.id}
          name={item.name}
          handleSuggestClick={() => handleSuggestClick(item)}
        />
      ));
    }
    return null;
  };


  return (
    <div className={classes.searchWrapper}>
      <form className={classes.formSearch} onSubmit={handleSubmitSearch}>
        <input
          className={classes.inputSearch}
          placeholder='Search recipe...'
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={handleInputFocus}
          ref={inputRef}
        />
        <button type='submit' className={classes.btn} onClick={setToHistory}></button>
      </form>
      <div className={isSuggestHidden === true ? classes.hidden : classes.active}
        ref={suggestionsRef}
      >
        {suggestsWrapper()}
      </div>
      {error && <p className={classes.error}>{error}</p>}
    </div>

  )
}