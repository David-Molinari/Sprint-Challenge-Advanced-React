import React, {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (key) => {
    const [someValue, setSomeValue] = useLocalStorage(key);

    useEffect(() => {
        if (someValue === true) {
            return document.body.classList.add('dark-mode');
        } else {
            let element = document.getElementsByClassName('dark-mode');
            return document.body.classList.remove('dark-mode');
        }
    }, [someValue])
    return [someValue, setSomeValue];
}