<h1 align="center" style="display: block; font-size: 40px; font-weight: bold;">

README Generator

[![Stars](https://img.shields.io/github/stars/dami-ani/README-GEN?style=social)](https://github.com/dami-ani/README-GEN/stargazers)
[![Fork](https://img.shields.io/github/forks/dami-ani/README-GEN?style=social)](https://github.com/dami-ani/README-GEN/network/members)
[![Watchers](https://img.shields.io/github/watchers/dami-ani/README-GEN?style=social)](https://github.com/dami-ani/README-GEN/watchers)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</h1>

## Table of Contents 
[✨ Description](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-description)

[🛠️ Installation](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#%EF%B8%8F-installation)

[👉 Usage](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-usage)

[📝 Tests](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-tests)

[🌐 Demo](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-demo)

[💬 Questions](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-questions)

[🤝 Contributing](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-contributing)

[💻 Stack](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-stack)

[📄 License](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#-license)


## ✨ Description
This is a command-line application that dynamically generates a professional README file from a user's input using the Inquirer package.


## 🛠️ Installation
**Install `node` and `npm` using `nvm`.**

**To manage `node`versions effectively, install `nvm` before installing `node` so that there are no conflicts between the runtime environment and version manager.**

<details>
<summary>How to install prerequisites for this project</summary>

---

<div align="right" style="font-weight: 900;"> 

- [ ] Install `nvm`
</div>

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

<div align="right" style="font-weight: 900;"> 

- [x] `nvm` is installed
</div>

---

<div align="right" style="font-weight: 900;"> 

- [ ] Install `node`
</div>

1. In Terminal run the following command:
```sh
nvm install node
```

2. Confirm `node` is installed, in Terminal run the following command:
```sh
node -- version
```

<div align="right" style="font-weight: 900;"> 

- [x] `node` is installed
</div>

---

<div align="right" style="font-weight: 900;"> 

- [ ] Confirm `npm` is installed
</div>

1. In Terminal run the following command:
```sh
npm --version
```

2. If you don't have npm installed, in terminal run the following command:
```sh
npm install -g npm
```
   
<div align="right" style="font-weight: 900;"> 

- [x] `npm` is installed
</div>
</details>



## 👉 Usage
**Make sure you have `node` and `npm` installed locally. If you need help, follow the steps in the [🛠️ Installation](https://github.com/dami-ani/README-GEN?tab=readme-ov-file#%EF%B8%8F-installation) section to get set up.**

<details>
<summary>How to generate the README</summary>
<br>

1. Clone the Repository, in Terminal run the following command:
```sh
git clone https://github.com/YOUR_USERNAME/README-GEN/.git
```

2. Generate a new README, go to your project directory, in Terminal run the following command:
```sh
cd yourProjectDirectory
node index.js
```

3. Follow the prompts to provide information about your project, like its title, description, usage, and more.

4. Once task are completed, locate the generated README in the `output` directory, open it with vscode for review.

5. Customise the generated README to your liking. 

6. Save your changes and commit your new README file to your project repository!
</details>

## 📝 Tests
**To run tests, in Terminal run:**
```sh
npm run test
```

## 🌐 Demo

## 💬 Questions
If you have any questions or need assistance, feel free to reach out to [@dami-ani](https://github.com/dami-ani) or dami.r.anibaba@gmail.com

## 🤝 Contributing
<details>
<summary>How to contribute to this project</summary>
<br>

1. [Fork it](https://github.com/dami-ani/README-GEN/fork)

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


## 💻 Stack 
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)


## 📄 License
Copyright ©️ 2024 [Damilola](https://github.com/dami-ani).

This project is [MIT](./LICENSE) licenced.

<div align="center" style="font-weight: 900;"> <a href="#table-of-contents">↑ Back to top ↑</a></div>
