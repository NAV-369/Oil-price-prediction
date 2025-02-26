# Project README

This repository is a part of the project involving data analysis and model forecasting for Brent oil prices.
Below are the tasks included in this project.

## Task 1: Data Ingestion and Preprocessing

### Overview:
Task 1 involves collecting data from relevant sources, preprocessing it, and structuring it for further analysis. This includes cleaning the data, handling missing values, normalizing the features, and preparing the dataset for the next stages of modeling.

### Key Objectives:
- Identify and connect to relevant data sources.
- Implement a message ingestion system for collecting data.
- Preprocess text data (tokenizing, normalizing, handling linguistic features).
- Clean the data and structure it for analysis.
- Store the data in a format suitable for further steps.

### Key Steps:
1. Connect to sources and scrape data.
2. Tokenize and clean the text data.
3. Handle missing values and impute data where necessary.
4. Normalize text and numerical features for consistency.
5. Store processed data in a structured format for use in further tasks.

## Task 2: Feature Engineering and Model Building

### Overview:
In Task 2, we focus on feature engineering, which involves creating new features, encoding categorical variables, handling missing values, and normalizing data. This task also includes the building of predictive models.

### Key Objectives:
- Create aggregate and extracted features from raw data.
- Encode categorical variables to prepare them for machine learning models.
- Handle missing data effectively.
- Normalize or standardize numerical data for modeling.

### Key Steps:
1. Implement feature engineering techniques (e.g., creating interaction features, calculating statistics).
2. Apply feature encoding for categorical variables.
3. Handle missing values by imputation or removal.
4. Normalize or standardize the data for consistency.
5. Build and evaluate predictive models (e.g., Random Forest, GBM).
6. Tune models for better performance.

## Task 3: Model Serving and Dashboard Development

### Overview:
Task 3 involves creating a REST API for real-time predictions from trained models and building an interactive dashboard for visualizing key insights from the data. The dashboard will provide users with a better understanding of the models’ outputs and the impact of various events on the forecasted data.

### Key Objectives:
- Develop a REST API to serve machine learning models.
- Build an interactive, user-friendly dashboard to visualize data and results.
- Integrate data filters, date ranges, and event highlights into the dashboard.
- Provide key metrics like volatility, forecast accuracy, and other model performance metrics.

### Key Steps:
1. Develop an API using Flask for serving trained models.
2. Set up endpoints for real-time predictions and model evaluation metrics.
3. Build a front-end dashboard using React for visualizing insights.
4. Integrate charting libraries like Recharts, Chart.js, or D3.js for data visualization.
5. Ensure responsiveness across different devices.
6. Test and deploy the dashboard for end-users.
