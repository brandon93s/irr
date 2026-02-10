"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
const DATE_PATTERNS = [/^(\d{4})[-/]?(\d{2})[-/]?(\d{2})$/];
const DAYS_TO_MS = 24 * 60 * 60 * 1000;
function calculateDaysBetweenStrict(from, to) {
    const fromDays = Math.floor(from.valueOf() / DAYS_TO_MS);
    const toDays = Math.floor(to.valueOf() / DAYS_TO_MS);
    return toDays - fromDays;
}
function parseDate(date) {
    if (date instanceof Date) {
        return date;
    }
    const pattern = DATE_PATTERNS.find(pattern => pattern.test(date));
    if (!pattern) {
        throw new Error(`Invalid date pattern: ${date}`);
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [, year, month, day] = date.match(pattern);
    return new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
}
function calculateDaysBetween(from, to) {
    return calculateDaysBetweenStrict(parseDate(from), parseDate(to));
}
function transform(inputs) {
    if (inputs.length === 0) {
        return [];
    }
    const { date } = inputs[0];
    const transformedInputs = inputs.map(input => ({
        amount: input.amount,
        day: calculateDaysBetween(date, input.date),
    }));
    return transformedInputs;
}
exports.transform = transform;
//# sourceMappingURL=transform.js.map