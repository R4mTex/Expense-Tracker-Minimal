import type { AmountInterface } from "../interfaces/amountInterface";

/*
id: number;
titre: string;
amount: number;
description: string;
category: string;
image: URL;
status: string;
created_at: Date;
*/

export const amountData: AmountInterface[] = [
    {
        id: 1,
        titre: "Loyer",
        amount: 800,
        currency: "$",
        description: "Loyer mensuel de l'appartement",
        category: "Logement",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        status: "Payé",
        created_at: "13/08/2026",
    },

    {
        id: 2,
        titre: "Courses alimentaires",
        amount: 800,
        currency: "$",
        description: "Courses alimentaires de la semaine",
        category: "Alimentation",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
        status: "Payé",
        created_at: "13/08/2026",
    },

    {
        id: 3,
        titre: "Abonnement Netflix",
        amount: 800,
        currency: "$",
        description: "Abonnement mensuel Netflix",
        category: "Divertissement",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85",
        status: "En cours d'utilisation",
        created_at: "13/08/2026",
    },

    {
        id: 4,
        titre: "Essence",
        amount: 800,
        currency: "$",
        description: "Plein d'essence pour la voiture",
        category: "Transport",
        image: "https://images.unsplash.com/photo-1506526667984-2cc3f4f6b8c4",
        status: "Payé",
        created_at: "13/08/2026",
    },

    {
        id: 5,
        titre: "Facture EDF",
        amount: 800,
        currency: "$",
        description: "Facture d'électricité du mois",
        category: "Logement",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
        status: "À payer",
        created_at: "13/08/2026",
    },

    {
        id: 6,
        titre: "Restaurant",
        amount: 800,
        currency: "$",
        description: "Dîner au restaurant avec des amis",
        category: "Alimentation",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        status: "Payé",
        created_at: "13/08/2026",
    },

    {
        id: 7,
        titre: "Achat jeu vidéo",
        amount: 800,
        currency: "$",
        description: "Achat d'un nouveau jeu vidéo",
        category: "Divertissement",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
        status: "Payé",
        created_at: "13/08/2026",
    },

    {
        id: 8,
        titre: "Assurance voiture",
        amount: 800,
        currency: "$",
        description: "Prélèvement mensuel de l'assurance automobile",
        category: "Transport",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
        status: "En cours d'utilisation",
        created_at: "13/08/2026",
    },

    {
        id: 9,
        titre: "Abonnement téléphone",
        amount: 800,
        currency: "$",
        description: "Forfait mobile mensuel",
        category: "Abonnements",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        status: "En cours d'utilisation",
        created_at: "13/08/2026",
    },

    {
        id: 10,
        titre: "Achat vêtements",
        amount: 800,
        currency: "$",
        description: "Quelques vêtements pour renouveler la garde-robe",
        category: "Shopping",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
        status: "Payé",
        created_at: "13/08/2026",
    },

    {
        id: 11,
        titre: "Électricité",
        amount: 800,
        currency: "$",
        description: "Estimation de la consommation électrique",
        category: "Logement",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
        status: "À payer",
        created_at: "13/08/2026",
    },

    {
        id: 12,
        titre: "Café",
        amount: 800,
        currency: "$",
        description: "Café acheté avant de commencer la journée",
        category: "Alimentation",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        status: "Payé",
        created_at: "13/08/2026",
    },

    {
        id: 13,
        titre: "Billet de train",
        amount: 800,
        currency: "$",
        description: "Billet de train pour un déplacement",
        category: "Transport",
        image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
        status: "Payé",
        created_at: "13/08/2026",
    },

    {
        id: 14,
        titre: "Salle de sport",
        amount: 800,
        currency: "$",
        description: "Abonnement mensuel à la salle de sport",
        category: "Sport",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
        status: "En cours d'utilisation",
        created_at: "13/08/2026",
    },

    {
        id: 15,
        titre: "Ordinateur portable",
        amount: 800,
        currency: "$",
        description: "Ordinateur portable destiné au développement",
        category: "High-Tech",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        status: "Payé",
        created_at: "13/08/2026",
    },

    {
        id: 16,
        titre: "Clavier mécanique",
        amount: 800,
        currency: "$",
        description: "Nouveau clavier pour le poste de travail",
        category: "High-Tech",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        status: "Payé",
        created_at: "13/08/2026",
    },

    {
        id: 17,
        titre: "Billet de cinéma",
        amount: 800,
        currency: "$",
        description: "Place de cinéma pour une séance du vendredi soir",
        category: "Divertissement",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
        status: "Payé",
        created_at: "13/08/2026",
    },

    {
        id: 18,
        titre: "Cadeau anniversaire",
        amount: 800,
        currency: "$",
        description: "Cadeau acheté pour l'anniversaire d'un proche",
        category: "Cadeaux",
        image: "https://images.unsplash.com/photo-1512909006721-3d6018887383",
        status: "Payé",
        created_at: "13/08/2026",
    },

    {
        id: 19,
        titre: "Mutuelle",
        amount: 800,
        currency: "$",
        description: "Cotisation mensuelle de la mutuelle",
        category: "Santé",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
        status: "En cours d'utilisation",
        created_at: "13/08/2026",
    },

    {
        id: 20,
        titre: "Achat livres",
        amount: 800,
        currency: "$",
        description: "Livres achetés pour apprendre de nouvelles technologies",
        category: "Éducation",
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
        status: "Payé",
        created_at: "13/08/2026",
    },
];
