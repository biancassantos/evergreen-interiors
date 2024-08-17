const products = [
    {
        id: 1,
        productName: "Bedside Table",
        productImg: 'productsImg/bedside-table.png',
        productPrice: 149,
        category: ["bedroom", "all"],
        productDescription: 'The Bedside Table is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 40cm x 40cm x 60cm',
            'Material: Bamboo'
        ]
    }, {
        id: 2,
        productName: "Bed One",
        productImg: 'productsImg/bed-1.png',
        productPrice: 299,
        category: ["bedroom", "all"],
        productDescription: 'The Bed One is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 180cm x 120cm x 40cm',
            'Material: Bamboo'
        ]
    }, {
        id: 3,
        productName: "Bed Two",
        productImg: 'productsImg/bed-2.png',
        productPrice: 499,
        category: ["bedroom", "all"],
        productDescription: 'The Bed Two is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 180cm x 120cm x 40cm',
            'Material: Bamboo'
        ]
    }, {
        id: 4,
        productName: "Cupboard",
        productImg: 'productsImg/cupboard.png',
        productPrice: 159,
        category: ["bedroom", "all"],
        productDescription: 'The Cupboard is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 40cm x 60cm x 65cm',
            'Material: Bamboo'
        ]
    }, {
        id: 5,
        productName: "Bed Three",
        productImg: 'productsImg/bed-3.png',
        productPrice: 299,
        category: ["bedroom", "all"],
        productDescription: 'The Bed Three is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 180cm x 120cm x 40cm',
            'Material: Bamboo'
        ]
    }, {
        id: 6,
        productName: "Nightstand",
        productImg: 'productsImg/nightstand.png',
        productPrice: 99,
        category: ["bedroom", "all"],
        productDescription: 'The Nightstand is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 40cm x 50cm x 60cm',
            'Material: Bamboo'
        ]
    }, {
        id: 7,
        productName: "Armoire",
        productImg: 'productsImg/armoire.png',
        productPrice: 499,
        category: ["bedroom", "all"],
        productDescription: 'The Armoire is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 50cm x 100cm x 130cm',
            'Material: Bamboo'
        ]
    }, {
        id: 8,
        productName: "Lounge",
        productImg: 'productsImg/lounge.png',
        productPrice: 239,
        category: ["bedroom", "all"],
        productDescription: 'The Lounge is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 50cm x 120cm x 40cm',
            'Material: Bamboo'
        ]
    }, {
        id: 9,
        productName: "Wooden Chair",
        productImg: 'productsImg/wooden-chair.png',
        productPrice: 149,
        category: ["livingroom", "all"],
        productDescription: 'The Wooden Chair is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 50cm x 120cm x 40cm',
            'Material: Bamboo'
        ]
    }, {
        id: 10,
        productName: "Modern Sofa",
        productImg: 'productsImg/modern-sofa.png',
        productPrice: 399,
        category: ["livingroom", "all"],
        productDescription: 'The Modern Sofa is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 50cm x 120cm x 40cm',
            'Material: Bamboo'
        ]
    }, {
        id: 11,
        productName: "Center Table",
        productImg: 'productsImg/center-table.png',
        productPrice: 129,
        category: ["livingroom", "all"],
        productDescription: 'The Lounge is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 50cm x 50cm x 40cm',
            'Material: Bamboo'
        ]
    }, {
        id: 12,
        productName: "Wooden Shelf",
        productImg: 'productsImg/wooden-shelf.png',
        productPrice: 189,
        category: ["livingroom", "all"],
        productDescription: 'The Lounge is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 50cm x 120cm x 40cm',
            'Material: Bamboo'
        ]
    }, {
        id: 13,
        productName: "Table One",
        productImg: 'productsImg/table-1.png',
        productPrice: 499,
        category: ["diningroom", "all"],
        productDescription: 'The Lounge is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 60cm x 120cm x 70cm',
            'Material: Bamboo',
            'Quantity: 1 table, 4 chairs'
        ]
    }, {
        id: 14,
        productName: "Table Two",
        productImg: 'productsImg/table-2.png',
        productPrice: 359,
        category: ["diningroom", "all"],
        productDescription: 'The Lounge is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 50cm x 50cm x 70cm',
            'Material: Bamboo',
            'Quantity: 1 table, 2 chairs'
        ]
    }, {
        id: 15,
        productName: "Glass Cabinet",
        productImg: 'productsImg/glass-cabinet.png',
        productPrice: 179,
        category: ["diningroom", "all"],
        productDescription: 'The Lounge is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 50cm x 120cm x 40cm',
            'Material: Bamboo'
        ]
    }, {
        id: 16,
        productName: "Leather Barstool",
        productImg: 'productsImg/barstool-1.png',
        productPrice: 99,
        category: ["kitchen", "all"],
        productDescription: 'The Lounge is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 50cm x 120cm x 40cm',
            'Material: Bamboo'
        ]
    }, {
        id: 17,
        productName: "Barstool",
        productImg: 'productsImg/barstool-2.png',
        productPrice: 79,
        category: ["kitchen", "all"],
        productDescription: 'The Lounge is a piece of furniture designed with environmental consciousness and longevity in mind, not only meeting the functional needs but also aligning with eco-friendly practices, promoting a healthier planet and conscious consumerism. Here are some key characteristics:',
        descriptionList: [
            'Recycled or Upcycled Wood: Using reclaimed wood from old furniture or buildings.',
            'Bamboo: A fast-growing and renewable resource.',
            'Natural Oils and Waxes: Such as linseed oil or beeswax.',
            'Timeless Aesthetics: Classic designs that won&apos;t go out of style.',
            'Simple Design: Uses fewer materials and processes.'
        ],
        productSpecifications: [
            'Dimensions: 50cm x 120cm x 40cm',
            'Material: Bamboo'
        ]
    }
];

export default products;