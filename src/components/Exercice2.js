import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext({
  language: 'fr',
  setLanguage: () => {},
  translations: {
    fr: { greeting: 'Bonjour', productTitle: 'Titre du produit', price: 'Prix' },
    en: { greeting: 'Hello', productTitle: 'Product Title', price: 'Price' },
    es: { greeting: 'Hola', productTitle: 'Título del producto', price: 'Precio' },
  },
});

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr');
  const contextValue = {
    language,
    setLanguage,
    translations: LanguageContext._currentValue.translations,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

function Product({ product }) {
  const { language, translations } = useContext(LanguageContext);

  return (
    <div>
      <h3>{translations[language].productTitle}: {product.title}</h3>
      <p>{translations[language].price}: {product.price}€</p>
    </div>
  );
}

function LanguageSelector() {
  const { setLanguage } = useContext(LanguageContext);
  return (
    <div>
      <button onClick={() => setLanguage('fr')}>Français</button>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('es')}>Español</button>
    </div>
  );
}

function Exercice2() {
    const products = [{ id: 1, title: 'Super produit', price: 10 }];
    return (
        <LanguageProvider>
            <LanguageSelector />
            {products.map(product => <Product key={product.id} product={product} />)}
        </LanguageProvider>
    );
}

export default Exercice2;