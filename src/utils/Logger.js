export const logDebug = (...args) => {
    if (__DEV__) {
        console.debug(...args);
    }
};

export const logError = (...args) => {
    console.error(...args);
};

export const logInfo = (...args) => {
    if (__DEV__) {
        console.info(...args);
    }
};