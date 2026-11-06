 
# 📱 5 - Recursos de Hardware - Notificações Locais

Aplicativo desenvolvido como atividade prática de **Recursos de Hardware**, utilizando React, Vite e Capacitor para implementar notificações locais em dispositivos Android.

## 🎯 Sobre o projeto

O projeto consiste em uma aplicação mobile com temática de loja virtual, chamada **ModaShop**, que demonstra o funcionamento de notificações locais por meio dos recursos nativos do dispositivo.

O objetivo é aprender a solicitar permissões, enviar notificações imediatas e programar notificações para serem exibidas posteriormente.

## 🚀 Funcionalidades

- 🔔 Verificação da permissão para notificações.
- 📲 Solicitação de permissão ao usuário.
- ⚡ Envio de notificações locais imediatas.
- ⏰ Agendamento de notificações para um horário futuro.
- 🏷️ Notificação promocional personalizada.
- 📦 Utilização de informações extras nas notificações.
- 📱 Integração com recursos nativos do Android.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| React | Construção da interface |
| Vite | Ambiente de desenvolvimento |
| JavaScript | Lógica da aplicação |
| CSS3 | Estilização |
| Capacitor | Integração com recursos nativos |
| Local Notifications | Gerenciamento das notificações |
| Android | Plataforma mobile |

## 🔔 Exemplo de notificação

**Título:** ModaShop Oferta

**Mensagem:** Promoção Relâmpago! 50% off em toda loja!

**ID:** 80

**Agendamento:** 20 segundos após a solicitação.

### Informações extras

```javascript
extra: {
  cupom: 'MODA50',
  desconto: '50%',
  categoria: 'Toda a loja'
}
```

## 📂 Estrutura do projeto

```text
modashop-aluno08/
├── android/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── index.html
├── capacitor.config.json
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/recursos-hardware-notificacoes-locais.git
```

### 2. Entrar na pasta

```bash
cd recursos-hardware-notificacoes-locais
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar no navegador

```bash
npm run dev
```

### 5. Preparar para Android

```bash
npm run build
npx cap sync android
npx cap open android
```

Para gerar o APK de teste pelo terminal:

```bash
cd android
.\gradlew.bat assembleDebug
```

## 📱 Observações

- As notificações locais dependem das permissões concedidas pelo usuário.
- Para testar os recursos nativos, utilize um dispositivo Android ou emulador compatível.
- A visualização pelo navegador não reproduz as notificações nativas do Android.
- O Android pode exigir permissões adicionais dependendo da versão do sistema.

## 👨‍💻 Desenvolvedor

**Aluno 08**

Projeto acadêmico desenvolvido para a atividade:

**5 - Recursos de Hardware - Notificações Locais**

---

⭐ Projeto desenvolvido com foco no aprendizado de desenvolvimento mobile e integração com recursos nativos do Android.
