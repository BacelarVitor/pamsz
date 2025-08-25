<script lang="ts">
  import { onMount } from "svelte";

  // carta revisada (hardcoded)
  const letter = {
    title: "Minha Carta 💌",
    content: `Pâmela,

Você é importante — mais do que eu deixo transparecer — e você tem razão em muita coisa 

do que disse. Eu não tenho sido justo com você, e você não só não fez nada para merecer 

isso, como fez por merecer muito mais. Sinto muito por toda a ansiedade e a dor que te causei. 

É verdade que tenho receios e medos, e que nós temos nossas questões, mas nada disso torna 

OK não te oferecer o mínimo.

Eu me envergonho do que tenho sido para você. Estou mais fechado do que o comum e tenho 

medo de muitas coisas, mas, se você ainda estiver disposta a me ouvir, eu gostaria que a 

gente conversasse antes de eu ir para o Sul. E, principalmente, gostaria de mais uma chance: 

para fazer certo, ajustar comportamentos e deixar de te privar do que você merece por causa 

dos meus medos e receios. Eles ainda existem, mas guardar tudo para mim não é o caminho; 

podemos tentar lidar juntos, nos ajudar. Se depois dessa tentativa honesta e 

sincera — com demonstrações concretas e estando mais presente, como você merece 

— ainda assim não te fizer bem ou não funcionar, tudo bem: eu me retiro e deixo você 

viver o que merece. Eu só não quero te perder sem lutar para te manter.

Você é admirável em vários quesitos: é bela, doce, carinhosa, dengosa, decidida e honesta 

— e sempre me ofereceu acolhimento (e alguns socos). Peço perdão: o justo era você ter tido 

mais desde o começo, mas eu ainda quero tentar corrigir isso. Podemos?

Se a sua pergunta interna é sobre o que somos, eu não sei ao certo, mas posso te assegurar 

compromisso, respeito e que você é a única. Eu tenho sentimentos fortes por você; posso dizer 

que te amo de uma forma — e isso me assusta no momento —, por isso tento mostrar com cuidado, 

ainda que, às vezes, de formas preguiçosas. Você merece mais, e eu quero ser mais por você.


Com carinho e amor,
— Esquilo idiota 🐿️💙`
  };

  // código válido via querystring ?code=ESQUILO
  const VALID_CODE = "ESQUILO";

  // janela de reabertura: 1 hora (ms)
  const WINDOW_MS = 60 * 60 * 1000;

  let allowed = false;
  let error: string | null = null;

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code !== VALID_CODE) {
      error = "Código inválido ou ausente.";
      return;
    }

    const key = "lastread-" + code;
    const lastReadStr = localStorage.getItem(key);
    const now = Date.now();

    if (lastReadStr) {
      const lastRead = Number(lastReadStr);
      const elapsed = now - lastRead;

      if (elapsed < WINDOW_MS) {
        const remainingMs = WINDOW_MS - elapsed;
        const remainingMin = Math.ceil(remainingMs / 60000);
        error = `Esta carta já foi lida há pouco. Tente novamente em ~${remainingMin} minuto(s). 🔒`;
        return;
      }
    }

    allowed = true;
    localStorage.setItem(key, String(now));
  });

  // bloqueios básicos (dissuade; não é infalível)
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && ["p", "s"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    });
    window.addEventListener("contextmenu", (e) => e.preventDefault());
  }
</script>

<svelte:head>
  <!-- essencial pro mobile -->
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
   <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">
</svelte:head>

{#if error}
  <p class="msg">{error}</p>
{:else if allowed}
  <div class="page">

    <article class="paper">
      <h1>{letter.title}</h1>
      <pre class="content" >{letter.content}</pre>
    </article>
  </div>
{:else}
  <p class="msg">Carregando...</p>
{/if}

<style>
  :root{
    /* tipografia fluida */
    --fs-body: clamp(16px, 2.6vw, 19px);
    --fs-title: clamp(1.25rem, 6vw, 1.9rem);
    --radius: 12px;
    --pad: clamp(1rem, 3.5vw, 2rem);
    --shadow: 0 10px 30px rgba(0,0,0,.08), inset 0 0 60px rgba(139,69,19,.08);
  }

  .msg{
    min-height: 100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 0 var(--pad);
    background: #f7f3e8;
    font-weight: 600;
    color: #3b2e1a;
    text-align:center;
    font-family: 'Great Vibes', cursive;
    font-size: 1.5rem;
  }

  .page {
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: #f7f3e8;
    padding: calc( env(safe-area-inset-top) + var(--pad) )
             calc( env(safe-area-inset-right) + var(--pad) )
             calc( env(safe-area-inset-bottom) + var(--pad) )
             calc( env(safe-area-inset-left) + var(--pad) );
  }


  .paper {
    width: min(100%, 760px);
    background: #fdf8e4;
    padding: var(--pad);
    border: 1px solid #e5d8a8;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    color: #3b2e1a;
  }

  h1 {
    margin: 0 0 .75rem 0;
    font-size: var(--fs-title);
    line-height: 1.2;
    text-wrap: balance;
    font-family: 'Great Vibes', cursive;
  }

  .content{
    /* melhor quebra para telas estreitas */
    font-size: var(--fs-body);
    white-space: pre-wrap;     /* respeita \n */
    overflow-wrap: anywhere;   /* quebra palavras grandes */
    word-break: normal;
    hyphens: auto;             /* hifenização automática quando suportada */
  }

  /* ajustes finos no mobile pequeno */
  @media (max-width: 420px){
    :root{
      --radius: 10px;
      --shadow: 0 8px 22px rgba(0,0,0,.07), inset 0 0 40px rgba(139,69,19,.06);
    }
    .paper{ padding: calc(var(--pad) * 0.9); }
  }

  /* evita “zoom ao focar” no iOS em inputs (se adicionar no futuro) */
  input, textarea, button { font-size: 16px; }

  @media print { body { display: none !important; } }
</style>