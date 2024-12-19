# portfolio-nodeJS-mySql

This is the backend database for the project <a href="https://github.com/wooiseong/portfolio-project-vercel/tree/main">portfolio</a>. It utilizes express to build a simple web application to collect feedback from users and generate appropriate responses.


## View
Desktop (1366px)
![image](https://i.ibb.co/F7gnw8G/2024-12-18-220154.png)

## Features
|          Code               | Description                                                  | URL                  |
| :--------------------------: | ------------------------------------------------------------ | -------------------- |
|    Home    | 1. A navigation bar that directs to About, Product and Shopping Cart is provided<br>2. User can obtain general informations about sleep<br>3. Updated promotion items are exhibited via Swiper | /      |
|      About       | 1. Users are provided with our brand stories <br>2. The retail store location is added ( iframe ) | /about         |
|      Product        | 1. A full list of products is displayed. <br>2. Users can select products through category filters  | /productList         |
|      Product Detail  | Users can view all details of the intersted product and add it to the shopping cart              | /detail?itemId        |


## Tools
1. Designs&nbsp; (&nbsp;Bootstrap + Sass&nbsp;)
2. Framework&nbsp; (&nbsp;Vue&nbsp;)
3. Building tool&nbsp; (&nbsp;Vite&nbsp;) 
4. Storage&nbsp; (&nbsp;Pinia&nbsp;)
5. Validation&nbsp; (&nbsp;Vee-validate + Yup&nbsp;)
6. Backend&nbsp; (&nbsp;JSON Server&nbsp;)
7. Deployment&nbsp; (&nbsp;Vercel&nbsp;)
8. Code check&nbsp; (&nbsp;husky + lint-staged&nbsp;)

## Backend database (JSON server)
* <a href="https://github.com/wooiseong/sleepPower-jsonServer">Github</a>
* <a href="https://sleep-power-json-server.vercel.app/">Vercel</a>

## Bugs/Future plans
1. The large circle of customized cursor (plugin-GSAP) is not appeared during the first load of this project, until the page is refreshed. I will figure it out or change another cursor animation.

## Installation
Please follow the instructions to get a copy of this project.

### Prerequisites
 * <a href="https://pnpm.io/installation">pnpm</a> 

### Clone
```sh
git clone https://github.com/wooiseong/sleepPower-project.git
```

### Install pnpm packages
```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
