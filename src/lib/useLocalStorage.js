import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
	//initializes state of storedValue to local storage item or initial value based on turnary operator
	const [storedValue, setStoredValue] = useState(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			//Get from local storage by key
			const item = window.localStorage.getItem(key);
			//Parse and return stored json or, if undefined, returned initial value
			setStoredValue(item ? JSON.parse(item) : initialValue);
		}
	}, [storedValue, key, initialValue]);

	const setValue = (value) => {
		//Save state
		setStoredValue(value);
		//Save to local storage

		if (typeof window !== "undefined") {
			window.localStorage.setItem(key, JSON.stringify(value));
		}
	};

	return [storedValue, setValue];
};
