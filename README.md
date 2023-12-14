# YogaFrontend

-   **Hosted:** [https://marcelayoga.netlify.app/](https://marcelayoga.netlify.app/)

## Running Locally

If you want to run it on your local backend (ignore this step to use our Azure hosted site), follow these steps:

1. Clone this repository to your local machine, and open the folder

2. Change the `VITE_BACKEND_ENDPOINT` in the `.env` file to:

    ```
    http://localhost:3000
    ```

    or whatever you have set as your localhost.
    If you haven't already, you can set up your local backend by following the steps on https://github.com/MaxusTheOne/yoga-backend README.md file

3. Save the changes.

4. Navigate to the `YogaFrontend` directory in your terminal.

5. Run the following commands:

    ```bash
    npm install
    npm run dev
    ```

Now, your frontend should be running locally on the link displayed in your terminal. Visit the link in your browser to access the local version.
