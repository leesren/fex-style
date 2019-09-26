# TypeScript

**JavaScript 的超集。**

TypeScript 是 JavaScript 类型的超集，它可以编译成纯 JavaScript。

- **始于 JavaScript，归于 JavaScript**

::: tip
TypeScript 从今天数以百万计的 JavaScript 开发者所熟悉的语法和语义开始。使用现有的 JavaScript 代码，包括流行的 JavaScript 库，并从 JavaScript 代码中调用 TypeScript 代码。

TypeScript 可以编译出纯净、 简洁的 JavaScript 代码，并且可以运行在任何浏览器上、Node.js 环境中和任何支持 ECMAScript 3（或更高版本）的 JavaScript 引擎中。
:::

- **强大的工具构建 大型应用程序**

::: tip
类型允许 JavaScript 开发者在开发 JavaScript 应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构。

类型是可选的，类型推断让一些类型的注释使你的代码的静态验证有很大的不同。类型让你定义软件组件之间的接口和洞察现有 JavaScript 库的行为。
:::

- **先进的 JavaScript**

::: tip
TypeScript 提供最新的和不断发展的 JavaScript 特性，包括那些来自 2015 年的 ECMAScript 和未来的提案中的特性，比如异步功能和 Decorators，以帮助建立健壮的组件。

这些特性为高可信应用程序开发时是可用的，但是会被编译成简洁的 ECMAScript3（或更新版本）的 JavaScript。
:::

## keyof

`keyof`  和 `Object.key`  很像，只不过 `keyof`  取的是 `interface` 、 `object` 、 `class`  等的值

```typescript
interface Point {
  x: number;
  y: number;
}
type keys = keyof Point; // type keys = "x"|"y"
```

![](https://cdn.nlark.com/yuque/0/2019/png/119906/1562833004272-cb7d3c17-5a43-44d3-a337-250fb523962e.png)

## typeof

typeof 代表取某个值的 type，可以从以下示例来展示他们的用法：

```typescript
const a: number = 3;
// 相当于: const b: number = 4
const b: typeof a = 4;

// 不知道具体的类型情况
import logger from './logger';
import utils from './utils';
interface Context extends KoaContect {
  logger: typeof logger;
  utils: typeof utils;
}
```

### keyof & typeof 

```typescript
const colors = {
  red: '#00ffff',
  blue: '#ff00ff'
};

type Colors = keyof typeof colors;

let color: Colors; // color 的类型是 'red' | 'blue'
color = 'red'; // ok
color = 'blue'; // ok
color = 'something else '; // error
```

## Partial & Pick

Partial 部分可选属性，Pick 指定的属性
![](https://cdn.nlark.com/yuque/0/2019/png/119906/1562833195230-66acb143-d8cd-4815-ab79-16a9061a6e3b.png#align=left&display=inline&height=234&name=image.png&originHeight=234&originWidth=704&size=27989&status=done&width=704)
![](https://cdn.nlark.com/yuque/0/2019/png/119906/1562833259492-55abc7f5-ee54-4523-99a0-e4f4c502fdb4.png#align=left&display=inline&height=135&name=image.png&originHeight=135&originWidth=703&size=16270&status=done&width=703)

```jsx
class MyComponent extends React.PureComponent<Props> {
  defaultProps: Partial<Props> = {};
}
```

## Exclude & Extract

Exclude from T those types that are assignable to U。从 T 中排除那些可分配给 U 的类型
`Extract` :
Extract from T those types that are assignable to U
从 T 中提取可分配给 U 的类型

在 ts 2.8 中引入了一个条件类型, 示例如下
T extends U ? X : Y
  对于联合类型来说会自动分发条件，例如 T extends U ? X : Y, T 可能是 A | B 的联合类型, 那实际情况就变成(A extends U ? X : Y) | (B extends U ? X : Y)
以上语句的意思就是 如果 T 是 U 的子类型的话，那么就会返回 X，否则返回 Y
 type Exclude<T, U> = T extends U ? never : T;

```typescript
// 源码
type Exclude<T, U> = T extends U ? never : T;
// T extends U ? X : Y
// 对于联合类型来说会自动分发条件，例如 T extends U ? X : Y, T 可能是 A | B 的联合类型, 那实际情况就变成(A extends U ? X : Y) | (B extends U ? X : Y)
// 以上语句的意思就是 如果 T 是 U 的子类型的话，那么就会返回 X，否则返回 Y

// # Exclude
type T00 = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>; // "b" | "d"
type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';
const typeName: TypeName<1> = 'number'; // 指定类型名称

type T004 = Exclude<
  { isLoading: boolean },
  { name: string; age: number; isLoading: boolean }
>; // { isLoading: boolean}

type T006 = Exclude<
  { name: string; age: number; isLoading: boolean },
  { isLoading: boolean }
>; // never

type T005 = Extract<
  { isLoading: boolean },
  { name: string; age: number; isLoading: boolean }
>; // never
type T007 = Extract<
  { name: string; age: number; isLoading: boolean },
  { isLoading: boolean }
>; // { name: string; age: number; isLoading: boolean }

// # Extract
type T01 = Extract<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>; // "a" | "c"

type T00 = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>; // "b" | "d"
type T01 = Extract<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>; // "a" | "c"

type T02 = Exclude<string | number | (() => void), Function>; // string | number
type T03 = Extract<string | number | (() => void), Function>; // () => void
```

## Omit 未包含

用之前的 Pick 和 Exclude 进行组合, 实现忽略对象某些属性功能, 源码如下

```typescript
type Foo2 = Omit<{ name: string; age: number }, 'name'>; // -> { age: number }

interface User {
  id: number;
  age: number;
  name: string;
}
// 相当于: type PickUser = { age: number; name: string; }
type OmitUser = Omit<User, 'id'>;
```

**在高阶组件属性的使用 **

```jsx
// 在高阶组件比较常用。
interface ButtonProps {
  color: string;
  size: number;
}
class Button extends Component<ButtonProps> {
  render() {
    return null;
  }
}
type BigButtonProps = Omit<ButtonProps, 'size'>;
const BigButton = (props: BigButtonProps) => <Button size={12} {...props} />;
```

## 资源

- [中文 文档](https://www.tslang.cn/docs/home.html)
- [react-redux-typescript-guide](https://github.com/piotrwitek/react-redux-typescript-guide)
- [typescript-cheatsheets](https://github.com/typescript-cheatsheets)
- [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/#why)
- [TypeScript 高级](https://www.yuque.com/leesren/ee7xk6/wqwt6b)
- [TypeScript 2.8 下的终极 React 组件模式](https://juejin.im/post/5b07caf16fb9a07aa83f2977#heading-11)
