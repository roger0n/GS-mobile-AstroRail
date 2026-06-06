# AstroRail

## Disciplina

**Mobile Development e IoT**

**FIAP - Engenharia de Software**

---

# Descrição do Projeto

O AstroRail é uma plataforma mobile inspirada nos conceitos de logística utilizados em missões espaciais, desenvolvida para auxiliar no gerenciamento e monitoramento de entregas em regiões isoladas ou afetadas por desastres naturais.

O projeto busca aplicar conceitos da exploração espacial em problemas reais da Terra, permitindo o planejamento e acompanhamento de missões de transporte de suprimentos essenciais, como alimentos, medicamentos e água potável.

---

# Problema

Regiões isoladas enfrentam diversos desafios logísticos, como:

* Demora no transporte;
* Falta de medicamentos;
* Dificuldade durante enchentes;
* Difícil acesso à comida e água;
* Alto custo logístico;
* Falta de monitoramento das entregas.

Exemplos:

* Amazônia;
* Áreas rurais;
* Cidades alagadas;
* Regiões montanhosas;
* Locais afetados por desastres naturais.

---

# Solução

O AstroRail utiliza conceitos inspirados na logística espacial para auxiliar no gerenciamento de missões de entrega em regiões de difícil acesso.

A plataforma permite:

* Cadastro de missões;
* Monitoramento das entregas;
* Atualização do status das missões;
* Gerenciamento local dos dados;
* Controle das operações em uma central logística.

---

# Funcionalidades

## Login

* Validação de usuário;
* Controle de acesso ao sistema.

## Home

* Central de controle do AstroRail;
* Exibição das estatísticas das missões;
* Navegação entre as funcionalidades.

## Nova Missão

* Cadastro de novas missões;
* Validação dos campos;
* Armazenamento local.

## Lista de Missões

* Visualização das missões cadastradas;
* Exibição das informações das entregas;
* Exclusão de missões;
* Atualização automática dos dados.

## Monitoramento

* Acompanhamento das missões;
* Visualização do status atual;
* Atualização do status das entregas.

---

# Tecnologias Utilizadas

* React Native;
* Expo;
* TypeScript;
* React Navigation;
* AsyncStorage.

---

# Armazenamento

O projeto utiliza AsyncStorage para armazenar localmente as informações das missões cadastradas, permitindo que os dados permaneçam disponíveis durante a utilização do aplicativo.

---

# Dependências Utilizadas

## Navegação

```
npm install @react-navigation/native

npm install @react-navigation/native-stack

npx expo install react-native-screens react-native-safe-area-context
```

## Armazenamento

```
npx expo install @react-native-async-storage/async-storage
```

## Execução Web

```
npx expo install react-dom react-native-web
```

---

# Instalação

Clone o repositório:

```
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```
cd AstroRail
```

Instale as dependências:

```
npm install
```

Inicie o projeto:

```
npx expo start
```

Para executar na Web:

```
npx expo start --web
```

---

# Usuário de Teste

Email:

```
fiap@teste.com
```

Senha:

```
123456
```

---

# Integrantes

- Augusto Rogel / RM 557709
- Heitor Prestes / RM 554823
- Lucca Ribeiro / RM 556668


---

# Objetivo Acadêmico

O AstroRail demonstra a aplicação prática dos conceitos estudados na disciplina Mobile Development e IoT, utilizando desenvolvimento mobile, armazenamento local de dados e navegação entre telas para criar uma solução inspirada na exploração espacial aplicada a problemas reais da Terra.
