# Food Calculator

A JavaScript calculator for a food store's ordering system that handles various pricing and discount calculations.

## Features

- Calculate total price for multiple food items
- Support for member card discount (10% off total)
- Bundle discount for specific sets (5% off for pairs)
- ES Modules support
- Unit testing with Jest

## Menu Items

| Set Name    | Price (THB) |
|-------------|-------------|
| Red set     | 50         |
| Green set   | 40         |
| Blue set    | 30         |
| Yellow set  | 50         |
| Pink set    | 80         |
| Purple set  | 90         |
| Orange set  | 120        |

## Discount Rules

- **Member Card**: 10% discount on total bill
- **Bundle Discount**: 5% discount for pairs of Orange, Pink, or Green sets

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd food-calculator

2. Install dependencies
```bash
npm install

## Testing

Run all tests:
```bash
npm test

Run tests in watch mode:
```bash
npm run test:watch

Generate coverage report:
```bash
npm run test:coverage
