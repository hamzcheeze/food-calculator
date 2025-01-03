import FoodCalculator from '../index.js';

describe('FoodCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new FoodCalculator();
    });

    test('should calculate basic order without discounts', () => {
        const order = ['RED', 'GREEN'];
        expect(calculator.calculateTotal(order)).toBe(90);
    });

    test('should apply member card discount', () => {
        const order = ['RED', 'GREEN'];
        expect(calculator.calculateTotal(order, true)).toBe(81);
    });

    test('should apply bundle discount for Orange set', () => {
        const order = ['ORANGE', 'ORANGE', 'ORANGE', 'ORANGE', 'ORANGE'];
        // Regular price: 5 * 120 = 600
        // Bundle discount: (120 * 2 * 0.05) * 2 = 24 (for 4 items / 2 pairs)
        // Final price: 600 - 24 = 576
        expect(calculator.calculateTotal(order)).toBe(576);
    });

    test('should apply both bundle and member discounts', () => {
        const order = ['PINK', 'PINK', 'GREEN', 'GREEN'];
        // Regular price: (80 * 2) + (40 * 2) = 240
        // Bundle discount: (80 * 2 * 0.05) + (40 * 2 * 0.05) = 12
        // Subtotal after bundle: 228
        // Member discount: 228 * 0.9 = 205.2
        expect(calculator.calculateTotal(order, true)).toBe(205);
    });

    test('should handle empty orders', () => {
        expect(calculator.calculateTotal([])).toBe(0);
    });

    test('should handle invalid items', () => {
        const order = ['INVALID_ITEM', 'RED'];
        expect(calculator.calculateTotal(order)).toBe(50);
    });
});