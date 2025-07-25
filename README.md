# 💖 pamsz

Um projeto feito com carinho para alguém especial.

<p align="center">
  <img src="https://i.imgur.com/CK8Hs1J.mp4" width="250" />
</p>

**pamsz** é um site minimalista, fofo e interativo feito com [SvelteKit](https://kit.svelte.dev), criado originalmente como um presente digital para a Pamela. A proposta é simples: enviar carinho de um jeito leve, divertido e inesperado — como um correio elegante digital.

## ✨ Funcionalidades

- 🎞️ Exibição de imagens e vídeos fofos (como se fossem GIFs)
- 🌧️ "Chuva de carinho": imagens/elementos caem na tela com animações suaves
- 🔁 Geração aleatória de mídias
- 🫶 Interface responsiva, feita com amor
- 🛜 Deploy via GitHub Pages

> 💡 O projeto pode evoluir para permitir que qualquer pessoa envie experiências visuais personalizadas para alguém especial, como um correio fofo digital (ex: namoradx, ficante, crush, amigo).

## 📦 Tecnologias

- [SvelteKit](https://kit.svelte.dev)
- [Vite](https://vitejs.dev)
- [Adapter Static](https://github.com/sveltejs/kit/tree/main/packages/adapter-static)
- Hospedagem via GitHub Pages
- Imagens/Vídeos via [Imgur CDN](https://imgur.com)

## 🚀 Deploy

O deploy é feito automaticamente via GitHub Actions para GitHub Pages, a cada push na branch `main`.

Caso queira rodar localmente:

```bash
git clone https://github.com/BacelarVitor/pamsz.git
cd pamsz
npm install
npm run dev
```

> ⚠️ Certifique-se de que o arquivo .nojekyll está presente e que o base no svelte.config.js esteja configurado corretamente (base: "/pamsz").

## 🛠️ Customização

Para alterar as mídias exibidas, edite os arrays phrases e mediaItems no componente principal:

```js
const phrases = [
  "Você é tão linda! 💖",
  "Você merece tantas coisas boas ✨",
  ...
];

const mediaItems = [
  { type: 'image', url: 'https://i.imgur.com/rSy37ax.jpeg' },
  { type: 'video', url: 'https://i.imgur.com/CK8Hs1J.mp4' },
  ...
];
```

## 🧪 Exemplos de Uso

  • Criar uma experiência digital personalizada para um amor, crush ou ficante
  • Mandar carinho a distância
  • Surpreender alguém em um aniversário, Dia dos Namorados ou data especial
  • Compartilhar uma chuva de afeto por um link

## 💡 Futuras Funcionalidades

 • Formulário para criar sua própria “chuva de carinho”
 • Página de preview e compartilhamento
 • Adição de música de fundo personalizada
 • Cartas escritas e galeria de memórias
 • Modo “secreto” com senha ou temporizador

## ❤️ Autor

Feito com carinho por @BacelarVitor para Pamela — mas agora pode ser para qualquer pessoa especial também. 🌷

> “Às vezes tudo que a gente precisa é de um link com imagens fofas e carinho sincero.”
