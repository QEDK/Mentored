![Mentored](https://socialify.git.ci/QEDK/Mentored/png?description=1&font=Bitter&forks=0&issues=1&logo=https%3A%2F%2Fmedia.discordapp.net%2Fattachments%2F763734957306150933%2F765532665629638687%2Flogo-nobg.png&owner=0&pattern=Floating%20Cogs&pulls=1&theme=Light)
## 🙋 What is Mentored?
Mentored intends to be a single, unified platform for people new to the technology and software development to find curated, high-quality resources for their topics of interest from industry experts and real software developers. 👨‍💻

But that's not all, this platform is built to facilitate real learning with mentorship, allowing mentees to find mentors to learn skills and build up their portfolio. ✨

## 💡 Why did we build it?
Remember the first time you started off with tech? The vast internet at your fingertips but it's the first step that's always the hardest. 😓

With Mentored, anyone (even you!) can easily find free resources curated in a single place from industry experts instead of crawling the internet. What's better? You can contact real mentors, software developers and engineers, and contact them to seek guidance. Sounds good? Of course, it is. 🌟

In fact, it doesn't stop there. Mentored allows real people to mentor the future generation of developers and point them to right direction, making sure they can (to take words from our friends at MLH) truly level up. 🆙

## 👨‍🏭 Who are we?
This project was built by [Yash Khare](https://github.com/yashk2000), [Preet Shah](https://github.com/shahpreetk) and [Ankit Maity](https://github.com/QEDK).

## 💻 What did we use?
Mentored has a ReactJS frontend ⚛️ hosted with Netlify, and a Django backend 🐍 backed by PostgreSQL hosted on Google Cloud Platform. The UI is based on React Bootstrap, while the Cloud Run backend uses `psycopg2` for communicating with Cloud SQL. 💽

## 👨‍💻 For contributors
- To get a deeper understanding of the project please check out our project's [wiki](https://github.com/QEDK/Mentored/wiki).
- Before contributing do go through the [Code of Conduct](https://github.com/QEDK/Mentored/blob/master/CODE_OF_CONDUCT.md) and the [Contributor Guidelines](https://github.com/QEDK/Mentored/blob/master/CONTRIBUTING.md).
- If you find any bugs in the application, or a feature you think would be nice to have, please open an [issue](https://github.com/QEDK/Mentored/issues/new/choose).
- Please follow the [style guidelines](https://github.com/QEDK/Mentored/wiki/Style-guidelines) when making contributions. We have automatic labelers and linters set up using GitHub Actions to check all pull requests for syntax and correct labelling. Instructions on running the linter locally can be found below.
- Continue reading the rest of the README to get the build instructions for both the frontend and the backend.

## 🛠️ Installation
The project can be setup by following these instructions, note that you must have `npm` and `pip` installed before proceeding further. You should ideally also be working in a virtual environment, such as Python's `venv` or the `virtualenv` module.

### 🧰 Configuration
For the default server to work normally, you must have a PostgreSQL instance running on your `localhost` (`127.0.0.1`) on port `5432`. Alternatively, if you're working on Google Cloud Platform with a Cloud SQL connection, you can set `GAE_INSTANCE=1` environment variable to use that connection instead and set `DB_HOST` to the connection instance name. ☁️

When working locally, environment variables can be set or loaded from a `.env` file in project root like this 📁:
```INI
SECRET_KEY=<your_top_secret_key>
DB_HOST=<db_host>
DB_NAME=<db_name>
DB_USERNAME=<db_username>
DB_PASSWORD=<db_password>
```

### 🧩 Building dependencies
```bash
$ git clone git@github.com:QEDK/Mentored.git
$ cd Mentored/backend
$ pip3 install -r requirements.txt
$ cd ../frontend
$ npm install
```
That's about it. ✔️

### ⚙️ Running the server
#### 🔙 Backend
```bash
$ cd backend
$ python3 manage.py runserver
  Starting development server at http://127.0.0.1:8000/
```
Finally, navigate to http://localhost:8000 and you should see a `Hello, world!` to signify that your app is now up and running! ⚡

We also provide a `Dockerfile` for easy containerization and deployment, all you need to do is:
```bash
$ docker build -t 'app:Dockerfile' .
$ docker run app:Dockerfile
```
The server should be accessible on all network interfaces on the port `8000`. ⏫

#### ➡️ Frontend
```bash
$ cd frontend
$ npm start
  Starting the development server....
  The app is running at: http://localhost:3000/
```
And the server should be up and running on http://localhost:3000! 🚀

### 🧹 Linting
All Python scripts are linted using [flake8](https://flake8.pycqa.org). To lint your files, simply install and run the `flake8` command in the project root and it should pick up the configuration automatically. GitHub Actions will automatically check your PR against `flake8` once submitted and provide helpful annotations in case of logical or stylistic errors. ℹ️

## 📜 License
This project is released under a free and open-source software license, Apache License 2.0 or later ([LICENSE](LICENSE) or https://www.apache.org/licenses/LICENSE-2.0). The documentation is also released under a free documentation license, namely the [GFDL v1.3](https://www.gnu.org/licenses/fdl-1.3.en.html) license or later.

### 🖊️ Contributions
Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be licensed as above, without any additional terms or conditions.
