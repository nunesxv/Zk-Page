# Guia Oficial de Publicação: `zykon.com.br` & E-mail Corporativo

Parabéns pelo registro do domínio **`zykon.com.br`**! Todo o código do site já está atualizado com seu domínio oficial, SEO completo, OpenGraph (card de preview para WhatsApp/LinkedIn), `sitemap.xml`, `robots.txt` e o e-mail `contato@zykon.com.br`.

Abaixo está o passo a passo direto para colocar o site no ar com **HTTPS gratuito** e criar sua conta de e-mail **`contato@zykon.com.br`** sem custo mensal.

---

## PARTE 1: Colocar o site no ar na Vercel (Gratuito + SSL Automático)

Você pode publicar na Vercel de duas formas: **via terminal (mais rápido, em 1 minuto)** ou **via GitHub**.

### Opção A — Publicação Direta pelo Terminal (Recomendado para colocar no ar agora)
Abra o terminal dentro da pasta `c:\Users\englu\Desktop\Zekon\Zk-Page` e rode:

```powershell
npx vercel --prod
```

1. Ele vai pedir para você fazer login na Vercel (pode entrar com GitHub, Google ou E-mail).
2. Nas perguntas do terminal, basta apertar **Enter** para todas as opções padrão (`Set up and deploy? Yes`, `Link to existing project? No`, `Project name: zykon-tecnologia`).
3. Em ~30 segundos o site estará publicado em um link provisório `.vercel.app`!

*(Se preferir via GitHub: basta subir esta pasta para um repositório no seu GitHub e clicar em **"Add New -> Project"** no painel da [vercel.com](https://vercel.com)).*

---

## PARTE 2: Conectar o domínio `zykon.com.br` (Vercel + Registro.br)

1. Acesse seu projeto no painel da **[Vercel](https://vercel.com/dashboard)**.
2. Vá na aba **Settings** → **Domains**.
3. Digite **`zykon.com.br`** e clique em **Add** (escolha a opção recomendada de adicionar `www.zykon.com.br` redirecionando para `zykon.com.br`).
4. A Vercel mostrará 2 apontamentos DNS. Agora abra o painel do **[Registro.br](https://registro.br)**:
   - Clique no domínio **`zykon.com.br`**.
   - Role até a seção **DNS** e clique em **"Configurar Zona DNS"** (ou **"Editar Zona"**).
   - Clique em **"Nova Entrada"** e adicione estes 2 registros:

| Tipo | Nome (ou Host) | Valor / Destino |
| :--- | :--- | :--- |
| **A** | *(deixe em branco)* | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com.` |

5. Clique em **Salvar** no Registro.br.
6. Em cerca de **5 a 30 minutos**, o certificado de segurança (cadeado HTTPS) será gerado sozinho pela Vercel e **`https://zykon.com.br`** estará oficialmente no ar!

---

## PARTE 3: Criar o E-mail Corporativo Gratuito (`contato@zykon.com.br`)

O **Zoho Mail** oferece o plano **"Forever Free"** (gratuito para sempre para até 5 usuários com domínio próprio, ex: `contato@zykon.com.br` e `lucas@zykon.com.br`).

### Passo a passo no Zoho Mail:
1. Acesse: **[zoho.com/pt-br/mail/zohomail-pricing.html](https://www.zoho.com/pt-br/mail/zohomail-pricing.html)**
2. Role a página até embaixo, onde aparece **"Plano Gratuito para Sempre"** (Até 5 usuários) e clique em **Inscrever-se gratuitamente**.
3. Escolha **"Adicionar agora um domínio que já possuo"** e digite `zykon.com.br`.
4. O Zoho vai pedir para verificar que o domínio é seu adicionando registros no DNS do **Registro.br**:
   - **Verificação TXT:** Adicione uma entrada `TXT` no Registro.br com o código `zoho-verification=...` que aparecer na tela.
   - **Criar a conta:** Escolha `contato@zykon.com.br` (ou `lucas@zykon.com.br` com alias `contato@zykon.com.br`).
   - **Apontamentos MX (para receber e-mails):** No Registro.br, adicione as 3 entradas do tipo **MX** que o Zoho indicar:
     - `MX` | Prioridade `10` | `mx.zoho.com`
     - `MX` | Prioridade `20` | `mx2.zoho.com`
     - `MX` | Prioridade `50` | `mx3.zoho.com`
   - **SPF e DKIM (para seus e-mails nunca caírem no Spam):** Copie o registro `TXT` de SPF (`v=spf1 include:zohomail.com ~all`) que o Zoho mostrar e salve no Registro.br.

Pronto! Você poderá enviar e receber e-mails pelo aplicativo do Zoho Mail no celular ou pelo navegador como **`contato@zykon.com.br`**.
