
import { useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import './style.css';

const produtos = [
  {
    id: 1,
    nome: 'Jaqueta Urban',
    categoria: 'Masculino',
    preco: 'R$ 189,90',
    imagem: 'photo-1551028719-00167b16eac5'
  },
  {
    id: 2,
    nome: 'Bolsa Elegance',
    categoria: 'Acessórios',
    preco: 'R$ 149,90',
    imagem: 'photo-1548036328-c9fa89d128fa'
  },
  {
    id: 3,
    nome: 'Look Minimalista',
    categoria: 'Feminino',
    preco: 'R$ 219,90',
    imagem: 'photo-1539109136881-3be0616acf4b'
  },
  {
    id: 4,
    nome: 'Tênis Street',
    categoria: 'Calçados',
    preco: 'R$ 199,90',
    imagem: 'photo-1542291026-7eec264c27ff'
  }
];

function App() {
  const [mensagem, setMensagem] = useState(
    'Sua próxima oferta favorita está aqui.'
  );

  const [permissao, setPermissao] = useState('Não verificada');
  const [carrinho, setCarrinho] = useState(0);
  const [categoria, setCategoria] = useState('Todos');

  const categorias = [
    'Todos',
    'Feminino',
    'Masculino',
    'Calçados',
    'Acessórios'
  ];

  const produtosFiltrados = categoria === 'Todos'
    ? produtos
    : produtos.filter(p => p.categoria === categoria);

  async function verificarPermissao() {
    try {
      if (!Capacitor.isNativePlatform()) {
        setMensagem('A verificação nativa deve ser feita no Android.');
        return;
      }

      const resultado = await LocalNotifications.checkPermissions();

      setPermissao(resultado.display);
      setMensagem(`Permissão atual: ${resultado.display}`);
    } catch (error) {
      console.error(error);
      setMensagem('Não foi possível verificar a permissão.');
    }
  }

  async function solicitarPermissao() {
    try {
      if (!Capacitor.isNativePlatform()) {
        setMensagem('Solicite a permissão no aplicativo Android.');
        return;
      }

      const resultado = await LocalNotifications.requestPermissions();

      setPermissao(resultado.display);
      setMensagem(`Resultado da permissão: ${resultado.display}`);
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao solicitar permissão.');
    }
  }

  async function notificacaoImediata() {
    try {
      if (!Capacitor.isNativePlatform()) {
        setMensagem('Teste a notificação no aplicativo Android.');
        return;
      }

      const resultado = await LocalNotifications.checkPermissions();

      if (resultado.display !== 'granted') {
        setMensagem('Solicite a permissão de notificação primeiro.');
        return;
      }

      await LocalNotifications.schedule({
        notifications: [{
          title: 'ModaShop Oferta',
          body: 'Promoção Relâmpago! 50% off em toda loja!',
          id: 81,
          extra: {
            cupom: 'MODA50',
            desconto: '50%',
            categoria: 'Toda a loja'
          }
        }]
      });

      setMensagem('Notificação imediata enviada com sucesso!');
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao enviar notificação.');
    }
  }

  async function agendarPromocao() {
    try {
      if (!Capacitor.isNativePlatform()) {
        setMensagem('Execute no Android para testar a notificação.');
        return;
      }

      const resultado = await LocalNotifications.checkPermissions();

      if (resultado.display !== 'granted') {
        setMensagem('Solicite a permissão de notificação primeiro.');
        return;
      }

      await LocalNotifications.schedule({
        notifications: [{
          title: 'ModaShop Oferta',
          body: 'Promoção Relâmpago! 50% off em toda loja!',
          id: 80,
          extra: {
            cupom: 'MODA50',
            desconto: '50%',
            categoria: 'Toda a loja'
          },
          schedule: {
            at: new Date(Date.now() + 20000)
          }
        }]
      });

      setMensagem('Oferta agendada! Sua notificação chegará em 20 segundos.');
    } catch (error) {
      console.error(error);
      setMensagem('Não foi possível agendar a promoção.');
    }
  }

  return (
    <div className="site">

      <div className="topbar">
        <p>✦ BEM-VINDO À MODASHOP — ESTILO COM ATÉ 50% OFF</p>
      </div>

      <header className="header">
        <a href="#" className="logo">
          MODA<span>SHOP.</span>
        </a>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#colecao">Coleção</a>
          <a href="#promocao">Promoções</a>
        </nav>

        <button
          className="cart-button"
          onClick={() => setMensagem(`Você adicionou ${carrinho} produto(s) ao carrinho.`)}
        >
          ♡ Carrinho <span>{carrinho}</span>
        </button>
      </header>

      <main>

        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="eyebrow">NOVA TEMPORADA · 2026</span>

            <h1>
              Seu estilo.<br />
              Suas regras.<br />
              <span>Seu momento.</span>
            </h1>

            <p>
              Descubra uma nova forma de expressar sua personalidade.
              Peças selecionadas para transformar seu visual.
            </p>

            <div className="hero-actions">
              <a href="#colecao" className="btn-dark">
                Explorar coleção →
              </a>

              <a href="#promocao" className="btn-outline">
                Ver ofertas
              </a>
            </div>

            <div className="hero-note">
              ✦ MODA QUE COMBINA COM VOCÊ
            </div>
          </div>

          <div className="hero-image">
            <div className="discount-badge">
              <strong>50%</strong>
              <span>OFF</span>
            </div>
            <div className="image-caption">
              <span>THE NEW COLLECTION</span>
              <strong>ESSENCIAL. ELEGANTE. ÚNICA.</strong>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div>✦ <span>Estilo exclusivo</span></div>
          <div>◇ <span>Qualidade selecionada</span></div>
          <div>♡ <span>Feito para você</span></div>
          <div>✧ <span>Ofertas especiais</span></div>
        </section>

        <section className="collection" id="colecao">
          <div className="section-heading">
            <div>
              <span className="eyebrow">ESCOLHA SEU ESTILO</span>
              <h2>Peças em destaque<span>.</span></h2>
            </div>

            <p>Uma seleção especial para renovar seu guarda-roupa.</p>
          </div>

          <div className="filters">
            {categorias.map(item => (
              <button
                key={item}
                className={categoria === item ? 'filter active' : 'filter'}
                onClick={() => setCategoria(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="products">
            {produtosFiltrados.map(produto => (
              <article className="product-card" key={produto.id}>
                <div className="product-image">
                  <img
                    src={`https://images.unsplash.com/${produto.imagem}?auto=format&fit=crop&w=700&q=85`}
                    alt={produto.nome}
                  />
                  <span className="product-tag">DESTAQUE</span>
                  <button
                    className="add-button"
                    onClick={() => {
                      setCarrinho(c => c + 1);
                      setMensagem(`${produto.nome} adicionado ao carrinho!`);
                    }}
                    aria-label={`Adicionar ${produto.nome} ao carrinho`}
                  >
                    +
                  </button>
                </div>

                <div className="product-info">
                  <span>{produto.categoria}</span>
                  <h3>{produto.nome}</h3>
                  <strong>{produto.preco}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="promo-section" id="promocao">
          <div className="promo-text">
            <span className="eyebrow">UMA OPORTUNIDADE ESPECIAL</span>
            <h2>Seu próximo look<br />com <span>50% OFF.</span></h2>
            <p>
              Uma promoção imperdível para você renovar seu estilo.
              Aproveite a oferta relâmpago da ModaShop!
            </p>

            <div className="coupon">
              <div>
                <small>SEU CUPOM EXCLUSIVO</small>
                <strong>MODA50</strong>
              </div>
              <span>50% OFF</span>
            </div>
          </div>

          <div className="promo-actions">
            <div className="notification-icon">♧</div>
            <h3>Não perca essa oferta!</h3>
            <p>Ative sua notificação e receba nosso alerta promocional.</p>

            <button onClick={verificarPermissao} className="notification-button light">
              Verificar permissão
            </button>

            <button onClick={solicitarPermissao} className="notification-button light">
              Solicitar permissão
            </button>

            <button onClick={notificacaoImediata} className="notification-button light">
              ↗ Notificação imediata
            </button>

            <button onClick={agendarPromocao} className="notification-button gold">
              ◷ Agendar promoção · 20 segundos
            </button>
          </div>
        </section>

        <section className="status-section">
          <div className="status-dot"></div>
          <div>
            <strong>Status do aplicativo</strong>
            <p>{mensagem}</p>
            <small>Permissão de notificações: {permissao}</small>
          </div>
        </section>

        <section className="newsletter">
          <span className="eyebrow">FAÇA PARTE DA MODASHOP</span>
          <h2>Moda e novidades em um só lugar.</h2>
          <p>Encontre inspiração para seu próximo visual.</p>
          <a href="#colecao" className="btn-dark">Descobrir coleção →</a>
        </section>

      </main>

      <footer className="footer">
        <a href="#" className="logo footer-logo">
          MODA<span>SHOP.</span>
        </a>
        <p>Estilo, personalidade e autenticidade.</p>
        <div className="footer-bottom">
          <span>© 2026 ModaShop. Todos os direitos reservados.</span>
          <span>PROJETO EDUCACIONAL · ALUNO 08</span>
        </div>
      </footer>

    </div>
  );
}

export default App;
