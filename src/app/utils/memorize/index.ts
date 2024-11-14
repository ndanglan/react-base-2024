export const memorizeFunction = (fn: any) => {
  let cache: Record<string, any> = {}
  return (...args: any) => {
    let key = JSON.stringify(args)
    if (!cache[key]) {
      cache[key] = fn(...args)
    }
    return cache[key]
  }
}
