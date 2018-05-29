## Compiler

### 工具库
- Espree -- 基于 Acorn
- setree -- JavaScript 的 AST规范

### compiler primary stages
- Parsing 原始代码抽象化
- Transformating 通过compiler操作抽象代码
- Code Genaration 

### Parsing
- Lexical Analysis 词法分析 Tokenizer(令牌/词法分析器)
- Syntactic Analysis 语句分析 AST

举例：
```bash
# syntax 
( add 2 (subtract 4 2) )

# Tokenizer
[
  { type: 'paren', value: '(' },
  { type: 'name', value: 'add' },
  { type: 'number', value: '2' },
  { type: 'paren', value: '(' },
  { type: 'name', value: 'subtract' },
  { type: 'number', value: '4' },
  { type: 'number', value: '2' },
  { type: 'paren', value: ')' },
  { type: 'paren', value: ')' },
]

# AST
{
  type: 'Program',
  body: [{
    type: 'CallExpression',
    name: 'add',
    params: [{
      type: 'NumberLiteral',
      value: '2',
    }, {
      type: 'CallExpression',
      name: 'subtract',
      params: [{
        type: 'NumberLiteral',
        value: '4',
      }, {
        type: 'NumberLiteral',
        value: '2',
      }]
    }]
  }]
}

```
AST结构说明：
1. Program -- AST 的起点
2. CallExpression（add） Program's body 的第一个元素
3. NumberLiteral (2) CallExpression's params 的第一个元素
4. CallExpression (subtract) CallExpression's params 的第二个元素
5. NumberLiteral (4) CallExpression's params 的第一个元素
6. NumberLiteral (2) CallExpression's params 的第二个元素

### Transformation
目标是转成新语言，这里着重创建一个针对新语言的新的AST
