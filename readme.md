# NutriCare Backend

Welcome to the NutriCare Backend repository. This project is the backend service for the NutriCare application, which provides nutritional information and health tracking features.

## Table of Contents
- [Installation](#installation)
- [Running Locally](#running-locally)
    - [Using npm](#using-npm)
    - [Using nodemon](#using-nodemon)
    - [Using Docker](#using-docker)
- [CRUD Operations](#crud-operations)
- [Azure DevOps](#azure-devops)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/NutriCare_be.git
cd NutriCare_be
npm install
```

## Running Locally

### Using npm

To run the application using npm, use the following command:

```bash
npm start
```

### Using nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. To use nodemon, install it globally and then run the application:

```bash
npm install -g nodemon
nodemon src/index.js
```

### Using Docker

To run the application using Docker, follow these steps:

1. Build the Docker image:

    ```bash
    docker build -t nutricare-backend .
    ```

2. Run the Docker container:

    ```bash
    docker run -p 3000:3000 nutricare-backend
    ```

## CRUD Operations

The NutriCare Backend provides CRUD (Create, Read, Update, Delete) operations for managing nutritional data and user information. Below are the endpoints available:

- **Create**: Add new nutritional data or user information.
- **Read**: Retrieve existing data.
- **Update**: Modify existing data.
- **Delete**: Remove data.

Refer to the API documentation for detailed information on each endpoint and how to use them.

## Azure DevOps

This project uses Azure DevOps for continuous integration and deployment. The pipeline is defined in the `azure-pipelines.yml` file. To set up Azure DevOps:

1. Create a new project in Azure DevOps.
2. Set up a new pipeline and connect it to your GitHub repository.
3. Configure the pipeline using the `azure-pipelines.yml` file in the repository.
4. Set up any necessary service connections and environment variables in the Azure DevOps project settings.

## Contributing

We welcome contributions to the NutriCare Backend project. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch to your fork.
4. Create a pull request to the main repository.

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.