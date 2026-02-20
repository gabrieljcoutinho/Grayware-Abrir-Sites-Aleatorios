# 🚀 Abridor Aleatório de Sites

Um script simples em **Node.js** que abre automaticamente sites aleatórios no navegador padrão em intervalos regulares.

> ⚠️ Atenção: Este script abre abas/janelas repetidamente. Use com responsabilidade.

---

## 📌 Descrição

Este projeto contém um pequeno script que:

- Seleciona aleatoriamente uma URL de uma lista
- Abre o site no navegador padrão do sistema
- Repete o processo em um intervalo definido

Sites atualmente configurados:

- Google  
- YouTube (Rick Roll 😈)  
- Wikipédia (página aleatória)

---

## 🛠️ Requisitos

Antes de executar, você precisa ter instalado:

- **Node.js** → https://nodejs.org/

---

## ▶️ Como Executar

1. Salve o código em um arquivo, por exemplo:

```bash
abridor.js
```

2. Execute no terminal:

```bash
node abridor.js
```

---

## ⚙️ Funcionamento

O script utiliza:

- `Math.random()` → Para escolher um site aleatório  
- `child_process.exec()` → Para executar comandos do sistema  
- `setInterval()` → Para controlar o tempo entre aberturas  

Trecho principal:

```js
setInterval(abrirSite, 5000);
```

---

## ⏱️ Intervalo de Tempo

O valor é definido em **milissegundos**.

Exemplos:

```js
5000   // 5 segundos
20000  // 20 segundos
60000  // 1 minuto
```

Basta alterar o número conforme desejado.

---

## 🖥️ Compatibilidade com Sistemas

O comando padrão no código:

```js
exec(`start ${site}`);
```

Funciona em **Windows**.

Para outros sistemas:

**MacOS**

```js
exec(`open ${site}`);
```

**Linux**

```js
exec(`xdg-open ${site}`);
```

---

## ⚠️ Aviso Importante

Este script pode:

- Abrir muitas abas rapidamente  
- Consumir memória do navegador  
- Causar confusão/diversão dependendo do contexto 😂  

Não execute em máquinas de terceiros sem permissão.

