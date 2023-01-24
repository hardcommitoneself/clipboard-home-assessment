import crypto from 'crypto'
import deterministicPartitionKey from "./deterministicPartitionKey";

test('deterministicPartitionKey method should return string 0 when event is not defiend', () => {
    expect(deterministicPartitionKey()).toBe('0');
    expect(typeof deterministicPartitionKey()).toBe('string');
});

test('deterministicPartitionKey method should return hash string for event string', () => {
    expect(deterministicPartitionKey('123')).not.toBe('123')
});

test('deterministicPartitionKey method should return hash string for event string', () => {
    expect(deterministicPartitionKey('123')).not.toBe('123')
});