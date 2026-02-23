# 🏨 Pousada Digital: Solução de Presença Web para o Turismo Local

Este projeto foi desenvolvido como uma Atividade de Extensão Universitária (Curso de ADS), com o objetivo de ajudar a digitalização de pequenas pousadas e empreendimentos turísticos regionais através de uma interface moderna, rápida e funcional.

## 🚀 Objetivo Social e Impacto
Muitos pequenos proprietários de pousadas não possuem recursos para sistemas de reserva complexos. Este site oferece uma vitrine digital profissional sem custos de manutenção de servidor (back-end), utilizando integração direta com o WhatsApp para fechamento de reservas.

### ✨ Funcionalidades Principais
Design Responsivo: Criado com Bootstrap 5, garantindo que o site funcione perfeitamente em celulares, tablets e computadores.

Botão Flutuante de WhatsApp: Acesso rápido para dúvidas do cliente em qualquer parte da navegação.

Sistema de Pré-Reserva via WhatsApp: * O cliente preenche um formulário detalhado na página de reservas.

Ao clicar em enviar, o sistema organiza os dados e abre automaticamente o WhatsApp do proprietário com a mensagem pronta (check-in, check-out, nome da pessoa, etc.).

Validação Inteligente: Script em JavaScript que impede o envio de formulários incompletos, garantindo que o proprietário receba todas as informações necessárias.

### 🛠️ Como usar este projeto (Guia para o Empreendedor)
Se você é proprietário de uma pousada e deseja usar este site, siga estes passos simples:

1. Personalize as informações
Abra o arquivo index.html e os demais arquivos .html em um editor de texto e altere os textos de descrição, fotos para os da sua pousada.

2. Configure seu WhatsApp
No arquivo de script ou nos links de contato, substitua o número de telefone pelo seu (com DDD e código do país).

Dica: O formulário de reserva já está configurado para converter os dados em uma mensagem legível para você!

3. Hospedagem Gratuita
Você pode colocar este site no ar gratuitamente usando o GitHub Pages ou Vercel.

Crie uma conta no GitHub.

Suba estes arquivos.

Ative o "Pages" nas configurações.

### 💻 Tecnologias Utilizadas
HTML5: Estrutura semântica e acessível.

CSS3: Estilização personalizada.

Bootstrap 5: Framework para layout responsivo e componentes modernos.

JavaScript: Lógica de validação e integração com API do WhatsApp.

### 🛠️ Como Usar as funcionalidades principais:
1. Botão Flutuante de WhatsApp
Este código cria aquele ícone que "persegue" o usuário na tela, facilitando o contato imediato.

Onde mudar o número: No link https://wa.me/552434511134.

55: Código do Brasil.

24: DDD (mude para o da sua região).

34511134: O número do WhatsApp (sem traços ou espaços).

Onde mudar a frase inicial: Depois de ?text=, você escreve a mensagem que o dono da pousada quer receber. Use %20 para representar os espaços.

2. Formulário Dinâmico de Reservas
O JavaScript pega o que o cliente digitou e "arruma" para o WhatsApp.
const url = `https://wa.me/552434511134?text=${encodeURIComponent(msg)}`;
Onde mudar o número: https://wa.me/552434511134

3. Mapa de Localização (Google Maps)
O código que está no link do mapa de localização (googleusercontent). Para colocar um mapa real da pousada, o procedimento é este:
Vá ao Google Maps e pesquise o endereço da pousada.

Clique em Compartilhar e depois em Incorporar um mapa.

Clique em Copiar HTML.

Substitua todo o conteúdo dentro da sua <div class="map-responsive"> pelo código que você copiou.

✨ Dica: a classe map-responsive serve para que o mapa não "quebre" a tela quando alguém abrir o site pelo celular.


### 📄 Licença
Este projeto é de código aberto (Open Source). Sinta-se à vontade para baixar, modificar e usar no seu negócio!


