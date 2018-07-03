

export const promisify = fn => new Promise(resolve => {
  resolve(fn());
})
