<h1 align="center">

README Generator

[![Stars](https://img.shields.io/github/stars/dami-ani/README-GEN?style=social)](https://github.com/dami-ani/README-GEN/stargazers)
[![Fork](https://img.shields.io/github/forks/dami-ani/README-GEN?style=social)](https://github.com/dami-ani/README-GEN/network/members)
[![Watchers](https://img.shields.io/github/watchers/dami-ani/README-GEN?style=social)](https://github.com/dami-ani/README-GEN/watchers)

[![License: MIT](https://img.shields.io/badge/License-MIT-skyblue.svg)](https://opensource.org/licenses/MIT)
</h1>

## Table of Contents 
[📂 Folder Structure](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-folder-structure)

[✨ Description](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-description)

[🛠️ Installation](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#%EF%B8%8F-installation)

[👉 Usage](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-usage)

[📝 Tests](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-tests)

[🌐 Demo](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-demo)

[💬 Questions](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-questions)

[🤝 Contributing](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-contributing)

[💻 Stack](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-stack)

[📄 License](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-license)

<br>

## 📂 Folder Structure 

```sh
.
└── README-GEN
    ├── .github
    │   ├── CODE_OF_CONDUCT.md
    │   ├── CONTRIBUTING.md
    │   ├── SECURITY.md
    │   └── ISSUE_TEMPLATE
    │       └── reporting.md
    ├── output
    │   └── README.md
    ├── utils
    │   └── generateMarkdown.js
    ├── .gitignore
    ├── LICENSE
    ├── README.md
    ├── index.js
    └── package.json
```

<br>

## ✨ Description
**This is a command-line application that dynamically generates a professional README file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).**
<br>

## 🛠️ Installation
**Install `node` and `npm` using `nvm`.**

**To manage `node`versions effectively, install `nvm` before installing `node` so that there are no conflicts between the runtime environment and version manager.**

<details>
<summary>How to install prerequisites for this project</summary>

---

**Install `nvm`**

1. Use cURL to download installation script. In Terminal run the following command:
```sh
 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

2. Follow the instructions on your Terminal, you'll be promted to add some lines to your shell config file `.zshrc`. 

    Open your shell config file `.zshrc` in vscode, in Terminal run the following command:
```sh
code . zshrc
```

3. At the bottom of your `.zshrc` file, copy and paste the following:

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" 
```

4. Save the file and exit vscode. 

5. Restart Terminal to apply the changes or run the following command in Terminal:
```sh
source . ~/.zshrc 
```
6. Confirm `nvm` is installed, in Terminal run the following command:
```sh
nvm -- version
```

---

<br>

**Install `node`**

1. In Terminal run the following command:
```sh
nvm install --lts
```

2. Confirm `node` is installed, in Terminal run the following command:
```sh
node -- version
```

---

<br>

**Confirm `npm` is installed**

1. In Terminal run the following command:
```sh
npm --version
```

2. If you don't have npm installed, in terminal run the following command:
```sh
npm install -g npm
```
</details>

---

<br>

## 👉 Usage
**Make sure you have `node` and `npm` installed locally. If you need help, follow the steps in the [🛠️ Installation](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#%EF%B8%8F-installation) section to get set up.**

<details>
<summary>How to generate the README</summary>
<br>

1. Clone this repository, in Terminal run the following command:
```sh
git clone https://github.com/YOUR_USERNAME/README-GEN/.git
```

2. Go to your project directory, in Terminal run the following command:
```sh
cd yourProjectDirectory
node index.js 
```

3. Follow the prompts to provide information about your project, for example the title, description, usage, and more.

4. Once all questions are answered, locate the generated README file in the `output` directory, open it with vscode for review.

5. Customise the generated README file to your liking. 

6. Save your changes and commit your new README file to your project repository!
</details>

<br>

## 📝 Tests
N/A

<br>

## 🌐 Demo

<br>

## 💬 Questions
If you have any questions or need assistance, feel free to reach out to [@dami-ani](https://github.com/dami-ani) or [dami.r.anibaba@gmail.com](mailto:dami.r.anibaba@gmail.com)

<br>

## 🤝 Contributing
<details>
<summary>How to contribute to this project</summary>
<br>

1. Fork it

2. Clone the forked repository to your local environment, in Terminal run the following command:
```sh
git clone https://github.com/YOUR_USERNAME/README-GEN/.git
```

3. Create your feature branch, in Terminal run the following command:
```sh
git checkout -b feature/yourBranchName
```

4. Make your changes.

5. Commit your changes, in Terminal run the following command:
```sh
git add -A
git commit -m "Add yourBranchName"
```

6. Push your changes to your forked repository, in Terminal run the following command:
```sh
git push origin feature/yourBranchName
```

7. Create a pull request for review. 

8. Review and address feedback. Make necessary changes and then complete stpes 5-7.

**✨ Once your pull request is approved, it will be merged into the main branch ✨**
</details>

<br>

## 💻 Stack 
![Static Badge](https://img.shields.io/badge/GIT-skyblue?style=flat)
![Static Badge](https://img.shields.io/badge/CSS-skyblue?style=flat)
![Static Badge](https://img.shields.io/badge/NPM-skyblue?style=flat)
![Static Badge](https://img.shields.io/badge/HTML-skyblue?style=flat)
![Static Badge](https://img.shields.io/badge/NODE.JS-skyblue?style=flat)
![Static Badge](https://img.shields.io/badge/JAVASCRIPT-skyblue?style=flat)
![Static Badge](https://img.shields.io/badge/MARKDOWN-skyblue?style=flat)

<br>

## 📄 License
Copyright ©️ 2024 [Damilola](https://github.com/dami-ani).

This project is [MIT](./LICENSE) licenced.

<div align="center" style="font-weight: 900;"> <a href="#table-of-contents">↑ Back to top ↑</a></div>

