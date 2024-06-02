import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'fr', name: 'French' },
        { code: 'hi', name: 'Hindi' },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            {languages.map((lng) => (
                <button
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                    style={{
                        fontWeight: lng.code === i18n.language ? 'bold' : 'normal',
                    }}
                >
                    {lng.name}
                </button>
            ))}
        </div>
    );
};

export default LanguageSelector;
