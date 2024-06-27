Microfrontend Monorepo Project
==============================

This project is a microfrontend architecture setup using Vite and TypeScript, consisting of a host application and an auth remote application. The monorepo structure allows for efficient development and management of multiple interconnected applications.

Project Structure
-----------------

-   **host**: The main application that integrates various remote microfrontends.
-   **remote**: An example of a microfrontend that can be integrated into the host application.

Getting Started
---------------

### Prerequisites

-   Node.js (>= 20.x)
-   Yarn (>= 1.x)

### Installation

1.  Clone the repository:
   
    `git clone <repository-url> `
    
    `cd <repository-name>`

3.  Install dependencies:
   
    `yarn install`

Scripts
-------

### Monorepo Scripts

-   **`build:remote`**: Build the remote application.

    `yarn build:remote`

-   **`preview:remote`**: Preview the remote application.

    `yarn preview:remote`

-   **`dev:remote`**: Run the remote application in development mode.

    `yarn dev:remote`

-   **`build:host`**: Build the host application.

    `yarn build:host`

-   **`preview:host`**: Preview the host application.

    `yarn preview:host`

-   **`dev:host`**: Run the host application in development mode.

    `yarn dev:host`

-   **`dev`**: Run both the host and remote applications in development mode concurrently.

    `yarn dev`


Development Workflow
--------------------

To start the development servers for both the host and remote applications concurrently, run:

`yarn build:remote`

`yarn dev`

This will run the host application on port 5000 and the remote application build on port 5001.

Building and Previewing
-----------------------

To build and preview the applications individually, you can use the following scripts:

-   Build the host application:

    `yarn build:host`

-   Preview the host application:

    `yarn preview:host`

-   Build the remote application:

    `yarn build:remote`

-   Preview the remote application:

    `yarn preview:remote`




Contributing
------------

We welcome contributions! Please submit a pull request or create an issue for any bugs or feature requests.

License
-------

This project is licensed under the MIT License. See the LICENSE file for more information.
