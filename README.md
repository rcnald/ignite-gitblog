# Ignite - Gitblog

A motivação por trás dessa simples aplicação, foi enraizar a pratica de consumos de api's com o useEffect, entender os motores do react e como usar isso na sua performance com a lib use-context-selector, e api's nativas do react como memo, useCallback...

Gitblog apresenta o perfil de um usuário do github com seu login, empresa e seguidores logo a baixo, issues que são representadas em formato de post, consumindo a API do github.

## Funcionalidades

- **Filtrar posts:** Filtrar posts por descrição e nome do post.
- **Detalhar post:** Detalhar o post, como data do post, comentários e exibindo sua descrição completa.

## Pré-requisitos

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema.

## Como Usar

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/rcnald/ignite-gitblog.git
   # or
   gh repo clone rcnald/ignite-gitblog
   ```
2. **Entrar no diretório**
    ```bash
    cd ignite-gitblog
    ```
  
3. **Instalar suas dependências**
   
    ```
    npm install
    ```

4. **Iniciar o projeto**
    ```
    npm run dev
    ```
    Logo após isso o projeto será iniciado na porta [http://localhost:5173](http://localhost:5173) se disponível.

## Tecnologias usadas
Tecnologias e bibliotecas utilizadas para a construção do projeto. 
- [react](https://react.dev/)
- [react-router-dom](https://reactrouter.com/en/main)
- [react-hook-form](https://react-hook-form.com/)
- [zod](https://zod.dev/)
- [typescript](https://www.typescriptlang.org/)
- [phosphor-icons](https://phosphoricons.com)
- [tailwind](https://tailwindcss.com/)
- [date-fns](https://date-fns.org/)
- [use-context-selector](https://www.npmjs.com/package/use-context-selector)
- [vite](https://vitejs.dev)