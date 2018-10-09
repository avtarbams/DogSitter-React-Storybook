import logLevels from "../Constants/logLevels";


/* eslint-disable no-console */

export function logDebug(...args:any[]) {
  if ((window as any).LOG_LEVEL <= logLevels.DEBUG) {
    console.debug(...args);
  }
}

export function log(...args:any[]) {
  if ((window as any).LOG_LEVEL <= logLevels.LOG) {
    console.log(...args);
  }
}

export function logWarn(...args:any[]) {
  if ((window as any).LOG_LEVEL <= logLevels.WARN) {
    console.warn(...args);
  }
}

export function logError(...args:any[]) {
  if ((window as any).LOG_LEVEL <= logLevels.ERROR) {
    console.error(...args);
  }
}
