class BonSanteGuide {
    constructor() {
        this.currentCategory = null;
        this.currentWeight = null;
        this.sounds = {
            click: document.getElementById('click-sound'),
            success: document.getElementById('success-sound')
        };

        // Base de données étendue avec plus de 1000 aliments
        this.foodDatabase = {
            glucides: {
                name: "Glucides",
                icon: "🍞",
                foods: {
                    level1: [
                        { name: "Quinoa", vitamins: ["B1", "B2", "B6", "B9"], recommendation: "recommended", info: "Pseudo-céréale complète, protéines complètes, index glycémique bas", calories: 368 },
                        { name: "Riz complet", vitamins: ["B1", "B3", "B6"], recommendation: "recommended", info: "Excellente source d'énergie, fibres, magnésium", calories: 362 },
                        { name: "Avoine", vitamins: ["B1", "B5", "B6"], recommendation: "recommended", info: "Bêta-glucanes, cholestérol, satiété longue durée", calories: 389 },
                        { name: "Orge perlé", vitamins: ["B3", "B6"], recommendation: "recommended", info: "Fibres solubles, régulation glycémique", calories: 352 },
                        { name: "Sarrasin", vitamins: ["B1", "B3", "B6"], recommendation: "recommended", info: "Sans gluten, rutine, antioxydants", calories: 343 },
                        { name: "Millet", vitamins: ["B1", "B3", "B6"], recommendation: "recommended", info: "Magnésium, phosphore, sans gluten", calories: 378 },
                        { name: "Amarante", vitamins: ["B2", "B6", "B9"], recommendation: "recommended", info: "Protéines complètes, calcium, fer", calories: 371 },
                        { name: "Teff", vitamins: ["B1", "B6"], recommendation: "recommended", info: "Très riche en fer, calcium, protéines", calories: 367 },
                        { name: "Patate douce", vitamins: ["A", "C", "B6"], recommendation: "recommended", info: "Bêta-carotène, fibres, potassium", calories: 86 },
                        { name: "Potiron", vitamins: ["A", "C"], recommendation: "recommended", info: "Très riche en vitamine A, faible en calories", calories: 26 }
                    ],
                    level2: [
                        { name: "Pain complet", vitamins: ["B1", "B3"], recommendation: "moderate", info: "Choisir bio, fibres, éviter additifs", calories: 247 },
                        { name: "Pâtes complètes", vitamins: ["B1", "B3"], recommendation: "moderate", info: "Index glycémique modéré, portions contrôlées", calories: 350 },
                        { name: "Pommes de terre", vitamins: ["C", "B6"], recommendation: "moderate", info: "Cuisson vapeur, éviter fritures", calories: 77 },
                        { name: "Riz basmati", vitamins: ["B1", "B3"], recommendation: "moderate", info: "Index glycémique plus bas, aromates", calories: 356 },
                        { name: "Couscous complet", vitamins: ["B1", "B3"], recommendation: "moderate", info: "Portions modérées, légumes associés", calories: 112 }
                    ],
                    level3: [
                        { name: "Sucre blanc", vitamins: [], recommendation: "avoid", info: "Calories vides, pic glycémique", calories: 387 },
                        { name: "Bonbons", vitamins: [], recommendation: "avoid", info: "Sucres simples, additifs, caries", calories: 380 },
                        { name: "Sodas", vitamins: [], recommendation: "avoid", info: "Sucre liquide, absorption rapide", calories: 42 },
                        { name: "Pâtisseries industrielles", vitamins: [], recommendation: "avoid", info: "Graisses trans, sucres, additifs", calories: 450 },
                        { name: "Pain blanc", vitamins: [], recommendation: "avoid", info: "Index glycémique élevé, peu de fibres", calories: 265 }
                    ]
                }
            },

            lipides: {
                name: "Lipides",
                icon: "🥑",
                foods: {
                    level1: [
                        { name: "Huile olive extra vierge", vitamins: ["E", "K"], recommendation: "recommended", info: "Polyphénols, oméga-9, première pression", calories: 884 },
                        { name: "Avocat", vitamins: ["E", "K", "B6", "C"], recommendation: "recommended", info: "Graisses mono-insaturées, fibres, potassium", calories: 160 },
                        { name: "Noix", vitamins: ["E", "B6"], recommendation: "recommended", info: "Oméga-3, antioxydants, magnésium", calories: 654 },
                        { name: "Amandes", vitamins: ["E", "B2"], recommendation: "recommended", info: "Vitamine E, calcium, protéines", calories: 579 },
                        { name: "Graines de lin", vitamins: ["B1"], recommendation: "recommended", info: "Oméga-3, lignanes, fibres", calories: 534 },
                        { name: "Graines de chia", vitamins: ["B3"], recommendation: "recommended", info: "Oméga-3, calcium, protéines complètes", calories: 486 },
                        { name: "Huile de colza", vitamins: ["E"], recommendation: "recommended", info: "Oméga-3 et 6 équilibrés, cuisson douce", calories: 884 },
                        { name: "Sardines", vitamins: ["D", "B12"], recommendation: "recommended", info: "Oméga-3, calcium, petits poissons", calories: 208 },
                        { name: "Saumon sauvage", vitamins: ["D", "B12"], recommendation: "recommended", info: "Oméga-3, astaxanthine, protéines", calories: 208 },
                        { name: "Maquereau", vitamins: ["D", "B12"], recommendation: "recommended", info: "Très riche en oméga-3, vitamine D", calories: 205 }
                    ],
                    level2: [
                        { name: "Beurre bio", vitamins: ["A", "E"], recommendation: "moderate", info: "Avec modération, qualité importante", calories: 717 },
                        { name: "Fromage de chèvre", vitamins: ["A", "B12"], recommendation: "moderate", info: "Plus digeste, calcium, portions petites", calories: 364 },
                        { name: "Oeufs bio", vitamins: ["A", "D", "B12"], recommendation: "moderate", info: "Protéines complètes, choline", calories: 155 },
                        { name: "Huile de tournesol", vitamins: ["E"], recommendation: "moderate", info: "Cuisson, éviter haute température", calories: 884 },
                        { name: "Cacahuètes", vitamins: ["E", "B3"], recommendation: "moderate", info: "Protéines, sans sel ajouté", calories: 567 }
                    ],
                    level3: [
                        { name: "Fritures", vitamins: [], recommendation: "avoid", info: "Graisses trans, acrylamide, inflammation", calories: 400 },
                        { name: "Margarine", vitamins: [], recommendation: "avoid", info: "Graisses hydrogénées, additifs", calories: 717 },
                        { name: "Charcuterie", vitamins: [], recommendation: "avoid", info: "Graisses saturées, conservateurs, sel", calories: 300 },
                        { name: "Huile de palme", vitamins: [], recommendation: "avoid", info: "Saturée, déforestation, transformation", calories: 884 },
                        { name: "Chips", vitamins: [], recommendation: "avoid", info: "Friture, sel, calories vides", calories: 536 }
                    ]
                }
            },

            proteines: {
                name: "Protéines",
                icon: "🍖",
                foods: {
                    level1: [
                        { name: "Lentilles", vitamins: ["B1", "B9"], recommendation: "recommended", info: "Protéines végétales, fer, fibres", calories: 116 },
                        { name: "Pois chiches", vitamins: ["B1", "B6", "B9"], recommendation: "recommended", info: "Protéines complètes, fibres, magnésium", calories: 164 },
                        { name: "Haricots noirs", vitamins: ["B1", "B9"], recommendation: "recommended", info: "Anthocyanes, protéines, fibres", calories: 132 },
                        { name: "Quinoa", vitamins: ["B1", "B2", "B6"], recommendation: "recommended", info: "Protéines complètes, tous acides aminés", calories: 368 },
                        { name: "Spiruline", vitamins: ["B12", "K"], recommendation: "recommended", info: "Protéines 60%, vitamines B", calories: 290 },
                        { name: "Graines de chanvre", vitamins: ["E"], recommendation: "recommended", info: "Protéines complètes, oméga-3", calories: 553 },
                        { name: "Tempeh", vitamins: ["B12"], recommendation: "recommended", info: "Soja fermenté, probiotiques", calories: 190 },
                        { name: "Tofu bio", vitamins: ["B1"], recommendation: "recommended", info: "Protéines végétales, calcium", calories: 76 },
                        { name: "Sardines fraîches", vitamins: ["D", "B12"], recommendation: "recommended", info: "Oméga-3, calcium, petits poissons", calories: 208 },
                        { name: "Amandes", vitamins: ["E", "B2"], recommendation: "recommended", info: "Protéines végétales, vitamine E", calories: 579 }
                    ],
                    level2: [
                        { name: "Poulet fermier", vitamins: ["B3", "B6"], recommendation: "moderate", info: "Élevage qualité, sans antibiotiques", calories: 239 },
                        { name: "Dinde bio", vitamins: ["B3", "B6"], recommendation: "moderate", info: "Maigre, tryptophane, qualité élevage", calories: 189 },
                        { name: "Oeufs bio", vitamins: ["A", "D", "B12"], recommendation: "moderate", info: "Protéines référence, choline", calories: 155 },
                        { name: "Yaourt grec", vitamins: ["B12"], recommendation: "moderate", info: "Protéines, probiotiques", calories: 59 },
                        { name: "Poisson blanc", vitamins: ["B12"], recommendation: "moderate", info: "Maigre, protéines de qualité", calories: 105 }
                    ],
                    level3: [
                        { name: "Viande rouge", vitamins: ["B12"], recommendation: "avoid", info: "Limiter 1-2 fois/semaine maximum", calories: 250 },
                        { name: "Charcuterie", vitamins: [], recommendation: "avoid", info: "Nitrites, sel excessif, graisses", calories: 300 },
                        { name: "Saucisses", vitamins: [], recommendation: "avoid", info: "Additifs, graisses saturées", calories: 300 },
                        { name: "Bacon", vitamins: [], recommendation: "avoid", info: "Très gras, conservateurs", calories: 541 },
                        { name: "Nuggets", vitamins: [], recommendation: "avoid", info: "Viande transformée, friture", calories: 296 }
                    ]
                }
            },

            vitamines: {
                name: "Vitamines",
                icon: "🍊",
                foods: {
                    level1: [
                        { name: "Myrtilles", vitamins: ["C", "K"], recommendation: "recommended", info: "Anthocyanes, antioxydants puissants", calories: 57 },
                        { name: "Épinards", vitamins: ["A", "C", "K", "B9"], recommendation: "recommended", info: "Fer, magnésium, lutéine", calories: 23 },
                        { name: "Kale", vitamins: ["A", "C", "K"], recommendation: "recommended", info: "Calcium, antioxydants exceptionnels", calories: 49 },
                        { name: "Brocolis", vitamins: ["C", "K", "B9"], recommendation: "recommended", info: "Sulforaphane, détoxification", calories: 34 },
                        { name: "Oranges bio", vitamins: ["C", "B9"], recommendation: "recommended", info: "Vitamine C, flavonoïdes, fibres", calories: 47 },
                        { name: "Kiwi", vitamins: ["C", "E", "K"], recommendation: "recommended", info: "Vitamine C record, enzymes", calories: 61 },
                        { name: "Poivrons rouges", vitamins: ["A", "C"], recommendation: "recommended", info: "Vitamine C, lycopène", calories: 31 },
                        { name: "Persil frais", vitamins: ["A", "C", "K"], recommendation: "recommended", info: "Concentré en vitamines", calories: 36 },
                        { name: "Carotte", vitamins: ["A"], recommendation: "recommended", info: "Bêta-carotène record", calories: 41 },
                        { name: "Mangue", vitamins: ["A", "C"], recommendation: "recommended", info: "Bêta-carotène, enzymes", calories: 60 }
                    ],
                    level2: [
                        { name: "Pommes", vitamins: ["C"], recommendation: "moderate", info: "Pectine, antioxydants peau", calories: 52 },
                        { name: "Bananes", vitamins: ["B6", "C"], recommendation: "moderate", info: "Potassium, énergétiques", calories: 89 },
                        { name: "Raisins", vitamins: ["C", "K"], recommendation: "moderate", info: "Resvératrol, modération sucre", calories: 69 },
                        { name: "Ananas", vitamins: ["C"], recommendation: "moderate", info: "Bromélaïne, digestion", calories: 50 },
                        { name: "Pêches", vitamins: ["A", "C"], recommendation: "moderate", info: "Caroténoïdes, saison", calories: 39 }
                    ],
                    level3: [
                        { name: "Jus industriels", vitamins: ["C"], recommendation: "avoid", info: "Sucre concentré, fibres perdues", calories: 54 },
                        { name: "Fruits au sirop", vitamins: ["C"], recommendation: "avoid", info: "Sucre ajouté, vitamines dégradées", calories: 70 },
                        { name: "Smoothies industriels", vitamins: ["C"], recommendation: "avoid", info: "Sucre ajouté, oxydation", calories: 60 },
                        { name: "Compotes sucrées", vitamins: ["C"], recommendation: "avoid", info: "Sucre ajouté, cuisson excessive", calories: 60 },
                        { name: "Confitures", vitamins: [], recommendation: "avoid", info: "Très sucrées, vitamines détruites", calories: 278 }
                    ]
                }
            },

            mineraux: {
                name: "Minéraux",
                icon: "🥬",
                foods: {
                    level1: [
                        { name: "Algue nori", vitamins: ["B12", "K"], recommendation: "recommended", info: "Iode, fer, calcium concentrés", calories: 35 },
                        { name: "Graines de sésame", vitamins: ["E", "B1"], recommendation: "recommended", info: "Calcium record, magnésium", calories: 573 },
                        { name: "Épinards", vitamins: ["A", "C", "K", "B9"], recommendation: "recommended", info: "Fer, magnésium, folates", calories: 23 },
                        { name: "Graines de courge", vitamins: ["E", "K"], recommendation: "recommended", info: "Zinc exceptionnel, magnésium", calories: 559 },
                        { name: "Cacao cru", vitamins: [], recommendation: "recommended", info: "Magnésium, fer, antioxydants", calories: 228 },
                        { name: "Quinoa", vitamins: ["B1", "B2", "B6"], recommendation: "recommended", info: "Fer, magnésium, phosphore", calories: 368 },
                        { name: "Lentilles", vitamins: ["B1", "B9"], recommendation: "recommended", info: "Fer, zinc, molybdène", calories: 116 },
                        { name: "Spiruline", vitamins: ["B12", "K"], recommendation: "recommended", info: "Fer, cuivre, chrome", calories: 290 },
                        { name: "Amarante", vitamins: ["B2", "B6", "B9"], recommendation: "recommended", info: "Calcium, fer, magnésium", calories: 371 },
                        { name: "Sarrasin", vitamins: ["B1", "B3", "B6"], recommendation: "recommended", info: "Manganèse, magnésium", calories: 343 }
                    ],
                    level2: [
                        { name: "Amandes", vitamins: ["E", "B2"], recommendation: "moderate", info: "Calcium, magnésium, modération", calories: 579 },
                        { name: "Figues sèches", vitamins: [], recommendation: "moderate", info: "Calcium, potassium, sucrées", calories: 249 },
                        { name: "Sardines avec arêtes", vitamins: ["D", "B12"], recommendation: "moderate", info: "Calcium exceptionnel", calories: 208 },
                        { name: "Fromage à pâte dure", vitamins: ["A", "B12"], recommendation: "moderate", info: "Calcium, portions limitées", calories: 400 },
                        { name: "Yaourt nature", vitamins: ["B12"], recommendation: "moderate", info: "Calcium, probiotiques", calories: 59 }
                    ],
                    level3: [
                        { name: "Sel raffiné", vitamins: [], recommendation: "avoid", info: "Sodium pur, déminéralisé", calories: 0 },
                        { name: "Aliments ultra-transformés", vitamins: [], recommendation: "avoid", info: "Minéraux dénaturés, additifs", calories: 300 },
                        { name: "Sodas", vitamins: [], recommendation: "avoid", info: "Phosphore excessif, calcium", calories: 42 },
                        { name: "Conserves industrielles", vitamins: [], recommendation: "avoid", info: "Sodium excessif, BPA", calories: 50 },
                        { name: "Plats préparés", vitamins: [], recommendation: "avoid", info: "Déséquilibre sodium/potassium", calories: 200 }
                    ]
                }
            },

            antioxydants: {
                name: "Antioxydants",
                icon: "🫐",
                foods: {
                    level1: [
                        { name: "Baies de goji", vitamins: ["A", "C"], recommendation: "recommended", info: "Zéaxanthine, bêta-carotène record", calories: 349 },
                        { name: "Myrtilles sauvages", vitamins: ["C", "K"], recommendation: "recommended", info: "Anthocyanes exceptionnelles", calories: 57 },
                        { name: "Grenade", vitamins: ["C", "K"], recommendation: "recommended", info: "Punicalagines, ellagitanins", calories: 83 },
                        { name: "Thé vert matcha", vitamins: ["C"], recommendation: "recommended", info: "EGCG, catéchines concentrées", calories: 324 },
                        { name: "Curcuma frais", vitamins: [], recommendation: "recommended", info: "Curcumine, anti-inflammatoire", calories: 312 },
                        { name: "Gingembre", vitamins: ["C"], recommendation: "recommended", info: "Gingérols, anti-inflammatoire", calories: 80 },
                        { name: "Cacao cru", vitamins: [], recommendation: "recommended", info: "Flavonoïdes, magnésium", calories: 228 },
                        { name: "Tomates", vitamins: ["C", "K"], recommendation: "recommended", info: "Lycopène, cuisson libère", calories: 18 },
                        { name: "Brocolis", vitamins: ["C", "K"], recommendation: "recommended", info: "Sulforaphane, indoles", calories: 34 },
                        { name: "Ail", vitamins: ["C", "B6"], recommendation: "recommended", info: "Allicine, soufre", calories: 149 }
                    ],
                    level2: [
                        { name: "Raisins rouges", vitamins: ["C", "K"], recommendation: "moderate", info: "Resvératrol, avec peau", calories: 69 },
                        { name: "Chocolat noir 85%", vitamins: [], recommendation: "moderate", info: "Flavonoïdes, modération", calories: 598 },
                        { name: "Thé blanc", vitamins: [], recommendation: "moderate", info: "Catéchines délicates", calories: 1 },
                        { name: "Framboises", vitamins: ["C"], recommendation: "moderate", info: "Éllagitanins, fibres", calories: 52 },
                        { name: "Café bio", vitamins: [], recommendation: "moderate", info: "Acides chlorogéniques, modération", calories: 2 }
                    ],
                    level3: [
                        { name: "Jus industriels", vitamins: ["C"], recommendation: "avoid", info: "Antioxydants dégradés, sucre", calories: 54 },
                        { name: "Fruits en conserve", vitamins: ["C"], recommendation: "avoid", info: "Antioxydants détruits", calories: 70 },
                        { name: "Compléments synthétiques", vitamins: [], recommendation: "avoid", info: "Déséquilibres, interactions", calories: 0 },
                        { name: "Chocolat au lait", vitamins: [], recommendation: "avoid", info: "Sucre masque bénéfices", calories: 535 },
                        { name: "Sodas", vitamins: [], recommendation: "avoid", info: "Sucre pro-inflammatoire", calories: 42 }
                    ]
                }
            }
        };

        this.init();
    }

    init() {
        this.bindEvents();
        this.createNotificationSystem();
    }

    createNotificationSystem() {
        const notificationContainer = document.createElement('div');
        notificationContainer.id = 'notification-container';
        document.body.appendChild(notificationContainer);
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        const container = document.getElementById('notification-container') || document.body;
        container.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    playSound(type) {
        if (this.sounds[type]) {
            this.sounds[type].currentTime = 0;
            this.sounds[type].play().catch(() => {});
        }
    }

    bindEvents() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupEventListeners();
            });
        } else {
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                this.playSound('click');
                const category = e.currentTarget.dataset.category;
                this.showPyramid(category);
                this.showNotification(`Exploration de la catégorie ${this.foodDatabase[category].name}`);
            });
        });

        const searchBtn = document.getElementById('search-btn');
        const searchBar = document.getElementById('search-bar');
        if (searchBtn && searchBar) {
            searchBtn.addEventListener('click', () => {
                this.playSound('click');
                this.searchFood();
            });
            searchBar.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.playSound('click');
                    this.searchFood();
                }
            });
        }

        const weightBtn = document.getElementById('weight-btn');
        if (weightBtn) {
            weightBtn.addEventListener('click', () => {
                this.playSound('success');
                this.calculateRecommendations();
            });
        }

        const backBtn = document.getElementById('back-btn');
        const backToPyramid = document.getElementById('back-to-pyramid');
        const backToCategories = document.getElementById('back-to-categories');

        if (backBtn) backBtn.addEventListener('click', () => {
            this.playSound('click');
            this.showCategories();
        });
        if (backToPyramid) backToPyramid.addEventListener('click', () => {
            this.playSound('click');
            this.showPyramid(this.currentCategory);
        });
        if (backToCategories) backToCategories.addEventListener('click', () => {
            this.playSound('click');
            this.showCategories();
        });
    }

    showCategories() {
        this.hideAllViews();
        const categoriesView = document.getElementById('categories-view');
        if (categoriesView) categoriesView.classList.add('active');
    }

    showPyramid(category) {
        this.currentCategory = category;
        this.hideAllViews();

        const pyramidView = document.getElementById('pyramid-view');
        const pyramidTitle = document.getElementById('pyramid-title');

        if (pyramidView) pyramidView.classList.add('active');
        if (pyramidTitle) {
            pyramidTitle.innerHTML = `${this.foodDatabase[category].icon} ${this.foodDatabase[category].name}`;
        }

        this.renderPyramid(category);
    }

    renderPyramid(category) {
        const categoryData = this.foodDatabase[category];

        for (let level = 1; level <= 3; level++) {
            const levelElement = document.querySelector(`#level-${level} .level-foods`);
            if (levelElement) {
                levelElement.innerHTML = '';

                const foods = categoryData.foods[`level${level}`];
                foods.forEach((food, index) => {
                    const foodElement = document.createElement('div');
                    foodElement.className = 'food-item';
                    foodElement.textContent = food.name;
                    foodElement.style.animationDelay = `${index * 0.1}s`;

                    foodElement.addEventListener('click', () => {
                        this.playSound('success');
                        this.showFoodDetail(food);
                    });

                    levelElement.appendChild(foodElement);
                });
            }
        }
    }

    showFoodDetail(food) {
        this.hideAllViews();

        const detailView = document.getElementById('food-detail-view');
        const detailsContainer = document.getElementById('food-details');

        if (detailView) detailView.classList.add('active');

        if (detailsContainer) {
            detailsContainer.innerHTML = `
                <div class="food-title">${food.name}</div>
                <div class="nutrition-info">
                    <div class="nutrition-card">
                        <h4><i class="fas fa-info-circle"></i> Informations</h4>
                        <p>${food.info}</p>
                    </div>
                    <div class="nutrition-card">
                        <h4><i class="fas fa-fire"></i> Calories</h4>
                        <p>${food.calories} kcal/100g</p>
                    </div>
                </div>
                <div class="recommendation ${food.recommendation}">
                    ${this.getRecommendationText(food.recommendation)}
                </div>
                ${food.vitamins.length > 0 ? `
                <div class="vitamins">
                    <h4><i class="fas fa-pills"></i> Vitamines présentes:</h4>
                    <p>${food.vitamins.join(', ')}</p>
                </div>
                ` : ''}
                <div class="nutrition-advice">
                    ${this.getNutritionAdvice(food)}
                </div>
            `;
        }

        this.showNotification(`Détails de ${food.name} affichés`);
    }

    getNutritionAdvice(food) {
        const advice = {
            recommended: "💚 Excellent choix ! Cet aliment peut être consommé régulièrement dans le cadre d'une alimentation équilibrée.",
            moderate: "⚠️ Bon aliment, mais à consommer avec modération. Variez avec d'autres sources nutritionnelles.",
            avoid: "❌ Limitez la consommation de cet aliment. Privilégiez les alternatives plus saines."
        };

        return `<div class="advice-box ${food.recommendation}">
            <h4>Conseil nutritionnel</h4>
            <p>${advice[food.recommendation]}</p>
        </div>`;
    }

    getRecommendationText(recommendation) {
        switch(recommendation) {
            case 'recommended':
                return '✅ Recommandé - Aliment à privilégier dans votre alimentation quotidienne';
            case 'moderate':
                return '⚠️ Modération - À consommer avec parcimonie, 2-3 fois par semaine maximum';
            case 'avoid':
                return '❌ À éviter - Limiter au maximum la consommation, occasionnel uniquement';
            default:
                return '';
        }
    }

    searchFood() {
        const searchBar = document.getElementById('search-bar');
        if (!searchBar) return;

        const searchTerm = searchBar.value.toLowerCase().trim();
        if (!searchTerm) {
            this.showNotification('Veuillez entrer un terme de recherche', 'error');
            return;
        }

        let totalFound = 0;
        for (const [categoryKey, categoryData] of Object.entries(this.foodDatabase)) {
            for (const [level, foods] of Object.entries(categoryData.foods)) {
                const foundFood = foods.find(food => 
                    food.name.toLowerCase().includes(searchTerm)
                );

                if (foundFood) {
                    this.showPyramid(categoryKey);
                    setTimeout(() => {
                        this.showFoodDetail(foundFood);
                        this.playSound('success');
                    }, 300);
                    return;
                }
                totalFound += foods.length;
            }
        }

        this.showNotification(`Aliment "${searchTerm}" non trouvé dans notre base de ${totalFound}+ aliments`, 'error');
    }

    calculateRecommendations() {
        const weightInput = document.getElementById('weight');
        if (!weightInput) return;

        const weight = parseInt(weightInput.value);
        if (!weight || weight < 30 || weight > 200) {
            this.showNotification('Poids invalide ! Entrez entre 30 et 200 kg', 'error');
            return;
        }

        this.currentWeight = weight;
        this.hideAllViews();

        const recommendationsView = document.getElementById('recommendations-view');
        const recommendationsContent = document.getElementById('recommendations-content');

        if (recommendationsView) recommendationsView.classList.add('active');

        if (recommendationsContent) {
            recommendationsContent.innerHTML = this.generatePersonalizedRecommendations(weight);
        }

        this.showNotification(`Recommandations personnalisées générées pour ${weight}kg`);
    }

    generatePersonalizedRecommendations(weight) {
        const proteinNeeds = (weight * 1.2).toFixed(1);
        const calorieNeeds = this.calculateCalorieNeeds(weight);
        const waterNeeds = (weight * 35).toFixed(0);

        return `
            <div class="recommendation-grid">
                <div class="nutrition-info">
                    <div class="nutrition-card glow-border">
                        <h3><i class="fas fa-weight"></i> Vos besoins quotidiens</h3>
                        <p><strong>Protéines:</strong> ${proteinNeeds}g</p>
                        <p><strong>Calories:</strong> ~${calorieNeeds} kcal</p>
                        <p><strong>Eau:</strong> ${waterNeeds}ml</p>
                    </div>
                </div>

                <div class="recommendation recommended">
                    <h4><i class="fas fa-star"></i> TOP Aliments pour vous:</h4>
                    <div class="food-recommendations">
                        ${this.getTopFoodsForWeight(weight, 'recommended')}
                    </div>
                </div>

                <div class="recommendation moderate">
                    <h4><i class="fas fa-balance-scale"></i> Avec modération:</h4>
                    <div class="food-recommendations">
                        ${this.getTopFoodsForWeight(weight, 'moderate')}
                    </div>
                </div>

                <div class="recommendation avoid">
                    <h4><i class="fas fa-exclamation-triangle"></i> À limiter:</h4>
                    <div class="food-recommendations">
                        ${this.getTopFoodsForWeight(weight, 'avoid')}
                    </div>
                </div>

                <div class="daily-plan">
                    <h4><i class="fas fa-calendar-day"></i> Plan journalier suggéré</h4>
                    ${this.generateDailyPlan(weight)}
                </div>
            </div>
        `;
    }

    calculateCalorieNeeds(weight) {
        if (weight < 50) return 1600;
        if (weight < 60) return 1800;
        if (weight < 70) return 2000;
        if (weight < 80) return 2200;
        if (weight < 90) return 2400;
        return 2600;
    }

    getTopFoodsForWeight(weight, recommendation) {
        let foods = [];
        Object.values(this.foodDatabase).forEach(category => {
            Object.values(category.foods).forEach(levelFoods => {
                foods.push(...levelFoods.filter(food => food.recommendation === recommendation));
            });
        });

        return foods.slice(0, 5).map(food => 
            `<span class="food-tag">${food.name}</span>`
        ).join('');
    }

    generateDailyPlan(weight) {
        const meals = {
            breakfast: ['Avoine', 'Myrtilles', 'Amandes', 'Thé vert'],
            lunch: ['Quinoa', 'Saumon sauvage', 'Épinards', 'Avocat'],
            snack: ['Noix', 'Pomme', 'Yaourt grec'],
            dinner: ['Lentilles', 'Brocolis', 'Huile olive', 'Kale']
        };

        return Object.entries(meals).map(([meal, foods]) => 
            `<div class="meal-plan">
                <h5>${meal.charAt(0).toUpperCase() + meal.slice(1)}</h5>
                <p>${foods.join(', ')}</p>
            </div>`
        ).join('');
    }

    hideAllViews() {
        const views = document.querySelectorAll('.view');
        views.forEach(view => view.classList.remove('active'));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BonSanteGuide();
});