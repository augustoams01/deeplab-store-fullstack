# DeepLab Store Fullstack

Aplicação fullstack de e-commerce desenvolvida com arquitetura moderna utilizando React no frontend e Django REST Framework no backend, totalmente containerizada com Docker. Aplicação feita para processo seletivo strategi!

---

## 🚀 Tecnologias

### Frontend

* React
* TypeScript
* Vite
* TailwindCSS
* Axios

### Backend

* Django
* Django REST Framework
* PostgreSQL
* Pillow

### DevOps

* Docker
* Docker Compose

---

# 📦 Clonando o repositório

```bash
git clone https://github.com/augustoams01/deeplab-store-fullstack.git
```

Entre na pasta do projeto:

```bash
cd deeplab-store-fullstack
```

---

# 🐳 Executando o projeto com Docker

## 1. Build dos containers

```bash
docker compose build
```

---

## 2. Subindo os serviços

```bash
docker compose up
```

Para executar em background:

```bash
docker compose up -d
```

---

# ⚙️ Configuração inicial do backend

Com os containers em execução, execute os comandos abaixo.

---

## 1. Criar migrations

```bash
docker compose exec backend python manage.py makemigrations
```

---

## 2. Aplicar migrations

```bash
docker compose exec backend python manage.py migrate
```

---

## 3. Criar superusuário (opcional)

```bash
docker compose exec backend python manage.py createsuperuser
```

---

# 🌱 Popular o banco de dados

Execute o seeder para cadastrar os produtos iniciais:

```bash
docker compose exec backend python manage.py seed_products
```

---

# 🌐 Endpoints da aplicação

| Serviço      | URL                           |
| ------------ | ----------------------------- |
| Frontend     | `http://localhost:5173`       |
| Backend API  | `http://localhost:8000`       |
| Django Admin | `http://localhost:8000/admin` |

---

# 📁 Estrutura do projeto

```txt
deeplab-store-fullstack/
│
├── backend/
│   ├── core/
│   ├── products/
│   ├── media/
│   ├── seeds/
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
```

---

# 🔥 Comandos úteis

## Parar os containers

```bash
docker compose down
```

---

## Rebuild completo

```bash
docker compose up --build
```

---

## Visualizar logs

```bash
docker compose logs -f
```

---

## Acessar terminal do backend

```bash
docker compose exec backend sh
```

---

## Acessar terminal do frontend

```bash
docker compose exec frontend sh
```

---

## Limpar localStorage (frontend)

Para remover dados antigos salvos no navegador caso tenha dado erro ao adicionar produto ao carrinho:

Abra o console do navegador (F12) e execute:

```bash

localStorage.clear()

```

---

# 📸 Funcionalidades

* Cadastro de produtos
* Upload de imagens
* API RESTful
* Carrinho de compras
* Integração completa entre frontend e backend
* Persistência com PostgreSQL
* Ambiente 100% dockerizado

---

# 📂 Uploads e mídia

Os arquivos enviados ficam armazenados em:

```txt
backend/media/
```

---

# 🧠 Arquitetura

* Frontend desacoplado consumindo API REST
* Backend estruturado com Django REST Framework
* Banco PostgreSQL persistido via volume Docker
* Containers independentes para frontend, backend e banco de dados

---

# 👨‍💻 Autor

**Augusto Silva**

GitHub:
[GitHub - Augusto Silva](https://github.com/augustoams01)
