export {};

function f1 (a: number, b:number):number {
  return a+ b
}

const s = (a: string, b: string):string => a+b

// 可选参数
const fn2 = (a: string, b?: string):string => a+b