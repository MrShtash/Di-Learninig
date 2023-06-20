export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const IncrementCounter = () => {
    return {
        type: 'INCREMENT',
    }
}

export const DecrementCounter = () => {
    return {
        type: 'DECREMENT',
    }
}

export const IncrementIfOdd = () => {
    return {
        type: 'IncrementIfOdd',
    }
}

export const IncrementAsync = () => {
    return {
        type: 'IncrementAsync',
    }
}