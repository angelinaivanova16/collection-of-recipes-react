
import { createContext, useContext, useState, useLayoutEffect, ReactNode, useMemo, useCallback } from 'react';

interface ThemeContextType {
	theme: string;
	toggle: () => void;
}

interface Props {
	children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState('green');

	
	const toggleTheme = () =>
		setTheme(theme => (theme === 'light' ? 'green' : 'light'));

	useLayoutEffect(() => {
		if (theme === 'light') {
			document.body.classList.add('green');
		} else {
			document.body.classList.remove('green');
		}
	}, [theme]);

	const toggle = useCallback(() => {
		toggleTheme()
	}, [])

	const contextValue = useMemo(() => ({
		theme,
		toggle
	}), [theme, toggle]);

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

export { ThemeProvider, useTheme };
