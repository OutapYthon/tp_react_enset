# Exercice 1 : 
Ce code crée une barre de recherche qui filtre dynamiquement une liste de produits. Il utilise useState pour stocker le terme saisi par l’utilisateur (searchTerm) et la liste filtrée (filteredProducts). Quand l’utilisateur tape un mot, useEffect déclenche un délai de 500ms avant de lancer le filtrage, ce qui évite de rafraîchir la liste à chaque frappe (une technique appelée debounce). Sans ce délai, l’application serait moins performante, surtout avec une grande liste de produits. J’ai d’abord oublié de nettoyer le timer avec clearTimeout, ce qui causait des bugs quand on tapait vite. Après correction, le filtrage est fluide et les produits s’affichent correctement. Par exemple, chercher "phone" montre seulement les produits contenant ce mot après une demi-seconde. Les erreurs de syntaxe (comme les guillemets mal placés ou les clés manquantes dans la liste) m’ont fait perdre du temps, mais maintenant tout fonctionne .
![image](https://github.com/user-attachments/assets/fe272efa-2f97-46f8-a27a-5ade001d7b6d)

# Exercice2: 
Ce code essaie de gérer les traductions avec React Context pour permettre de changer la langue dans l’appli, mais il y a quelques soucis. D’abord, il manque une virgule après setLanguage: () => {}, ce qui fait planter le code. Ensuite, les traductions sont récupérées avec LanguageContext._currentValue, une méthode pas fiable qui peut causer des bugs. Pire, dans le composant Product, j’ai utilisé useState au lieu de useContext pour accéder au contexte… résultat : les traductions n’apparaissaient jamais ! Après des heures de frustration, j’ai corrigé en utilisant useContext et en déplaçant les traductions hors du contexte initial. Maintenant, le LanguageProvider met à jour automatiquement tous les composants quand on change la langue. Par exemple, si on passe à l’anglais, les titres deviennent "Product Title" au lieu de "Titre du produit". 

![image](https://github.com/user-attachments/assets/5ec18013-f3f0-44a3-a0f6-20dafe613980)


# Exercice 4 :
 Gérer les requêtes asynchrones avec une gestion du chargement et des erreurs, et implémenter la pagination pour afficher les produits par pages. Pistes : Utiliser async/await ou des promesses pour les requêtes. Gérer l'état de chargement et les erreurs. Utiliser des paramètres de requête pour la pagination (par exemple, page, limit).
Le code permet une navigation fluide entre les pages de produits, avec gestion des erreurs de chargement d’images.

![image](https://github.com/user-attachments/assets/ea973c6c-e601-4325-b2cd-a7f7c3ca2d44)

