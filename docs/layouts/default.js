const html = require('html-template-tag');

module.exports = async ({ title, content, head }) => html`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Palanquin&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/tomorrow-night-bright.css">
    <script src="https://yandex.st/highlightjs/8.0/highlight.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
    $${head}
    <title>${title}</title>
  </head>
  <body>
    <nav>
      <p class="float-ballon"><a href="/">🎈</a></p>
    </nav>
    $${content}
  </body>
  <style>
    @keyframes float {
      from {
        top: -40px;
      }
      to {
        top: -50px;
      }
    }
  </style>
  <style>
    body {
      background: #222222;
      color: white;
      font-family: Palanquin, sans-serif;
      padding: 2rem;
      max-width: 800px;
      width: 100%;
      margin: 0 auto;
      overflow-y: scroll;
    }

    .float-ballon:hover {
      font-weight: bold;
      top: -40px;
      animation-name: float;
      animation-iteration-count: infinite;
      animation-duration: 1s;
      animation-direction: alternate;
      animation-timing-function: ease-in-out;
    }

    nav p {
      position: fixed;
      left: 30px;
      top: -40px;
      font-size: 50px;
    }

    nav p a {
      text-decoration: none;
    }

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }

    li {
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    small {
      font-size: 12px;
    }

    a {
      color: white;
    }

    pre code {
      font-size: 14px;
      border-radius: 10px;
    }
    
    hr {
      border-top: dotted 1px;
    }

    ul ul li {
      font-size: 13px;
    }

    ul ul li a {
      text-decoration: none;
    }

    ul ul li a:hover {
      text-decoration: underline;
    }

    table {
      border: 1px solid white;
      padding: 5px;
      border-radius: 10px;
    }

    tr {
      border: 1px solid white;
    }

    th {
      padding: 5px;
    }

    td { 
      border-top: 1px solid white;
      font-size: 13px;
      padding: 10px;
    }

    footer {
      margin-top: 20px;
    }

    img {
      border-radius: 10px;
    }

    .code {
      background-color: black; 
      color: #76FF03; 
      padding: 2px;
      padding-left: 4px;
      padding-right: 4px;
      border-radius: 5px;
    }

    .badge {
      background-color: #EEEEEE;
      color: black;
      padding: 5px;
      font-size: 12px;
      margin-left: 10px;
      border-radius: 5px;
    }

    .tip {
      border-left: 3px solid white; 
      border-radius: 3px; 
      padding-left: 20px;
    }
  </style>
  <hr style="margin-top: 40px;">
  <footer>
    <p>Made with Hydrogen by <a style="color: #007acc;" href="https://twitter.com/shailen_naidoo">@shailen_naidoo</a> 🤎</p>
  </footer>
  </html>
`;
