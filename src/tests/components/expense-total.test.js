import selectExpensesTotal from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';

//approach test driven developement

test('should return 0 if empty array', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0)
})

test('should return amount of one expense', () => {
    const res = selectExpensesTotal([expenses[0]])
    expect(res).toBe(195);
})

test('should return sum of amounts when provided with multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195)
})