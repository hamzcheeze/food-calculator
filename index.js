class FoodCalculator {
    constructor() {
        this.menu = {
            'RED': 50,
            'GREEN': 40,
            'BLUE': 30,
            'YELLOW': 50,
            'PINK': 80,
            'PURPLE': 90,
            'ORANGE': 120
        };

        this.bundleDiscountSets = ['ORANGE', 'PINK', 'GREEN'];
    }

    calculateTotal(orders, hasMemberCard = false) {
        if (!orders || orders.length === 0) {
            return 0;
        }

        const orderCount = orders.reduce((acc, item) => {
            acc[item] = (acc[item] || 0) + 1;
            return acc;
        }, {});

        let total = 0;

        for (const [item, count] of Object.entries(orderCount)) {
            const itemPrice = this.menu[item];
            if (!itemPrice) continue;

            let itemTotal = itemPrice * count;

            if (this.bundleDiscountSets.includes(item) && count >= 2) {
                const pairs = Math.floor(count / 2);
                const bundleDiscount = (itemPrice * 2 * 0.05) * pairs;
                itemTotal -= bundleDiscount;
            }

            total += itemTotal;
        }

        if (hasMemberCard) {
            total *= 0.9;
        }

        return Math.round(total);
    }
}

export default FoodCalculator;